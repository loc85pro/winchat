import { Component } from '@angular/core';
import { conversationTab } from '../../model/conversation-tab.model';

@Component({
  selector: 'app-list-conversation',
  templateUrl: './list-conversation.component.html',
  styleUrls: ['./list-conversation.component.scss'],
})
export class ListConversationComponent {
  conversations: conversationTab[] = [
    {
      id: '123',
      name: 'Anh em buồi',
      active: false,
      avatar:
        'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RgkFrl094HIAX8RUZ0i&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCoAMOv4F6f0WH0hHwnqom2Xl-CulKx0_FGVIjf9bk1Bw&oe=64AA59F8',
      lastMessage: {
        content: 'khi nào lên đi r ra net tri ân sau',
        you: false,
      },
    },
    {
      id: '124',
      name: 'Cục cưng 2',
      active: true,
      avatar:
        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/314106987_1768027270256580_3778512470302785176_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=u9P0DLEvaR0AX_V4eJ8&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAHBusZQcpWXIo695ylacY5RlYdpnlfAri0cGJLzT_iyQ&oe=6486F220',
      lastMessage: { content: 'Đi buổi tối', you: false },
    },
    {
      id: '125',
      name: 'Cục cưng 13',
      active: false,
      avatar:
        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/297001158_1126079245002562_963500006943985208_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=47IFeGCZy-8AX9XEkJe&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfB8Oo3-xwtSNnAR49j7n4eTJl7VrPzsF0htKOeA27BQ7Q&oe=64889EEA',
      lastMessage: { content: 'Bên phải', you: true },
    },
    {
      id: '123',
      name: 'Anh em buồi',
      active: false,
      avatar:
        'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RgkFrl094HIAX8RUZ0i&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCoAMOv4F6f0WH0hHwnqom2Xl-CulKx0_FGVIjf9bk1Bw&oe=64AA59F8',
      lastMessage: {
        content: 'khi nào lên đi r ra net tri ân sau',
        you: false,
      },
    },
    {
      id: '124',
      name: 'Cục cưng 2',
      active: true,
      avatar:
        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/314106987_1768027270256580_3778512470302785176_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=u9P0DLEvaR0AX_V4eJ8&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAHBusZQcpWXIo695ylacY5RlYdpnlfAri0cGJLzT_iyQ&oe=6486F220',
      lastMessage: { content: 'Đi buổi tối', you: false },
    },
    {
      id: '125',
      name: 'Cục cưng 13',
      active: false,
      avatar:
        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/297001158_1126079245002562_963500006943985208_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=47IFeGCZy-8AX9XEkJe&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfB8Oo3-xwtSNnAR49j7n4eTJl7VrPzsF0htKOeA27BQ7Q&oe=64889EEA',
      lastMessage: { content: 'Bên phải', you: true },
    },
    {
      id: '123',
      name: 'Anh em buồi',
      active: false,
      avatar:
        'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RgkFrl094HIAX8RUZ0i&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCoAMOv4F6f0WH0hHwnqom2Xl-CulKx0_FGVIjf9bk1Bw&oe=64AA59F8',
      lastMessage: {
        content: 'khi nào lên đi r ra net tri ân sau',
        you: false,
      },
    },
    {
      id: '124',
      name: 'Cục cưng 2',
      active: true,
      avatar:
        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/314106987_1768027270256580_3778512470302785176_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=u9P0DLEvaR0AX_V4eJ8&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAHBusZQcpWXIo695ylacY5RlYdpnlfAri0cGJLzT_iyQ&oe=6486F220',
      lastMessage: { content: 'Đi buổi tối', you: false },
    },
    {
      id: '125',
      name: 'Cục cưng 13',
      active: false,
      avatar:
        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/297001158_1126079245002562_963500006943985208_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=47IFeGCZy-8AX9XEkJe&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfB8Oo3-xwtSNnAR49j7n4eTJl7VrPzsF0htKOeA27BQ7Q&oe=64889EEA',
      lastMessage: { content: 'Bên phải', you: true },
    },
    {
      id: '123',
      name: 'Anh em buồi',
      active: false,
      avatar:
        'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RgkFrl094HIAX8RUZ0i&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCoAMOv4F6f0WH0hHwnqom2Xl-CulKx0_FGVIjf9bk1Bw&oe=64AA59F8',
      lastMessage: {
        content: 'khi nào lên đi r ra net tri ân sau',
        you: false,
      },
    },
    {
      id: '124',
      name: 'Cục cưng 2',
      active: true,
      avatar:
        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/314106987_1768027270256580_3778512470302785176_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=u9P0DLEvaR0AX_V4eJ8&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAHBusZQcpWXIo695ylacY5RlYdpnlfAri0cGJLzT_iyQ&oe=6486F220',
      lastMessage: { content: 'Đi buổi tối', you: false },
    },
    {
      id: '125',
      name: 'Cục cưng 13',
      active: false,
      avatar:
        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/297001158_1126079245002562_963500006943985208_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=47IFeGCZy-8AX9XEkJe&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfB8Oo3-xwtSNnAR49j7n4eTJl7VrPzsF0htKOeA27BQ7Q&oe=64889EEA',
      lastMessage: { content: 'Bên phải', you: true },
    },
  ];
}
