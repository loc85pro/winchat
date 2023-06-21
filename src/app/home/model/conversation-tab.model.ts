export interface conversationTab {
  id: string;
  name: string;
  avatar: string;
  active: boolean;
  focus: boolean;
  lastMessage: {
    content: string;
    you: boolean;
  };
}
