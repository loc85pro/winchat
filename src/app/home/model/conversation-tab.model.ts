export interface conversationTab {
  id: string;
  name: string;
  avatar: string;
  active: boolean;
  lastMessage: {
    content: string;
    you: boolean;
  };
}
