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
};

export const ChatContainerStyling = {
    classNames,
    styles,
};
