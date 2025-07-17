import { useState } from 'react';
import { sendMessageToBot } from '../api/bot_api';

export default function useChatMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (userMessage) => {
    setLoading(true);
    // Add user message
    setMessages((prev) => [...prev, { message: userMessage, isUser: true }]);
    try {
      const botResponse = await sendMessageToBot(userMessage);
      setMessages((prev) => [...prev, { message: botResponse, isUser: false }]);
    } catch {
      setMessages((prev) => [...prev, { message: 'Error: Could not get response from bot.', isUser: false }]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    loading,
    setMessages, // Optional: for manual message control
  };
}