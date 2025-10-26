import React, { useState } from 'react';
import Chatbot from './Chatbot';

const ChatSection = () => {
  const [open, setOpen] = useState(true); // default open when viewing dedicated section

  return (
    <section id="chat" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-playfair mb-4 text-ocean-blue">Ask the Local Guide</h2>
        <p className="mb-6 text-gray-600">Use the chat below to ask about places, food, festivals and travel tips.</p>

        <div className="mb-4">
          <button onClick={() => setOpen(o => !o)} className="px-4 py-2 rounded-md border bg-white hover:bg-gray-100">
            {open ? 'Hide chat' : 'Open chat'}
          </button>
        </div>

        {open && (
          <div className="mt-4">
            <Chatbot isVisible={true} inline={true} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatSection;
