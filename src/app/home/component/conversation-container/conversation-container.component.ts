import { Component } from '@angular/core';
import { Message } from '../../model/message.model';

@Component({
  selector: 'app-conversation-container',
  templateUrl: './conversation-container.component.html',
  styleUrls: ['./conversation-container.component.scss'],
})
export class ConversationContainerComponent {
  avatarUrl: string =
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/297001158_1126079245002562_963500006943985208_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=47IFeGCZy-8AX9u3zA7&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCVGd8Uri7mKxjaEEgOQ4N6ow3keqF5GNJFI7e5dfLXNw&oe=64889EEA';
  name: string = 'Cục cưng 13';
  messages: Message[] = [
    {
      content: 'Haiz',
      own: false,
      react: 'none',
      type: 'text/plain',
      user: 'quangtan',
      conversationId: '123',
    },
    {
      content: 'Giờ ra jiang nam mà thấy ngồi với em nào thì',
      own: false,
      react: 'cry',
      type: 'text/plain',
      user: 'quangtan',
      conversationId: '123',
    },
    {
      content: 'Chắc nay ở phòng đi',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content: 'Dưỡng sức',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content: 'Mai ra cf cày 1 ngày luôn',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content:
        'Trưa ngồi tới tối luôn ddiii djnsdkn adskfnsdnfs kfnsdkjfnsdjkf djkdn adasdjaskd akdjaskdaksd adaksjdaskd asdjaksjd',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content: 'Cũng đc',
      own: false,
      react: 'cry',
      type: 'text/plain',
      user: 'quangtan',
      conversationId: '123',
    },
    {
      content:
        'Trưa ngồi tới tối luôn ddiii djnsdkn adskfnsdnfs kfnsdkjfnsdjkf djkdn adasdjaskd akdjaskdaksd adaksjdaskd asdjaksjd',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content:
        'Trưa ngồi tới tối luôn ddiii djnsdkn adskfnsdnfs kfnsdkjfnsdjkf djkdn adasdjaskd akdjaskdaksd adaksjdaskd asdjaksjd',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content:
        'Trưa ngồi tới tối luôn ddiii djnsdkn adskfnsdnfs kfnsdkjfnsdjkf djkdn adasdjaskd akdjaskdaksd adaksjdaskd asdjaksjd',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content:
        'Trưa ngồi tới tối luôn ddiii djnsdkn adskfnsdnfs kfnsdkjfnsdjkf djkdn adasdjaskd akdjaskdaksd adaksjdaskd asdjaksjd',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content:
        'Trưa ngồi tới tối luôn ddiii djnsdkn adskfnsdnfs kfnsdkjfnsdjkf djkdn adasdjaskd akdjaskdaksd adaksjdaskd asdjaksjd',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
    {
      content:
        'Trưa ngồi tới tối luôn ddiii djnsdkn adskfnsdnfs kfnsdkjfnsdjkf djkdn adasdjaskd akdjaskdaksd adaksjdaskd asdjaksjd',
      own: true,
      react: 'none',
      type: 'text/plain',
      user: 'loc26',
      conversationId: '123',
    },
  ];
}
