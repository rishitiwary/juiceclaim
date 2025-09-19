'use client';

import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';

export function ChatBubble() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chatInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Initialize n8n chat when component mounts
    try {
      const chat = createChat({
        webhookUrl: 'https://ai-agents.juicefin.com/webhook/202a6379-0c36-4265-b09a-bc0e404d0c32/chat',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
          "Hello! I'm Berry👋",
          'I am here to help insurance companies like yours with our comprehensive solutions for managing incoming and outgoing payments.',
          'If you have any questions or need assistance, feel free to ask!',
        ],
        i18n: {
          en: {
            title: 'Berry Assistant',
            subtitle: 'Juice Financial',
            inputPlaceholder: 'Type your question...',
            getStarted: 'New Conversation',
            footer: 'Powered by Juice Financial',
            closeButtonTooltip: 'Close chat',
          },
        },
      });

      chatInstanceRef.current = chat;
    } catch (error) {
      console.error('Error initializing chat:', error);
    }
  }, []); // Empty dependency array is correct here as we only want to initialize once

  const handleChatToggle = () => {
    if (chatInstanceRef.current) {
      // Use the package's built-in toggle method
      if (typeof chatInstanceRef.current.toggle === 'function') {
        chatInstanceRef.current.toggle();
      } else if (typeof chatInstanceRef.current.open === 'function') {
        chatInstanceRef.current.open();
      }
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Custom chat bubble button */}
      <button
        onClick={handleChatToggle}
        className="w-16 h-16 transition-all duration-300 flex items-center justify-center"
        aria-label="Open Berry Assistant Chat"
      >
        <ChatBubbleIcon className="w-16 h-16" />
      </button>
    </div>
  );
}
