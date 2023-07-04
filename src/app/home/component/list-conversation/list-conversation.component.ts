import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Conversation } from '../../model/conversation.model';
import { User } from '../../model/user.model';
import { CompatClient } from '@stomp/stompjs';

@Component({
  selector: 'app-list-conversation',
  templateUrl: './list-conversation.component.html',
  styleUrls: ['./list-conversation.component.scss'],
})
export class ListConversationComponent implements OnInit {
  focusList: boolean[] = [];
  conversations: Conversation[] = [];
  currentConversation: Conversation;
  currentUser: User;
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.homeService.prepareData();
    this.homeService.data$.subscribe({
      next: (val) => {
        console.log('This is data refresh');
        this.conversations = [...val];
      },
    });
    this.homeService.currentUser$.subscribe(
      (val) => (this.currentUser = { ...val })
    );
    this.homeService.currentConversation$.subscribe(
      (val) => (this.currentConversation = { ...val })
    );
  }
  setFocus(inf: Conversation) {
    this.conversations = this.conversations.map((val) =>
      val.id == inf.id
        ? { ...val, focus: true, active: false }
        : { ...val, focus: false }
    );
  }
  updateConversation(data: Conversation[]): void {}

  focusTab(tab: Conversation): void {
    this.homeService.currentConversation = tab;
    this.currentConversation = tab;
    this.homeService.seenConversation(tab.id);
    this.homeService.setCurrentConversation(tab);
  }
  handleAddConversation() {
    console.log('Adding');
  }
}
