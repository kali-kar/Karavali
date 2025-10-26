import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatToggleButton = ({ onClick, ariaControls }) => (
  <button
    onClick={onClick}
    aria-controls={ariaControls}
    aria-label="Open chat"
    title="Open chat"
    className="fixed bottom-6 right-6 z-50 bg-ocean-blue text-white p-4 rounded-full shadow-lg hover:bg-coconut-green transition focus:outline-none focus:ring-2 focus:ring-white"
  >
    <MessageCircle size={24} />
  </button>
);

export default ChatToggleButton;
