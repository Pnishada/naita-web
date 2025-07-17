import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ChatBot.css';

import { MessageCircle, X } from 'lucide-react';

const ChatBot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi! What do you know about NAITA.' }]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom when messages or loading state changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const toggleChat = () => setIsOpen((open) => !open);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/chat/',
        { message: userMessage.text },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: response.data.response || "I didn't get that." },
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: err.response?.data?.error || 'Error connecting to server.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isLoading && input.trim() !== '') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-container" aria-live="polite">
      {isOpen && (
        <section className="chatbot-box" role="region" aria-label="Chatbot conversation">
          <header className="chatbot-header">
            <h2 className="chatbot-title">NAITA AI Chat Assistant</h2>
            <button
              onClick={toggleChat}
              aria-label="Close chatbot"
              className="close-btn"
              type="button"
            >
              ×
            </button>
          </header>

          <main className="chatbot-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${msg.sender}`}
                aria-live={msg.sender === 'bot' ? 'polite' : 'off'}
                aria-atomic="true"
              >
                {msg.text}
              </div>
            ))}

            {isLoading && (
              <div className="chat-message bot" aria-live="assertive" aria-atomic="true">
                Thinking...
              </div>
            )}

            <div ref={chatEndRef} />
          </main>

          <footer className="chatbot-footer">
            <input
              type="text"
              aria-label="Type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              autoComplete="off"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || input.trim() === ''}
              type="button"
              aria-label="Send message"
            >
              {isLoading ? '...' : 'Send'}
            </button>
          </footer>
        </section>
      )}

      <button
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat window' : 'Open chat window'}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-rose-700 to-blue-800 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
        type="button"
      >
        {isOpen ? <X size={24} strokeWidth={2.25} /> : <MessageCircle size={24} strokeWidth={2.25} />}
      </button>
    </div>
  );
};

export default ChatBot;
