import express from 'express';
import {
  saveConversation,
  findListConversation,
  deleteConversation,
  markConversationBlockHandle,
  unBlockConversationHandle,
} from '../controlllers/ConversationController';

export const conversationRoute = function (app: express.Application) {
  app.route('/api/conversation/save').post(saveConversation);
  app.route('/api/conversation/find-list').post(findListConversation);
  app.route('/api/conversation/delete').post(deleteConversation);
  app.route('/api/conversation/mark-block').post(markConversationBlockHandle);
  app.route('/api/conversation/un-block').post(unBlockConversationHandle);
};
