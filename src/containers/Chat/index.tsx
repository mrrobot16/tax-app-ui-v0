
import { CSSProperties, useState, useEffect } from 'react';

import { ChatContainerStyling } from 'containers/Chat/styles';
import { MessagesList, SendMessagesForm, ErrorMessage } from 'components';
import { MESSAGES_LIST, USER_ID, CONVERSATION_ID, ASSISTANT_LOADING_MESSAGE } from 'utils/constants';
import { Message } from 'types';
import { newConversationWithOpenai, newConversationMessage } from 'services';
import {
  setConversationIdLocalStorage,
  getConversationIdLocalStorage,
  getUserIdLocalStorage,
  setUserIdLocalStorage,
} from 'utils/storage';

const { classNames, styles } = ChatContainerStyling;

export function Chat() {
  const [messageList, setMessageList] = useState<Message[]>(MESSAGES_LIST);
  const [userId, setUserId] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // TODO: Need fix this linting issue.
  /* eslint-disable react-hooks/exhaustive-deps */
  const checkUser = () => {
    // const user_id = getUserIdLocalStorage();

    // if(!user_id) {
    //   // NOTE: For now only one user will be created which is hardcoded.
    //   setUserIdLocalStorage(USER_ID);
      setUserId(USER_ID);
    // }

    // setUserId(user_id);
  };

  const checkConversations = () => {
    // const conversation_id = getConversationIdLocalStorage();
    // NOTE: For now only one conversation will be created which is hardcoded.

    // if(!conversation_id) {
    //   setConversationIdLocalStorage(CONVERSATION_ID);
      setConversationId(CONVERSATION_ID);

  //     return conversationId;
  //   }

  //   setConversationId(conversation_id);
  };

  const componentDidMount = () => {
    checkUser();
    checkConversations();
  };

  useEffect(componentDidMount, [checkUser, checkConversations]);

  const createConversationMessage = async (message: Message) => {
    setLoading(true);

    const newMessage = {
      content: message.content,
      role: message.role,
    };

    setMessageList((prevMessageList) => [
      ...prevMessageList,
      newMessage,
      ASSISTANT_LOADING_MESSAGE,
    ]);

    if(!conversationId) {
      const response = await newConversationWithOpenai(userId, newMessage);
      const openaiResponse = response?.data.openai_message;
      const { content, role, conversation_id } = openaiResponse;
      const assistantMessage = {
        content,
        role,
      };

      setConversationIdLocalStorage(conversation_id);
      setConversationId(conversation_id);

      // setMessageList((prevMessageList) => [
      //   ...prevMessageList,
      //   assistantMessage,
      // ]);
      setMessageList((prevMessageList) => {
        const updatedMessages = [...prevMessageList];

        updatedMessages[updatedMessages.length - 1] = assistantMessage;

        return updatedMessages;
      });

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

      setMessageList((prevMessageList) => {
        const updatedMessages = [...prevMessageList];

        updatedMessages[updatedMessages.length - 1] = assistantMessage;

        return updatedMessages;
      });
      setLoading(false);
    }
  };

  return (
    <div className={classNames.container}>
      <h1 className={classNames.title}>Chat with Tax Copilot</h1>
      <main style={styles.main}>
        <div className="MessageListContainer" style={styles.messageListContainer}>
            <MessagesList messages={messageList} loading={loading} assistantLoadingMessage={ASSISTANT_LOADING_MESSAGE}/>
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
