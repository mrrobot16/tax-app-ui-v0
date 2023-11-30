
import { CSSProperties, useState, useEffect, useRef, useCallback } from 'react';
import { AxiosError, isAxiosError } from 'axios';

import 'containers/Chat/styles.css';
import { classNames, styles } from 'containers/Chat/styles';
import { MessagesList, SendMessagesForm, ErrorMessage } from 'components';
import { MESSAGES_LIST, ASSISTANT_LOADING_MESSAGE, STATUS_ERROR_MESSAGES, OPENAI_STATUS_500_ERROR_MESSAGE, OPENAI_STATUS_503_ERROR_MESSAGE, API_STATUS_500_ERROR_MESSAGE } from 'utils/constants';
import { Message } from 'types';
import { getUser, newUser, newMessageChatCompletion, newConversationChatCompletionMessageV1, openAIStatus, apiStatus } from 'services';
import { clearUserIdLocalStorage, getUserIdLocalStorage, setUserIdLocalStorage } from 'utils/storage';

export function Chat() {
  const [messageList, setMessageList] = useState<Message[]>(MESSAGES_LIST);
  const [userId, setUserId] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [codeRed, setCodeRed] = useState(false);
  const hasMounted = useRef(false);

  const setStatusErrorMessages = (error?: string | AxiosError | unknown) => {
    setCodeRed(true);
    setErrorMessage(STATUS_ERROR_MESSAGES);
  };

  const clearErrorMessages = () => {
    setCodeRed(false);
    setErrorMessage(null);
  };

  const createUser = async () => {
    clearUserIdLocalStorage();

    try {
      const user = await newUser();
      const userId = user?.data.id;

      setUserIdLocalStorage(userId);
      setUserId(userId);
    } catch (error: AxiosError | unknown) {
        if(isAxiosError(error)) {
          const message = error.response?.data.detail;

          setCodeRed(true);
          setErrorMessage(message);
        } else {
          console.error('An unknown error occurred: ', error);

          const message = `An unknown error occurred while creating your user`;

          setCodeRed(true);
          setErrorMessage(message);
        }
    }
  };

  const getUserById = useCallback(async (userId: string) => {
    try {
      const user = await getUser(userId);
      const conversation = user?.data.conversations[0];


      const conversationExists = conversation && conversation.messages && conversation.messages.length > 0;

      if(conversationExists) {
        const setNewMessages = (prevMessageList: Message[]) => [
          ...prevMessageList,
          ...conversation.messages,
        ];

        setMessageList(setNewMessages);
      }

      if(conversation) setConversationId(conversation.id);

      console.log('conversation.id', conversation.id);
      setUserId(userId);
    } catch (error: AxiosError | unknown) {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          const message = error.response?.data.detail;

          if(status === 404) {
            clearUserIdLocalStorage();
            createUser();

            return;
          }

          setCodeRed(true);
          setErrorMessage(message);
      } else {
          console.error('An unknown error occurred: ', error);

          const message = `An unknown error occurred while fetching your user`;

          setCodeRed(true);
          setErrorMessage(message);
      }
    }
  }, []);

  const getUserByLocalStorageId = useCallback(async () => {
    const userId = getUserIdLocalStorage();
    const checkUserId = typeof userId === 'string' && userId.length === 20;

    if(checkUserId) {
      getUserById(userId);
    }

    if(!checkUserId) {
      createUser();
    }
  }, [getUserById]);

  const getOpenAIStatus = useCallback(async () => {
    const health = await openAIStatus(setStatusErrorMessages);

    if(health.status === 200) console.log('All good with OpenAI api health: ', health);

    if(health.status === 500 || health.status === 503) {
      setCodeRed(true);
      console.log('Something wrong with OpenAI API health: ', health);

      const message = health.status === 500 ? OPENAI_STATUS_500_ERROR_MESSAGE : health.status === 503 ? OPENAI_STATUS_503_ERROR_MESSAGE : null;

      setErrorMessage(message);
    }
  }, []);

  const getAPIStatus = useCallback(async () => {
    const health = await apiStatus();

    if(health.status === 200) console.log('All good with API health: ', health);
    else if (health.status === 500) {
      setCodeRed(true);
      console.log('Something wrong with API health: ', health);
      setErrorMessage(API_STATUS_500_ERROR_MESSAGE);
    }
  }, []);

  const setUpdatedMessage = (message: Message) => {
    setMessageList((prevMessageList: Message[]) => {
      const updatedMessages = [...prevMessageList];

      updatedMessages[updatedMessages.length - 1] = message;

      return updatedMessages;
    });
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

    if(conversationId) {
      const response = await newMessageChatCompletion(userId as string, conversationId, newMessage);

      const { content, role } = response.data.api.message;
      const assistantMessage = {
        content,
        role,
        isNew: true,
      };

      setUpdatedMessage(assistantMessage);
      setLoading(false);

      if (response && codeRed || errorMessage) clearErrorMessages();
    }

    if(!conversationId) {
      const response = await newConversationChatCompletionMessageV1(userId as string, newMessage);
      const { conversation_id } = response.data;
      const { content, role } = response.data.api.message;
      const assistantMessage = {
        content,
        role,
      };

      setConversationId(conversation_id);
      setUpdatedMessage(assistantMessage);
      setLoading(false);

      if (response && codeRed || errorMessage) clearErrorMessages();
    }
  };

  const componentDidMount = () => {
    if (!hasMounted.current) { // Checking if the component has not mounted
      Promise.all([getOpenAIStatus(), getAPIStatus(), getUserByLocalStorageId()]);
      hasMounted.current = true; // Updating the ref value after the initial mount
    }
  };

  useEffect(componentDidMount, [getOpenAIStatus, getAPIStatus, getUserByLocalStorageId]);

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
        { (codeRed) && <ErrorMessage message={errorMessage} /> }
      </main>
    </div>
  );
}

export default Chat;
