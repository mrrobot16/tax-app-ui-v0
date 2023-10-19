import { useEffect, useState } from 'react';

import { TypingEffectProps } from 'types/common';

export function TypingEffectMessage({ content, speed }: TypingEffectProps) {
  const [typingContent, setTypingContent] = useState(content.charAt(0));

    speed = 100;
    useEffect(() => {
      let index = 0; // Start from the second character
      const intervalId = setInterval(() => {
        setTypingContent((prev: string) => prev + content.charAt(index));
        index += 1;

        if (index === content.length) {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [content, speed]);

    return (
        <div dangerouslySetInnerHTML={{__html: typingContent}} />
    );
}

export default TypingEffectMessage;


// let index = 0;
// const intervalId = setInterval(() => {
//   setDisplayedMessage((prev) => prev + messageContent.charAt(index));
//   index += 1;
//   if (index === messageContent.length) {
//     clearInterval(intervalId);
//   }
