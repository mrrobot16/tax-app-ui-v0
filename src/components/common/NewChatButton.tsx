import React from 'react';
import { NewChatButtonProps } from 'types';

export default function NewChatButton({ isMobile }: NewChatButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
     {
        !isMobile ? (
            <a href="/" className="hover:text-slate-600 cursor-pointer font-bold">
                New Chat
            </a>
        ) : (
            <a href="/" className="hover:text-slate-600 cursor-pointer font-bold">
                +
            </a>
        )
     }
    </>
  );
}
