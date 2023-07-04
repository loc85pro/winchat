import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Conversation } from 'src/app/home/model/conversation.model';
import { Participant } from 'src/app/home/model/participant.model';
import { HomeService } from 'src/app/home/service/home.service';
import { CompatClient } from '@stomp/stompjs/esm6';

@Component({
  selector: 'app-conversation-tab',
  templateUrl: './conversation-tab.component.html',
  styleUrls: ['./conversation-tab.component.scss'],
})
export class ConversationTabComponent implements OnInit, OnChanges {
  @Input() inf: Conversation;
  @Input() isFocus: boolean;
  @Output() focusMe = new EventEmitter<Conversation>();
  participant: Participant = { id: '123', nickname: 'asfd', username: 'asdas' };
  avatar: string = '';
  socket: CompatClient;
  constructor(private homeService: HomeService) {
    console.log('tab init');
  }

  ngOnChanges(): void {
    console.log('OnChangeeeeeeeeeeeee hehehhe');
  }
  ngOnInit(): void {
    console.log('OnInit');
    this.participant =
      this.inf.participant[0].username == this.homeService.currentUser.username
        ? this.inf.participant[1]
        : this.inf.participant[0];
    console.log(this.participant);
    this.avatar =
      'http://localhost:8080/user/get_avatar?username=' +
      this.participant.username;
    this.socket = this.homeService.connectSocket(this.inf.id);
  }
  handleClick(): void {
    this.homeService.seenConversation(this.inf.id);
    this.homeService.setCurrentConversation(this.inf);
    this.homeService.setCurrentSocket(this.socket);
  }
}
