'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the message type
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Define the booking data type
export interface BookingData {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  equipment?: string;
  isExcavator?: boolean;
  attachments?: string[];
  startDate?: string;
  endDate?: string;
  deliveryOption?: 'delivery' | 'pickup';
  deliveryAddress?: string;
  projectDetails?: string;
}

// Define the context type
interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: ChatMessage[];
  addMessage: (message: ChatMessage) => void;
  isLoading: boolean;
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  resetBookingData: () => void;
  bookingStep: string;
  setBookingStep: (step: string) => void;
  hasUnreadMessages: boolean;
  setHasUnreadMessages: (hasUnread: boolean) => void;
  sendMessage: (content: string) => Promise<void>;
  startNewChat: () => void;
}

// Create the context
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Provider component
export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({});
  const [bookingStep, setBookingStep] = useState('initial');
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);

  // Function to start a new chat
  const startNewChat = () => {
    // Clear messages and set initial welcome message
    const initialMessages: ChatMessage[] = [
      {
        role: 'assistant',
        content: 'Hi there! 👋 I\'m your equipment assistant. I can help you find the right equipment for your project and assist with bookings. How can I help you today?'
      }
    ];
    setMessages(initialMessages);
    localStorage.setItem('chatMessages', JSON.stringify(initialMessages));
    
    // Clear booking data
    setBookingData({});
    localStorage.removeItem('chatbotBookingData');
    
    // Reset booking step
    setBookingStep('initial');
    localStorage.setItem('chatbotBookingStep', 'initial');
    
    // Set new timestamp
    const now = new Date().getTime();
    localStorage.setItem('chatTimestamp', now.toString());
  };

  // Initialize chat on first load
  useEffect(() => {
    // Check if the user has closed the chatbot before
    const chatbotClosed = localStorage.getItem('chatbotClosed') === 'true';
    
    // Check if chat has expired (older than 24 hours)
    const chatTimestamp = localStorage.getItem('chatTimestamp');
    const now = new Date().getTime();
    const isExpired = !chatTimestamp || (now - parseInt(chatTimestamp)) > 24 * 60 * 60 * 1000;
    
    if (isExpired) {
      // If chat is expired, start a new chat
      startNewChat();
    } else {
      // Load saved messages from localStorage
      const savedMessages = localStorage.getItem('chatMessages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
      
      // Load saved booking data
      const savedBookingData = localStorage.getItem('chatbotBookingData');
      if (savedBookingData) {
        setBookingData(JSON.parse(savedBookingData));
      }
      
      // Load saved booking step
      const savedBookingStep = localStorage.getItem('chatbotBookingStep');
      if (savedBookingStep) {
        setBookingStep(savedBookingStep);
      }
    }
    
    // Open the chatbot automatically on first visit
    if (!chatbotClosed) {
      // Delay opening to allow page to load first
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Save messages to localStorage when they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
      
      // Update timestamp when messages change
      const now = new Date().getTime();
      localStorage.setItem('chatTimestamp', now.toString());
    }
  }, [messages]);

  // Save booking data to localStorage when it changes
  useEffect(() => {
    if (Object.keys(bookingData).length > 0) {
      localStorage.setItem('chatbotBookingData', JSON.stringify(bookingData));
    }
  }, [bookingData]);
  
  // Save booking step to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('chatbotBookingStep', bookingStep);
  }, [bookingStep]);

  // Add a new message to the chat
  const addMessage = (message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
    
    // If the chatbot is closed and we receive a new assistant message, show unread indicator
    if (message.role === 'assistant' && !isOpen) {
      setHasUnreadMessages(true);
    }
  };

  // Update booking data
  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  // Reset booking data
  const resetBookingData = () => {
    setBookingData({});
    localStorage.removeItem('chatbotBookingData');
  };

  // Send a message to the API
  const sendMessage = async (content: string) => {
    // Add user message to the chat
    addMessage({ role: 'user', content });
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Send the message to the API
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content }],
          bookingData,
          bookingStep,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const data = await response.json();
      
      // Add assistant response to the chat
      addMessage({ role: 'assistant', content: data.message });
      
      // Update booking step if provided
      if (data.bookingStep) {
        setBookingStep(data.bookingStep);
      }
      
      // Update booking data if provided
      if (data.bookingData) {
        updateBookingData(data.bookingData);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact us directly at info@gehire.net or 0408 851 525.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        setIsOpen,
        messages,
        addMessage,
        isLoading,
        bookingData,
        updateBookingData,
        resetBookingData,
        bookingStep,
        setBookingStep,
        hasUnreadMessages,
        setHasUnreadMessages,
        sendMessage,
        startNewChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook to use the chat context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
