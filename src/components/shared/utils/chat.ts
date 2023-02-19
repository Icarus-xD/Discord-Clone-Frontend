import store from '../../../store/store';
import { setMessages } from '../../../store/actions/chatActions';
import { IMessage } from '../../../store/slices/chatSlice';

interface SameConversationUpdate {
  participants: string[];
  usersInConversation: string[];
  messages: IMessage[];
}

export const updateDirectChatHistoryIfActive = (data: any) => {
  const { participants, messages } = data;

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails?._id;

  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];

    updateDirectChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateDirectChatHistoryIfSameConversationActive = ({
  participants, usersInConversation, messages,
}: SameConversationUpdate) => {

  const result = participants.every((id) => {
    return usersInConversation.includes(id);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};