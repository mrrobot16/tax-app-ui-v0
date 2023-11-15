const classNames = {
    container: 'mx-auto flex flex-col gap-4',
    title: 'text-2xl font-bold leading-[1.1] tracking-tighter text-center',
  };

const styles = {
    main: {
      padding: '1rem',
    },
    messageListContainer: {
      width: '75vw',
      height: '65vh',
      background: '#ffffff',
      borderRadius: '0.5rem',
      border: '1px solid #d9d9e3',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sendMessageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem 0',
      flexDirection: 'column',
    },
};

export { classNames, styles };
