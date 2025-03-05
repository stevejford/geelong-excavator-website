'use client';

import React from 'react';
import { useChat } from './ChatContext';

const ChatbotButton: React.FC = () => {
  const { isOpen, setIsOpen, hasUnreadMessages, setHasUnreadMessages } = useChat();

  const handleClick = () => {
    setIsOpen(true);
    setHasUnreadMessages(false);
  };

  // Don't render if the chat is already open
  if (isOpen) return null;

  return (
    <button
      aria-label="Open chat assistant"
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 z-50
        h-16 w-16 rounded-full
        bg-yellow-400 hover:bg-yellow-300
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        transform hover:scale-105 transition-all duration-300
        animate-bounce
      `}
    >
      {/* Chat icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
      
      {/* Notification dot for unread messages */}
      {hasUnreadMessages && (
        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full animate-pulse"></span>
      )}
    </button>
  );
};

export default ChatbotButton;
