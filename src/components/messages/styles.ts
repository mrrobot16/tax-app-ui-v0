const styles = {
    messageList: {
      width: '100%',
      height: '100%',
      overflowY: 'scroll',
      borderRadius: '0.5rem',
    },
    messageItem: {
      display: 'flex',
      padding: '1.5rem',
    },
    apiMessage: {
      background: '#f9fafb',
      color: '#000',
      borderRadius: '0.5rem',
      animation: 'fadein 0.5s',
    },
    userMessage: {
      // display: 'flex',
      // padding: '1.5rem',
    },
    userMessageLoading: {
      // display: 'flex',
      // padding: '1.5rem',
    },
    messageInfo: {
      lineHeight: 1.75,
    },
    icons: {
      height: '100%',
      borderRadius: '0.1rem',
      marginRight: '1rem',
    },
    sendMessageForm: {
      position: 'relative',
    },
    sendMessageInput: {
      position: 'relative',
      resize: 'none',
      fontSize: '1.1rem',
      padding: '1rem 2rem 1rem 2rem',
      width: '75vw',
      borderRadius: '0.5rem',
      border: '1px solid #d9d9e3',
      background: '#ffffff',
      color: '#000',
      outline: 'none',
    },
    sendMessageButton: {
      display: 'flex',
      position: 'absolute',
      top: '0.87rem',
      right: '1rem',
      color: 'rgb(165, 162, 162)',
      background: 'none',
      padding: '0.3rem',
      border: 'none',
    },
    loadingWheel: {
      position: 'absolute',
      top: '0.2rem',
      right: '0.25rem',
    },
};

export const MessagesComponentsStyling = {
    styles,
};
