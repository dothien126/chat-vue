import { apiClient } from '../http-common';
import { ConversationData, FindListConversation, Conversation } from '../types/conversation-type';

class ConversationService {
  findList(data: FindListConversation) {
    return apiClient.post('/conversation/find-list', data);
  }

  save(data: ConversationData) {
    return apiClient.post('/conversation/save', data);
  }

  delete(data: Conversation) {
    return apiClient.post('/conversation/delete', data);
  }

  block(data: Conversation) {
    return apiClient.post('/conversation/mark-block', data);
  }

  unBlock(data: Conversation) {
    return apiClient.post('/conversation/un-block', data);
  }
}

export default new ConversationService();
