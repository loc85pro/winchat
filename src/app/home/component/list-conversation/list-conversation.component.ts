import { Component, OnInit } from '@angular/core';
import { conversationTab } from '../../model/conversation-tab.model';
import { HomeService } from '../../service/home.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Conversation } from '../../model/conversation.model';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-list-conversation',
  templateUrl: './list-conversation.component.html',
  styleUrls: ['./list-conversation.component.scss'],
})
export class ListConversationComponent implements OnInit {
  focusList: boolean[] = [];
  conversations: conversationTab[] = [];
  conversation$: BehaviorSubject<conversationTab[]> = new BehaviorSubject<
    conversationTab[]
  >([]);
  currentUser: User;
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.homeService.currentUser$.subscribe(
      (data) => (this.currentUser = { ...data })
    );
    this.homeService.preparedData$.subscribe((val: Conversation[]) => {
      console.log(val);
      this.updateConversationTab(val);
      console.log(val.length);
    });
  }
  setFocus(inf: conversationTab) {
    this.conversations = this.conversations.map((val) =>
      val.id == inf.id
        ? { ...val, focus: true, active: false }
        : { ...val, focus: false }
    );
    this.conversation$.next(this.conversations);
  }
  updateConversationTab(data: Conversation[]): void {
    this.conversations = data.map((val: Conversation) =>
      this.convertConToTab(val)
    );
    this.conversation$.next(this.conversations);
  }

  focusTab(tab: conversationTab): void {
    this.conversations.forEach((val: conversationTab) => {
      if (val.id == tab.id) {
        val.focus = true;
        val.active = false;
      } else val.focus = false;
    });
    this.conversation$.next(this.conversations);
  }

  convertConToTab(con: Conversation): conversationTab {
    console.log(con);
    return {
      id: con.id,
      name: con.name,
      avatar:
        'http://localhost:8080/user/get_avatar?username=' +
        (con.participant[0].username == this.currentUser.username
          ? con.participant[1].username
          : con.participant[0].username),
      active: con.seen,
      focus: false,
      lastMessage: {
        content: con.message[0].content,
        you: con.message[0].username == this.currentUser.username,
      },
    };
  }
}
