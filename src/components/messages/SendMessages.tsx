import { MessagesComponentsStyling } from 'components/messages/styles';
import { SendMessagesProps } from 'types';

const { styles } = MessagesComponentsStyling;

export function SendMessage({sendMessage }: SendMessagesProps) {
    return (
      <div data-id="SendMessage">
        sendMessage
      </div>
    );
  }
export default SendMessage;
