import { CSSProperties, useState } from 'react';

import { ChatContainerStyling } from 'containers/Chat/styles';
import { MessagesList, SendMessagesForm, ErrorMessage } from 'components';
import { MESSAGES_LIST } from 'utils/constants';
import { UserIcon, BotIcon } from 'assets/icons';
import { MessagesListProps, Message } from 'types';
import { chat } from 'services';

const { classNames, styles } = ChatContainerStyling;

export function Chat() {
  const [messageList, setMessageList] = useState<Message[]>(MESSAGES_LIST);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const messageListCallback = () => {};

  const componentDidMount = () => {
    console.log('Here I should fetch either history of messages or do something');
  };

  const sendMessageCallback = (response: Message) => {
    setMessageList((state)=>([
      ...state,
      {
        text: response.text,
        type: 'api',
      },
    ]));
  };

  const sendMessageErrorCallback = (error: string) => {
    setError(error);
  };

  const sendMessage = async (message: Message) => {
    setLoading(true);

    setMessageList([
      ...messageList,
      {
        text: message.text,
        type: 'user',
      },
    ]);

    const response = await chat(message.text, sendMessageCallback, sendMessageErrorCallback);

    setTimeout(() => {
      setLoading(false);
    }, 1000 * 3);
  };

  return (
    <div className={classNames.container}>
      <h1 className={classNames.title}>Chat with Tax Copilot</h1>
      <main style={styles.main}>
        <div className="MessageListContainer" style={styles.messageListContainer}>
            <MessagesList messages={messageList} loading={loading}/>
        </div>
        <div className="SendMessageContainer" style={styles.sendMessageContainer as CSSProperties}>
            <SendMessagesForm loading={loading} sendMessage={sendMessage} callback={sendMessageCallback}/>
        </div>
        { error && <ErrorMessage error={error} /> }
      </main>
    </div>
  );
}

export default Chat;
