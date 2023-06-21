import { Component } from '@angular/core';
import { Message } from '../../model/message.model';

@Component({
  selector: 'app-conversation-container',
  templateUrl: './conversation-container.component.html',
  styleUrls: ['./conversation-container.component.scss'],
})
export class ConversationContainerComponent {
  avatarUrl: string = 'http://localhost:8080/user/get_avatar?username=loc85pro';
  name: string = 'Cục cưng 13';
  messages: Message[] = [
    {
      id: '123',
      content: 'Haiz',
      type: 'text/plain',
      username: 'quangtan',
      conversationId: '123',
    },
    {
      id: '123',
      content: 'Giờ ra jiang nam mà thấy ngồi với em nào thì',
      type: 'text/plain',
      username: 'quangtan',
      conversationId: '123',
    },
    {
      id: '123',
      content: 'Chắc nay ở phòng đi',
      type: 'text/plain',
      username: 'loc26',
      conversationId: '123',
    },
  ];
}
