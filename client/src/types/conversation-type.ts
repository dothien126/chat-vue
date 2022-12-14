import { Message } from './message-type';
import { UserInfor } from './user-type';

export type Conversation = {
  lastMessage: Message;
  unreadMessage: Message[];
  userDetails: UserInfor[];
  isBlock: boolean;
  whoBlock: string;
  _id: string;
};

export type ConversationData = {
  receiverId: string;
};

export type FindListConversation = {
  username: string;
};
