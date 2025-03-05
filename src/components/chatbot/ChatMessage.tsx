'use client';

import React from 'react';
import { ChatMessage as ChatMessageType } from './ChatContext';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar for assistant messages */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-2 overflow-hidden flex-shrink-0">
          <img 
            src="/images/logo2.webp" 
            alt="Assistant" 
            className="w-6 h-6 object-contain"
          />
        </div>
      )}
      
      <div
        className={`
          max-w-[80%] px-4 py-2 rounded-lg shadow-sm
          ${isUser 
            ? 'bg-primary text-white rounded-tr-none' 
            : 'bg-gray-100 text-gray-800 rounded-tl-none'
          }
        `}
      >
        {/* Render message content with support for line breaks */}
        {message.content.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < message.content.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      
      {/* Avatar for user messages */}
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-2 flex-shrink-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
