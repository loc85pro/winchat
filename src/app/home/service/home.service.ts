import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conversation } from '../model/conversation.model';
import { User } from '../model/user.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  preparedDataURL: string = 'http://localhost:8080/data/initialize';
  getOwnDataURL: string = 'http://localhost:8080/user/get_own_data';
  seenURL: string = 'http://localhost:8080/conversation/seen';
  currentUser$ = this.getCurrentUserData();
  preparedData$ = this.prepareData();
  constructor(private httpClient: HttpClient) {}
  getCurrentUserData(): Observable<User> {
    return this.httpClient.get<User>(this.getOwnDataURL, {
      withCredentials: true,
    });
  }
  prepareData(): Observable<Conversation[]> {
    return this.httpClient.get<Conversation[]>(this.preparedDataURL, {
      withCredentials: true,
    });
  }
  seenConversation(id: String) {
    this.httpClient
      .get(this.seenURL, { withCredentials: true })
      .subscribe((val) => console.log(val));
  }
}
