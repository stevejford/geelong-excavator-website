'use client';

import React from 'react';
import { ChatProvider } from './ChatContext';
import ChatbotButton from './ChatbotButton';
import ChatbotDialog from './ChatbotDialog';

const Chatbot: React.FC = () => {
  return (
    <ChatProvider>
      <ChatbotButton />
      <ChatbotDialog />
    </ChatProvider>
  );
};

export default Chatbot;
