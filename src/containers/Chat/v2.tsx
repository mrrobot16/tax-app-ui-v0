
import { CSSProperties, useState, useEffect, useRef, useCallback } from 'react';

import 'containers/Chat/styles.css';
import { ChatContainerStyling } from 'containers/Chat/stylesV2';
import { MessagesList, SendMessagesForm, ErrorMessage, Sidebar, SidebarToggleButton } from 'components';
import { MESSAGES_LIST, USER_ID, CONVERSATION_ID, ASSISTANT_LOADING_MESSAGE } from 'utils/constants';
import { Message } from 'types';
import { newConversationWithOpenai, newConversationMessage, openAIStatus, apiStatus, newConversationMessageV1 } from 'services';
import { AxiosError } from 'axios';

const { classNames, styles } = ChatContainerStyling;

export function ChatV2() {
  const [messageList, setMessageList] = useState<Message[]>(MESSAGES_LIST);
  const [userId, setUserId] = useState<string | null>(USER_ID);
  const [conversationId, setConversationId] = useState<string | null>(CONVERSATION_ID);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null | AxiosError>(null);
  const [codeRed, setCodeRed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const sendMessage = async (message: Message) => {
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
      try {
        const response = await newConversationMessage(userId, conversationId, newMessage, handleError);
        const openaiResponse = response?.data.openai_message;
        const { content, role, conversation_id } = openaiResponse;
        const assistantMessage = {
          content,
          role,
        };

        setUpdatedMessage(assistantMessage);
        setLoading(false);

        if(response && codeRed || errorMessage) {
          clearErrorMessages();
        }
      } catch (error) {
        setUpdatedMessage({
          content: 'Sorry, message not sent. Please try again',
          role: 'assistant',
        });
        console.error(error);
      }
    }
  };

  const componentDidMount = () => {
    if (!hasMounted.current) { // Checking if the component has not mounted
      checkAPIStatus();
      checkOpenAIStatus();
      hasMounted.current = true; // Updating the ref value after the initial mount
    }
  };

  const sendMessageV1 = async (message: Message) => {
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

    const response = await newConversationMessageV1(newMessage);
    const { content, role } = response.data.message;
    const assistantMessage = {
      content,
      role,
    };

    setUpdatedMessage(assistantMessage);
    setLoading(false);

    if(response && codeRed || errorMessage) {
      clearErrorMessages();
    }
  };

  useEffect(componentDidMount, [checkOpenAIStatus, checkAPIStatus]);

  return (
    <div className={classNames.container}>
      <SidebarToggleButton setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={false} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col w-full h-full md:pl-64"> {/* Adjust padding to match the sidebar width */}
        <h1 className={classNames.title} style={{ color: codeRed ? 'red' : 'inherit' }}>Chat with Tax App V2</h1>
        <main style={styles.main}>
          <div className="MessageListContainer" style={styles.messageListContainer}>
            <MessagesList messages={messageList} loading={loading} />
          </div>
          <div className="SendMessageContainer" style={styles.sendMessageContainer}>
            <SendMessagesForm codeRed={codeRed} loading={loading} sendMessage={sendMessageV1} />
          </div>
          { codeRed && <ErrorMessage error={errorMessage} /> }
        </main>
      </div>
    </div>
  );
}

export default ChatV2;