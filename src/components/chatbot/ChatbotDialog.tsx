'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from './ChatContext';
import ChatMessage from './ChatMessage';
import ChatbotEquipmentSelector from './ChatbotEquipmentSelector';

const ChatbotDialog: React.FC = () => {
  const { 
    isOpen, 
    setIsOpen, 
    messages, 
    sendMessage, 
    isLoading,
    bookingStep,
    bookingData,
    startNewChat
  } = useChat();
  
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // Handle closing the chat
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('chatbotClosed', 'true');
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };
  
  // Don't render if the chat is closed
  if (!isOpen) return null;
  
  return (
    <div className="
      fixed bottom-6 right-6 z-50
      w-96 h-[32rem] max-h-[80vh]
      bg-white rounded-lg shadow-2xl
      flex flex-col
      transform transition-all duration-300
      animate-fadeIn
      border border-gray-200
    ">
      {/* Header */}
      <div className="bg-yellow-400 p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 overflow-hidden">
            <img 
              src="/images/logo2.webp" 
              alt="Geelong Excavator Hire" 
              className="w-8 h-8 object-contain"
            />
          </div>
          {/* Title - nowrap to keep on one line */}
          <h3 className="font-bold text-gray-800 whitespace-nowrap">Equipment Assistant</h3>
        </div>
        <button 
          onClick={handleClose}
          aria-label="Close chat"
          className="flex items-center text-gray-800 hover:text-gray-600 transition-colors bg-white rounded-lg px-3 py-1"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 mr-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
          <span className="text-sm">Close</span>
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        
        {/* Show loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg rounded-tl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        {/* Show equipment selector if in equipment selection step and no equipment is selected yet */}
        {bookingStep === 'equipment-selection' && !bookingData.equipment && (
          <div className="mt-4">
            <ChatbotEquipmentSelector />
          </div>
        )}
        
        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
        <div className="flex">
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatbotDialog;
