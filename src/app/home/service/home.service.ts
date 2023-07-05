import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conversation } from '../model/conversation.model';
import { User } from '../model/user.model';
import { Subject, Observable } from 'rxjs';
import { Participant } from '../model/participant.model';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  //----------------------------------
  preparedDataURL: string = 'http://localhost:8080/data/initialize';
  getOwnDataURL: string = 'http://localhost:8080/user/get_own_data';
  seenURL: string = 'http://localhost:8080/conversation/seen';
  getConversationByIdURL: string = 'http://localhost:8080/conversation/';
  postMessageURL: string = 'http://localhost:8080/message/';
  socketEntryPoint: string = 'ws://localhost:8080/ws';

  //-----------------------------------------
  data: Conversation[];
  data$: Subject<Conversation[]> = new Subject<Conversation[]>();
  //----------------
  currentConversation: Conversation;
  currentConversation$: Subject<Conversation> = new Subject<Conversation>();
  //----------------
  currentUser: User;
  currentUser$: Subject<User> = new Subject<User>();
  //---------------
  currentParticipant: Participant;
  currentParticipant$: Subject<Participant> = new Subject<Participant>();
  //-------------

  constructor(private httpClient: HttpClient) {}
  //--------------------------------
  currentSocket: CompatClient;
  setCurrentUserData(): void {
    this.httpClient
      .get<User>(this.getOwnDataURL, {
        withCredentials: true,
      })
      .subscribe((val) => {
        this.currentUser = val;
        this.currentUser$.next(val);
      });
  }
  prepareData(): void {
    this.setCurrentUserData();
    this.httpClient
      .get<Conversation[]>(this.preparedDataURL, {
        withCredentials: true,
      })
      .subscribe((val: Conversation[]) => {
        this.data = val;
        this.data$.next(val);
      });
  }
  seenConversation(id: string) {
    this.httpClient
      .get(this.seenURL + '?id=' + id, { withCredentials: true })
      .subscribe((val) => console.log('seen'));
  }

  fetchConversationById(id: string): Observable<Conversation> {
    return this.httpClient.get<Conversation>(this.getConversationByIdURL + id, {
      withCredentials: true,
    });
  }

  setCurrentConversation(con: Conversation) {
    this.currentConversation = con;
    this.currentConversation$.next(con);
    if (con.participant[0].username == this.currentUser.username)
      this.currentParticipant = con.participant[1];
    else this.currentParticipant = con.participant[0];
    this.currentParticipant$.next(this.currentParticipant);
    this.data$.subscribe((data: Conversation[]) => {
      data.forEach((val) => {
        if (val.id == this.currentConversation.id) {
          this.currentConversation = val;
          this.currentConversation$.next(this.currentConversation);
        }
      });
    });
  }
  sendMessage(con: Conversation, message: String) {
    this.httpClient
      .post<Conversation>(
        this.postMessageURL + con.id,
        {
          content: message,
          type: 'text/plain',
        },
        { withCredentials: true }
      )
      .subscribe((val) => console.log(val));
    this.currentSocket.send(
      '/conversation/' + con.id,
      {},
      JSON.stringify({
        username: this.currentUser.username,
        content: message,
        type: 'text-plain',
        conversationId: con.id,
      })
    );
  }
  setCurrentSocket(socket: CompatClient): void {
    this.currentSocket = socket;
  }
  connectSocket(id: string): CompatClient {
    let connection = Stomp.over(new WebSocket(this.socketEntryPoint));
    connection.connect({}, (frames: any) => {
      console.log('Connected: ', frames);
      connection.subscribe('/conversation/' + id, (message: any) => {
        this.data.forEach((val, i) => {
          if (this.data[i].id == id) {
            this.data[i].message.push(JSON.parse(message.body));
            this.data[i].seen = false;
            this.data$.next(this.data);
            console.log(this.data);
          }
        });
      });
    });
    return connection;
  }
}
