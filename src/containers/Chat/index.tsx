
import { CSSProperties, useState, useEffect } from 'react';

import { ChatContainerStyling } from 'containers/Chat/styles';
import { MessagesList, SendMessagesForm, ErrorMessage } from 'components';
import { MESSAGES_LIST, USER_ID, CONVERSATION_ID, ASSISTANT_LOADING_MESSAGE } from 'utils/constants';
import { Message } from 'types';
import { newConversationWithOpenai, newConversationMessage } from 'services';

const { classNames, styles } = ChatContainerStyling;

export function Chat() {
  const [messageList, setMessageList] = useState<Message[]>(MESSAGES_LIST);
  const [userId, setUserId] = useState<string | null>(USER_ID);
  const [conversationId, setConversationId] = useState<string | null>(CONVERSATION_ID);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const setUpdatedMessage = (message: Message) => {
    setMessageList((prevMessageList: Message[]) => {
      const updatedMessages = [...prevMessageList];

      updatedMessages[updatedMessages.length - 1] = message;

      return updatedMessages;
    });
  };

  const createConversationMessage = async (message: Message) => {
    setLoading(true);

    const newMessage = {
      content: message.content,
      role: message.role,
    };

    const setNewMessage = (prevMessageList: Message[]) => [
      ...prevMessageList,
      newMessage,
      ASSISTANT_LOADING_MESSAGE,
    ];

    setMessageList(setNewMessage);

    if(!conversationId) {
      const response = await newConversationWithOpenai(userId, newMessage);
      const openaiResponse = response?.data.openai_message;
      const { content, role, conversation_id } = openaiResponse;
      const assistantMessage = {
        content,
        role,
      };

      setConversationId(conversation_id);
      setUpdatedMessage(assistantMessage);
      setLoading(false);
    }

    if(conversationId && userId) {
      const response = await newConversationMessage(userId, conversationId, newMessage);
      const openaiResponse = response?.data.openai_message;
      const { content, role, conversation_id } = openaiResponse;
      const assistantMessage = {
        content,
        role,
      };

      setUpdatedMessage(assistantMessage);

      setLoading(false);
    }
  };

  return (
    <div className={classNames.container}>
      <h1 className={classNames.title}>Chat with Tax Copilot</h1>
      <main style={styles.main}>
        <div className="MessageListContainer" style={styles.messageListContainer}>
            <MessagesList messages={messageList} loading={loading} />
        </div>
        <div className="SendMessageContainer" style={styles.sendMessageContainer as CSSProperties}>
            <SendMessagesForm loading={loading} sendMessage={createConversationMessage} />
        </div>
        { error && <ErrorMessage error={error} /> }
      </main>
    </div>
  );
}

export default Chat;
