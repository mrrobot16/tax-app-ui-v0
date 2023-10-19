import { useState, useEffect } from 'react';

export function useTypewriter(content: string, delay: number) {
  const [typingContent, setTypingContent] = useState('');
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

  return typingContent;
}
