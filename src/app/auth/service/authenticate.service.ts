import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginForm } from '../model/LoginForm.model';
import { Register } from '../model/Register.model';
import { ValidationResponse } from '../model/ValidationResponse.model';
import { TokenModel } from '../model/TokenResponse.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private loginPostURL: string = 'http://localhost:8080/api/login';
  private registerPostURL: string = 'http://localhost:8080/api/signup';
  private validateUsernameGetURL: string =
    'http://localhost:8080/validation/user_existing';

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<TokenModel> {
    let data: LoginForm = { username: username, password: password };

    return this.httpClient.post<TokenModel>(this.loginPostURL, data);
  }

  register(data: Register): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(this.registerPostURL, data);
  }

  checkUserExisting(username: String): Observable<ValidationResponse> {
    return this.httpClient.get<ValidationResponse>(
      this.validateUsernameGetURL + '?username=' + username
    );
  }
  setTokenCookie(token: string) {
    document.cookie = 'token=' + token + ';path=/';
  }
}
