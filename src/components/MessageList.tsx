import { ChatContainerStyling } from 'containers/Chat/styles';
import { UserIcon, BotIcon } from 'assets/icons';
import { MessageListProps, Message } from 'types';

const { classNames, styles } = ChatContainerStyling;

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
            })
          }
      </div>
    );
  }
