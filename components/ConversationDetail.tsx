import { useState } from 'react';
import { ChevronLeft, MoreVertical } from 'lucide-react';
import { Header } from './Header';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { mockConversations, mockMessages } from '../data/mockData';
import type { UserType, Page } from '../App';

type ConversationDetailProps = {
  conversationId: string;
  onNavigate: (page: Page) => void;
  userType: UserType;
};

export function ConversationDetail({ conversationId, onNavigate, userType }: ConversationDetailProps) {
  const [messageText, setMessageText] = useState('');

  const conversation = mockConversations.find((c) => c.id === conversationId);
  const messages = mockMessages[conversationId] || [];

  if (!conversation) {
    return <div>Samtale ikke funnet</div>;
  }

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // In a real app, this would send the message to the backend
    setMessageText('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onNavigate={onNavigate}
        userType={userType}
        onUserTypeChange={() => {}}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate({ type: 'messages' })}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Tilbake til meldinger
        </button>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 12rem)' }}>
          {/* Thread header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-lg font-semibold flex-shrink-0">
                {conversation.providerName.charAt(0)}
              </div>
              <div>
                <h2 className="font-semibold">{conversation.providerName}</h2>
                <p className="text-sm text-gray-500">Aktiv nå</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate({ type: 'profile', providerId: conversation.providerId })}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium"
              >
                Se profil
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <MessageList messages={messages} currentUserId="c1" />

          {/* Message input */}
          <MessageInput
            value={messageText}
            onChange={setMessageText}
            onSend={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}
