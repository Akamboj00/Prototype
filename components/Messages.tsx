import { useState } from 'react';
import { ChevronLeft, Send, Search, MoreVertical } from 'lucide-react';
import { Header } from './Header';
import { mockConversations, mockMessages } from '../data/mockData';
import type { UserType, Page } from '../App';

type MessagesProps = {
  onNavigate: (page: Page) => void;
  userType: UserType;
};

export function Messages({ onNavigate, userType }: MessagesProps) {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(
    mockConversations[0]?.id || null
  );
  const [messageText, setMessageText] = useState('');

  const currentConversation = mockConversations.find((c) => c.id === selectedConversation);
  const currentMessages = selectedConversation ? mockMessages[selectedConversation] || [] : [];

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // In a real app, this would send the message
    setMessageText('');
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 48) {
      return 'I går';
    } else {
      return date.toLocaleDateString('no-NO', { day: 'numeric', month: 'short' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigate={onNavigate} 
        userType={userType} 
        onUserTypeChange={() => {}}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 12rem)' }}>
          <div className="flex h-full">
            {/* Conversations list */}
            <div className="w-full md:w-96 border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2>Meldinger</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Søk i samtaler..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Conversation list */}
              <div className="flex-1 overflow-y-auto">
                {mockConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => {
                      setSelectedConversation(conversation.id);
                      // On mobile, navigate to detail view
                      if (window.innerWidth < 768) {
                        onNavigate({ type: 'conversationDetail', conversationId: conversation.id });
                      }
                    }}
                    className={`w-full p-4 flex gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                      selectedConversation === conversation.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                      {conversation.providerName.charAt(0)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-start justify-between mb-1">
                        <span className={conversation.unread ? '' : 'text-gray-900'}>
                          {conversation.providerName}
                        </span>
                        <span className="text-sm text-gray-500 flex-shrink-0 ml-2">
                          {formatTime(conversation.timestamp)}
                        </span>
                      </div>
                      <p className={`text-sm truncate ${conversation.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                        {conversation.lastMessage}
                      </p>
                    </div>

                    {conversation.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Message thread */}
            <div className="hidden md:flex md:flex-1 flex-col">
              {selectedConversation && currentConversation ? (
                <>
                  {/* Thread header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                        {currentConversation.providerName.charAt(0)}
                      </div>
                      <div>
                        <h3>{currentConversation.providerName}</h3>
                        <p className="text-sm text-gray-500">Aktiv nå</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          onNavigate({ type: 'conversationDetail', conversationId: selectedConversation });
                        }}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        Åpne i fullskjerm
                      </button>
                      <button
                        onClick={() => {
                          const provider = mockConversations.find(c => c.id === selectedConversation);
                          if (provider) {
                            onNavigate({ type: 'profile', providerId: provider.providerId });
                          }
                        }}
                        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        Se profil
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {currentMessages.map((message) => {
                      const isOwnMessage = message.senderId === 'c1'; // Customer is current user
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
                  </div>

                  {/* Message input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Skriv en melding..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Send
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Vær høflig og profesjonell i din kommunikasjon
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <p>Velg en samtale for å starte</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
