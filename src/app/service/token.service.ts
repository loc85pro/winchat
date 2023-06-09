import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenModel } from '../auth/model/TokenResponse.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  accessToken: string | null;
  refreshToken: string | null;
  constructor(private httpClient: HttpClient) {}
  updateToken() {
    this.accessToken = localStorage.getItem('accessToken');
    this.refreshToken = localStorage.getItem('refreshToken');
  }
  setToken(token: TokenModel) {
    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);
    document.cookie = 'token=' + this.accessToken;
  }
  getAccessToken() {
    return this.accessToken;
  }
  getRefreshToken() {
    return this.refreshToken;
  }
  getNewToken(): boolean {
    this.updateToken();
    let myToken: string = 'Bearer ' + this.getRefreshToken();
    console.log('Mytoken: ', myToken);
    let subcription = this.httpClient.get<TokenModel>(
      'http://localhost:8080/token/refresh',
      { headers: { token: myToken } }
    );
    subcription.subscribe({
      next: (token: TokenModel) => {
        this.setToken(token);
        return true;
      },
      error: (error: Error) => {
        console.log(error);
        return false;
      },
    });
    return false;
  }

  getAllConversation(): boolean {
    let result: boolean = false;
    let flag: boolean = true;
    this.updateToken();
    let subcription = this.httpClient.get<any>(
      'http://localhost:8080/other/check_authentication',
      {
        headers: new HttpHeaders({
          Token: 'Bearer ' + this.accessToken,
        }),
      }
    );
    subcription.subscribe({
      next: (val: any) => {
        console.log('oke');
        result = true;
        flag = !flag;
      },
      error: () => {
        this.getNewToken();
        this.httpClient
          .get<any>('http://localhost:8080/other/check_authentication', {
            headers: new HttpHeaders({
              Token: 'Bearer ' + this.accessToken,
            }),
          })
          .subscribe({
            next: () => {
              result = true;
              flag = !flag;
            },
            error: () => {
              flag = !flag;
            },
          });
      },
    });
    while (flag) {
      console.log('this is rs:', result);
    }
    return result;
  }
  getObseverForAuthGuard(): Observable<boolean> {
    this.updateToken();
    return this.httpClient
      .get<boolean>('http://localhost:8080/other/check_authentication', {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(map((response) => response.status === 200));
  }
}
