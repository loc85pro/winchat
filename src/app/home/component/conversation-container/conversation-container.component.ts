import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Message } from '../../model/message.model';
import { HomeService } from '../../service/home.service';
import { Observer, Observable, Subscription } from 'rxjs';
import { Conversation } from '../../model/conversation.model';
import { User } from '../../model/user.model';
import { Participant } from '../../model/participant.model';

@Component({
  selector: 'app-conversation-container',
  templateUrl: './conversation-container.component.html',
  styleUrls: ['./conversation-container.component.scss'],
})
export class ConversationContainerComponent implements OnChanges, OnInit {
  data: Conversation;
  userOther: Participant;
  message: String;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.currentConversation$.subscribe((val) => (this.data = val));
    this.homeService.currentParticipant$.subscribe(
      (val) => (this.userOther = val)
    );
  }
  ngOnChanges(): void {
    console.log(this.userOther);
  }

  sendMessage() {
    console.log('Submit complete');
    if (this.message != '') {
      this.homeService.sendMessage(
        this.homeService.currentConversation,
        this.message
      );
    }
    this.message = '';
  }
}
