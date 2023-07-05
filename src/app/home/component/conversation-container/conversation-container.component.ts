import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  ElementRef,
  AfterContentChecked,
} from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Conversation } from '../../model/conversation.model';
import { Participant } from '../../model/participant.model';

@Component({
  selector: 'app-conversation-container',
  templateUrl: './conversation-container.component.html',
  styleUrls: ['./conversation-container.component.scss'],
})
export class ConversationContainerComponent
  implements OnChanges, OnInit, AfterContentChecked
{
  @ViewChild('containerConversation') private chatScrollContainer: ElementRef;
  data: Conversation;
  userOther: Participant;
  message: String;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.currentConversation$.subscribe((val) => (this.data = val));
    this.homeService.currentParticipant$.subscribe(
      (val) => (this.userOther = val)
    );
    this.scrollToBottom();
  }
  ngOnChanges(): void {
    console.log(this.userOther);
  }
  ngAfterContentChecked(): void {
    this.scrollToBottom();
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
  scrollToBottom() {
    try {
      this.chatScrollContainer.nativeElement.scrollTop =
        this.chatScrollContainer.nativeElement.scrollHeight;
    } catch (error) {}
  }
}
