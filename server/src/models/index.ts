import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import UserModel from './UserModel';
import ConversationModel from './ConversationModel';
import MessageModel from './MessageModel';

export const db = {
  mongoose: mongoose,
  User: UserModel,
  Conversation: ConversationModel,
  Message: MessageModel,
};
