const classNames = {
    container: 'mx-auto flex flex-col gap-4',
    title: 'text-2xl font-bold leading-[1.1] tracking-tighter text-center',
  };

const styles = {
    main: {
      display: 'flex',
      FlexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
    },
    cloud: {
      width: '75vw',
      height: '65vh',
      background: '#ffffff',
      borderRadius: '0.5rem',
      border: '1px solid #d9d9e3',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    messageList: {
      width: '100%',
      height: '100%',
      OverflowY: 'scroll',
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
  };

export const ChatContainerStyling = {
    classNames,
    styles,
};
