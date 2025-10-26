import React from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ message, sender }) => {
  const base = "p-3 rounded-2xl mb-2 max-w-[85%] break-words";
  const classes =
    sender === 'user'
      ? `${base} bg-ocean-blue text-white self-end ml-auto`
      : `${base} bg-gray-100 text-gray-900 self-start mr-auto`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className={classes}
      aria-live={sender === 'bot' ? 'polite' : undefined}
    >
      {message}
    </motion.div>
  );
};

export default ChatMessage;
