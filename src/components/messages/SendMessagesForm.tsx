import { CSSProperties, FormEvent, KeyboardEvent, ChangeEvent, useState } from 'react';
import { MessagesComponentsStyling } from 'components/messages/styles';
import { SendMessagesProps } from 'types';
import { LoadingDots } from 'components';
import { SendIcon } from 'assets/icons';

const { styles } = MessagesComponentsStyling;

export function SendMessage({sendMessage, loading }: SendMessagesProps) {
  const [message, setMessage] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // console.log('onChange event', event.target.value);
    setMessage(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('onSubmit event', event);
    sendMessage('');
  };

  const handleEnter = (event: KeyboardEvent | FormEvent) => {
    if ((event as KeyboardEvent).key === 'Enter' && message) {
      onSubmit(event as FormEvent<HTMLFormElement>);
    } else if ((event as KeyboardEvent).key === 'Enter') {
      event.preventDefault();
    }
  };

    return (
      <div className="SendMessageForm" style={styles.sendMessageForm as CSSProperties}>
        <form onSubmit={onSubmit}>
          <textarea
            disabled={loading}
            onKeyDown={handleEnter}
            // ref={textAreaRef}
            rows={1}
            maxLength={512}
            id="sendMessageInput"
            placeholder={
              loading
                ? 'Waiting for response...'
                : 'What tax question do you have?'
            }
            value={message}
            onChange={onChange}
            style={styles.sendMessageInput as CSSProperties}
           />
          <button
            type="submit"
            disabled={loading}
            style={styles.sendMessageButton as CSSProperties}
          >
            {
              loading ? (
                <div style={styles.loadingWheel as CSSProperties}>
                  <LoadingDots color="#000" />
                </div>
              ) : (
                <SendIcon />
              )
            }
          </button>

        </form>
      </div>
    );
  }
export default SendMessage;
