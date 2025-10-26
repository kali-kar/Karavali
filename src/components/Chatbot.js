import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import knowledgeBase from '../data/knowledgeBase.json';
import { motion } from 'framer-motion';

const Chatbot = ({ isVisible = true, inline = false, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', message: 'Hi — I’m your local tour guide. Ask me anything about Udupi & Mangalore!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // focus input when the chat becomes visible
    if (isVisible && inputRef.current) inputRef.current.focus();
  }, [isVisible]);

  useEffect(() => {
    // auto-scroll to bottom when messages update
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  // simple keyword matching using knowledgeBase
  const findAnswer = (text) => {
    const q = text.toLowerCase().trim();
    if (!q) return null;

    // exact question match first
    const exact = knowledgeBase.find(k => k.question.toLowerCase() === q);
    if (exact) return exact.answer;

    // contains any keyword from the knowledge base question text
    for (const item of knowledgeBase) {
      const keywords = item.question.toLowerCase().split(/\s+/).filter(Boolean);
      for (const kw of keywords) {
        if (kw.length > 3 && q.includes(kw)) {
          return item.answer;
        }
      }
    }
    return null;
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { sender: 'user', message: text.trim() };
    setMessages(m => [...m, userMsg]);
    setIsTyping(true);
    setTimeout(() => {
      const answer = findAnswer(text) || "Sorry, I don't know that yet — try asking about places, food, or festivals!";
      setMessages(m => [...m, { sender: 'bot', message: answer }]);
      setIsTyping(false);
    }, 700); // simulated thinking delay
  };

  const onSubmit = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  // small container style differs when inline vs floating
  const containerClasses = inline
    ? 'w-full max-w-3xl mx-auto bg-white rounded-xl border shadow-sm'
    : 'fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-2xl border shadow-xl z-50';

  if (!isVisible) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={containerClasses}>
      <div className="bg-ocean-blue text-white px-4 py-3 rounded-t-xl flex items-center justify-between">
        <div className="font-semibold">Tour Guide Chatbot</div>
        <div className="text-sm flex items-center gap-2">
          {isTyping && <span className="text-xs">typing…</span>}
          {onClose && <button aria-label="Close chat" onClick={onClose} className="text-white hover:text-gray-200">✕</button>}
        </div>
      </div>

      <div ref={listRef} className="p-3 max-h-64 overflow-y-auto flex flex-col">
        {messages.map((m, i) => <ChatMessage key={i} sender={m.sender} message={m.message} />)}
        {isTyping && (
          <div className="self-start bg-gray-100 text-gray-800 p-2 rounded-xl text-sm mb-2">...</div>
        )}
      </div>

      <form onSubmit={onSubmit} className="p-3 border-t flex gap-2">
        <input
          ref={inputRef}
          aria-label="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none"
          placeholder="Type your question..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              onSubmit(e);
            }
          }}
        />
        <button type="submit" className="bg-coconut-green text-white px-4 py-2 rounded-full text-sm hover:bg-golden-sand transition">Send</button>
      </form>
    </motion.div>
  );
};

export default Chatbot;
