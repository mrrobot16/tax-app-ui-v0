
import { CSSProperties, useState, useEffect, useRef, useCallback } from 'react';
import { AxiosError } from 'axios';

import 'containers/Chat/styles.css';
import { ChatContainerStyling } from 'containers/Chat/styles';
import { MessagesList, SendMessagesForm, ErrorMessage } from 'components';
import { MESSAGES_LIST, ASSISTANT_LOADING_MESSAGE } from 'utils/constants';
import { Message } from 'types';
import { getUser, newUser, newMessageChatCompletion, newConversationChatCompletionMessageV1, openAIStatus, apiStatus } from 'services';
import { getUserIdLocalStorage, setUserIdLocalStorage } from 'utils/storage';

const { classNames, styles } = ChatContainerStyling;

export function Chat() {
  const [messageList, setMessageList] = useState<Message[]>(MESSAGES_LIST);
  const [userId, setUserId] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null | AxiosError>(null);
  const [codeRed, setCodeRed] = useState(false);
  const hasMounted = useRef(false);

  const handleError = (error?: string | null | boolean | Error | unknown) => {
    setErrorMessage(`
    We apologize for the inconvenience, our system is having load issues. 
    Our team is working to improve performance try again in a few minutes.
    Thank you for your patience.
    `);
    setCodeRed(true);
    setLoading(false);
  };

  const setStatusErrorMessages = (error?: string | AxiosError | unknown) => {
    setCodeRed(true);
    setErrorMessage(`
    We apologize for the inconvenience, our system is undergoing maintenance to improve your experience. 
    Thank you for your patience.
    `);
  };

  const clearErrorMessages = () => {
    setCodeRed(false);
    setErrorMessage(null);
  };

  const checkLocalUserId = useCallback(async () => {
    const userId = getUserIdLocalStorage();

    if(userId) {
      const user = await getUser(userId);

      console.log('user: ', user);

      const conversation = user?.data.conversations[0];

      if(conversation) setConversationId(conversation.id);

      setUserId(userId);
    }

    if(!userId) {
      const user = await newUser();

      setUserIdLocalStorage(user?.data.id);
    }
  }, []);

  const checkOpenAIStatus = useCallback(async () => {
    const health = await openAIStatus(setStatusErrorMessages);

    if(health.status === 200) {
      console.log('All good with OpenAI api health: ', health);
    }

    if(health.status === 500 || health.status === 503) {
      setCodeRed(true);
      console.log('Something wrong with OpenAI API health: ', health);

      const message = health.status === 500 ? `
      We apologize for the inconvenience, our system is undergoing scheduled maintenance. 
      Thank you for your patience.
      ` : health.status === 503 ? `
      We apologize for the inconvenience, our app is undergoing scheduled maintenance. 
      Thank you for your patience.
      ` : null;

      setErrorMessage(message);
    }
  }, []);

  const checkAPIStatus = useCallback(async () => {
    const health = await apiStatus(setStatusErrorMessages);

    if(health.status === 200) {
      console.log('All good with API health: ', health);
    }

    if(health.status === 500) {
      setCodeRed(true);
      console.log('Something wrong with API health: ', health);
      setErrorMessage(`
      We apologize for the inconvenience, our platform is undergoing scheduled maintenance. 
      Thank you for your patience.
      `);
    }
  }, []);

  const setUpdatedMessage = (message: Message) => {
    setMessageList((prevMessageList: Message[]) => {
      const updatedMessages = [...prevMessageList];

      updatedMessages[updatedMessages.length - 1] = message;

      return updatedMessages;
    });
  };

  const componentDidMount = () => {
    if (!hasMounted.current) { // Checking if the component has not mounted
      checkAPIStatus();
      checkOpenAIStatus();
      checkLocalUserId();
      hasMounted.current = true; // Updating the ref value after the initial mount
    }
  };

  const sendMessageV1 = async (message: Message) => {
    setLoading(true);

    const newMessage = {
      ...message,
    };

    const setNewMessage = (prevMessageList: Message[]) => [
      ...prevMessageList,
      newMessage,
      ASSISTANT_LOADING_MESSAGE,
    ];

    setMessageList(setNewMessage);

    let response;

    if(conversationId) {
      response = await newMessageChatCompletion(userId as string, conversationId, newMessage);

      const { content, role } = response.data.api.message;
      const assistantMessage = {
        content,
        role,
      };

      setUpdatedMessage(assistantMessage);
      setLoading(false);
    }

    if(!conversationId) {
      response = await newConversationChatCompletionMessageV1(userId as string, newMessage);

      const { content, role } = response.data.api.message;
      const assistantMessage = {
        content,
        role,
      };

      setUpdatedMessage(assistantMessage);
      setLoading(false);
    }

    if(response && codeRed || errorMessage) {
      clearErrorMessages();
    }
  };

  useEffect(componentDidMount, [checkOpenAIStatus, checkAPIStatus, checkLocalUserId]);

  return (
    <div className={classNames.container}>
      <h1 className={classNames.title} style={{ color: codeRed ? 'red' : 'inherit' }}>Chat with Tax App</h1>
      <main style={styles.main}>
        <div className="MessageListContainer" style={styles.messageListContainer}>
            <MessagesList messages={messageList} loading={loading} />
        </div>
        <div className="SendMessageContainer" style={styles.sendMessageContainer as CSSProperties}>
          <SendMessagesForm codeRed={codeRed} loading={loading} sendMessage={sendMessageV1} />
        </div>
        { codeRed && <ErrorMessage error={errorMessage} /> }
      </main>
    </div>
  );
}

export default Chat;
