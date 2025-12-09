import { useEffect, useRef } from 'react';
import type { Message } from '../data/mockData';

type MessageListProps = {
  messages: Message[];
  currentUserId: string;
};

export function MessageList({ messages, currentUserId }: MessageListProps) {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.map((message) => {
        const isOwnMessage = message.senderId === currentUserId;
        return (
          <div
            key={message.id}
            className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-md ${isOwnMessage ? 'order-2' : 'order-1'}`}>
              <div
                className={`rounded-lg px-4 py-2 ${
                  isOwnMessage
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                <p>{message.text}</p>
              </div>
              <p className={`text-xs text-gray-500 mt-1 ${isOwnMessage ? 'text-right' : 'text-left'}`}>
                {message.timestamp.toLocaleTimeString('no-NO', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        );
      })}
      <div ref={endOfMessagesRef} />
    </div>
  );
}
