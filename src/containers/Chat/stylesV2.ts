import { CSSProperties } from 'react';

const classNames = {
  container: 'flex h-screen bg-gray-100',
  title: 'text-2xl font-bold leading-[1.1] tracking-tighter text-left p-4',
};

const styles: { [key: string]: CSSProperties } = {
  sidebar: {
    width: '16rem', // Fixed width for the sidebar
    height: 'full', // Full height of the viewport
    background: '#f3f4f6', // A light grey background
    borderRight: '1px solid #d9d9e3', // A border to separate from the main content
  },
  main: {
    padding: '1rem',
    flex: 1, // Takes up all available space after the sidebar
  },
  messageListContainer: {
    width: '100%', // Takes the full width of the main container
    height: 'calc(100vh - 4rem)', // Subtract the height of the title and any additional padding/margins
    background: '#ffffff',
    borderRadius: '0.5rem',
    border: '1px solid #d9d9e3',
    overflowY: 'auto', // Adds a scrollbar if the content overflows
  },
  sendMessageContainer: {
    position: 'absolute', // Adjusted to be absolute
    bottom: '1rem', // Positioned at the bottom of the main container
    width: 'calc(100% - 2rem)', // Account for padding
    left: '50%',
    transform: 'translateX(-50%)', // Centering the container
    padding: '1rem',
  },
};

export const ChatContainerStyling = {
    classNames,
    styles,
};
