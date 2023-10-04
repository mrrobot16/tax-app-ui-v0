import { useState } from 'react';
import { ChatContainerStyling } from 'containers/Chat/styles';
import { MESSAGES_LIST } from 'utils/constants';
import { UserIcon, BotIcon } from 'assets/icons';

const { classNames, styles } = ChatContainerStyling;

export type Message = {
  info: string;
  type: string;
}

export type MessageListProps = {
  loading: boolean;
  messages: Message[];
  callback: () => unknown | void;
}

export function MessageList({messages, callback, loading}: MessageListProps) {
  return (
    <div className="MessageList" style={styles.messageList}>
        {
          messages.map((message: Message, index: number) => {
            const isLoading = loading && index === messages.length - 1;
            const messageLoadingStyle = isLoading ? {...styles.userMessageLoading, ...styles.messageItem}
            : {...styles.userMessage, ...styles.messageItem};
            const messageStyle = message.type === 'api' ? {...styles.apiMessage, ...styles.messageItem} : messageLoadingStyle;

            return (
                <div key={`chatMessage-${index}`} id={`chatMessage-${message.type}-${index}`} style={messageStyle}>
                  {
                    message.type === 'user' ? (
                      <UserIcon index={index} height={30} width={30} styles={styles.icons} />
                    ) : null
                  }
                  {
                    message.type === 'api' ? (
                      <BotIcon index={index} height={40} width={40} styles={styles.icons}/>
                    ) : null
                  }

                  <div style={styles.messageInfo}>
                    <p>
                      { message.info }
                    </p>
                  </div>
                </div>
            );
            // if(message.type === 'api') {
            //   return
            // }

            // return (
            //   <div/>
            // );
            // return (
            //   <div key={index}>
            //     {message.message}
            //   </div>
            // )
          })
        }
    </div>
  );
}

export function Chat() {
  const [messageList, setMessageList] = useState(MESSAGES_LIST);
  const [loading, setLoading] = useState<boolean>(false);
  const messageListCallback = () => {};

  const componentDidMount = () => {

  };

  return (
    <div className={classNames.container}>
      <h1 className={classNames.title}>Chat with Tax Copilot</h1>
      <main style={styles.main}>
        <div className="Cloud" style={styles.cloud}>
            <MessageList messages={messageList} callback={messageListCallback} loading={loading}/>
        </div>
      </main>
    </div>
  );
}

export default Chat;
