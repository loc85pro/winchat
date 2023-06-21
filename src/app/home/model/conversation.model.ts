import { Message } from './message.model';
import { Participant } from './participant.model';

export interface Conversation {
  id: string;
  name: string;
  type: string;
  lastUpdate: Date;
  seen: boolean;
  participant: Participant[];
  message: Message[];
}
