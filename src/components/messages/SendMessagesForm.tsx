import { CSSProperties, FormEvent, KeyboardEvent, ChangeEvent, useState, useEffect } from 'react';
import { MessagesComponentsStyling } from 'components/messages/styles';
import { SendMessagesProps } from 'types';
import { LoadingDots } from 'components';
import { SendIcon } from 'assets/icons';

const { styles } = MessagesComponentsStyling;

export function SendMessage({sendMessage, loading }: SendMessagesProps) {
  const [message, setMessage] = useState<string>('');
  const [rows, setRows] = useState<number>(1);

  useEffect(() => {
    const numberOfLineBreaks = (message.match(/\n/g) || []).length;

    // Minimum rows = 1, Maximum rows = 4
    setRows(Math.min(4, Math.max(1, numberOfLineBreaks + 1)));
  }, [message]);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendMessage({content: message, role: 'user'});
    setMessage('');
  };

  const handleEnter = (event: KeyboardEvent<HTMLInputElement> | FormEvent) => {
    if ((event as KeyboardEvent).key === 'Enter') {
      event.preventDefault();

      if ((event as KeyboardEvent).shiftKey) {
        setMessage(`${message }\n`);
      } else if (message) {
        onSubmit(event as FormEvent<HTMLFormElement>);
        setMessage('');
      }
    }
  };

  return (
    <div className="SendMessageForm" style={styles.sendMessageForm as CSSProperties}>
      <form onSubmit={onSubmit}>
        <textarea
          disabled={loading}
          onKeyDown={handleEnter}
          rows={rows}
          maxLength={5000}
          aria-multiline
          id="sendMessageInput"
          placeholder={
            loading
              ? 'Waiting for response...'
              : 'Type your tax question'
          }
          value={message}
          onChange={onChange}
          style={styles.sendMessageInput as CSSProperties}
          />
        <button
          type="submit"
          disabled={loading || !message}
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
