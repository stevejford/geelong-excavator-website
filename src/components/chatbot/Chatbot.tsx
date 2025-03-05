'use client';

import React, { useState, useEffect } from 'react';
import { ChatProvider } from './ChatContext';
import ChatbotButton from './ChatbotButton';
import ChatbotDialog from './ChatbotDialog';

const Chatbot: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      // Check if we're running in a browser environment
      if (typeof window !== 'undefined') {
        console.log('Chatbot: Component mounted in browser environment');
        setMounted(true);
      }
    } catch (err) {
      console.error('Chatbot: Error during initialization:', err);
      setError('Failed to initialize chatbot');
    }
  }, []);

  // Don't render anything during server-side rendering to avoid hydration issues
  if (!mounted) {
    return null;
  }

  // If there was an error, render a hidden div with error info in data attribute for debugging
  if (error) {
    return <div style={{ display: 'none' }} data-chatbot-error={error} />;
  }

  // Normal render
  try {
    return (
      <ChatProvider>
        <ChatbotButton />
        <ChatbotDialog />
      </ChatProvider>
    );
  } catch (err) {
    console.error('Chatbot: Render error:', err);
    // Return nothing if render fails
    return null;
  }
};

export default Chatbot;
