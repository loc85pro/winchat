import { Component, Input } from '@angular/core';
import { conversationTab } from 'src/app/home/model/conversation-tab.model';

@Component({
  selector: 'app-conversation-tab',
  templateUrl: './conversation-tab.component.html',
  styleUrls: ['./conversation-tab.component.scss'],
})
export class ConversationTabComponent {
  @Input() inf: conversationTab;
}
