import { CSSProperties } from 'react';
import { LoadingDots } from 'components';
import { MessagesComponentsStyling } from 'components/messages/styles';
import { UserIcon, BotIcon } from 'assets/icons';
import { MessagesListProps, Message } from 'types';

const { styles } = MessagesComponentsStyling;

export function MessagesList(
  {
    messages,
    loading,
  }: MessagesListProps) {
  return (
    <div data-id="MessageList" style={styles.messageList as CSSProperties}>
        {
          messages.map((message: Message, index: number) => {
            const isLoading = loading && index === messages.length - 1;
            const isApiMessage = message.role === 'assistant';
            const userMessageStyle = {...styles.messageItem, ...styles.userMessage};
            const apiMessageStyle = {...styles.messageItem, ...styles.apiMessage};
            const messageLoadingStyle = {...styles.messageItem, ...styles.userMessageLoading};

            const messageStyle = isApiMessage ? apiMessageStyle : isLoading ? messageLoadingStyle : userMessageStyle;

            return (
                <div key={`chatMessage-${index}`} data-id={`chatMessage-${message.role}-${index}`} style={messageStyle}>
                  {
                    message.role === 'user' ? (
                      <UserIcon index={index} height={30} width={30} styles={styles.icons} />
                    ) : null
                  }
                  {
                    message.role === 'assistant' ? (
                      <BotIcon index={index} height={40} width={40} styles={styles.icons}/>
                    ) : null
                  }
                  <div style={styles.messageInfo}>
                    {
                      isLoading ? (
                        <LoadingDots color="#000" />
                      ) : (
                        <div dangerouslySetInnerHTML={{ __html: message.content }} />
                      )
                    }
                  </div>
                </div>
            );
          })
        }
    </div>
  );
}

export default MessagesList;
