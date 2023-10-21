import React, { useState, useEffect } from 'react';

import { TypewriterProps } from 'types';


const Typewriter = ({ content, delay }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [typingContent, setTypingContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < content.length) {
      const timeout = setTimeout(() => {
        setTypingContent(previousTypingContent => previousTypingContent + content[typingIndex]);
        setTypingIndex(previousTypingIndex => previousTypingIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [typingIndex, delay, content]);

  return <div dangerouslySetInnerHTML={{ __html: typingContent}} />;
};

export default Typewriter;
