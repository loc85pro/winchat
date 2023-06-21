import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { conversationTab } from 'src/app/home/model/conversation-tab.model';
import { HomeService } from 'src/app/home/service/home.service';

@Component({
  selector: 'app-conversation-tab',
  templateUrl: './conversation-tab.component.html',
  styleUrls: ['./conversation-tab.component.scss'],
})
export class ConversationTabComponent implements OnInit {
  @Input() inf: conversationTab;
  @Output() focusMe = new EventEmitter<conversationTab>();
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    console.log(this.inf.avatar);
  }
  handleClick(): void {
    this.homeService.seenConversation(this.inf.id);
    this.focusMe.emit(this.inf);
  }
}
