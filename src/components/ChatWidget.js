'use client';
import { useState } from 'react';
import styles from './ChatWidget.module.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission here
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className={styles.chatWidget}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>Ask Booked AI</span>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <div className={styles.chatMessages}>
            <div className={styles.aiMessage}>
              <div className={styles.aiIcon}>🧠</div>
              <div className={styles.messageContent}>
                Hi! I'm your AI travel agent. How can I help you plan your next adventure?
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.chatInput}>
            <input
              type="text"
              placeholder="Ask Booked AI..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.sendButton}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8L15 1L8 15L7 9L1 8Z" fill="currentColor"/>
              </svg>
            </button>
          </form>
        </div>
      )}
      
      <button 
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat with Booked AI"
      >
        <div className={styles.chatIcon}>💬</div>
        <span className={styles.chatLabel}>Ask Booked AI...</span>
      </button>
    </div>
  );
}
