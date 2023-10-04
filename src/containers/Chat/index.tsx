import { CSSProperties, useState } from 'react';

import { ChatContainerStyling } from 'containers/Chat/styles';
import { MessagesList, SendMessagesForm } from 'components';
import { MESSAGES_LIST } from 'utils/constants';
import { UserIcon, BotIcon } from 'assets/icons';
import { MessagesListProps, Message } from 'types';

const { classNames, styles } = ChatContainerStyling;

export function Chat() {
  const [messageList, setMessageList] = useState(MESSAGES_LIST);
  const [loading, setLoading] = useState<boolean>(false);
  const messageListCallback = () => {};

  const componentDidMount = () => {
    console.log('Here I should fetch either history of messages or do something');
  };

  return (
    <div className={classNames.container}>
      <h1 className={classNames.title}>Chat with Tax Copilot</h1>
      <main style={styles.main}>
        <div className="MessageListContainer" style={styles.messageListContainer}>
            <MessagesList messages={messageList} callback={messageListCallback} loading={loading}/>
        </div>
        <div className="SendMessageContainer" style={styles.sendMessageContainer as CSSProperties}>
            <SendMessagesForm loading={loading} sendMessage={()=>{}}/>
        </div>
      </main>
    </div>
  );
}

export default Chat;
