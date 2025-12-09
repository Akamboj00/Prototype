import { useState } from 'react';
import { LandingPage } from '../components/LandingPage';
import { CategoryBrowser } from '../components/CategoryBrowser';
import { ProviderProfile } from '../components/ProviderProfile';
import { Messages } from '../components/Messages';
import { ProviderDashboard } from '../components/ProviderDashboard';
import { ConversationDetail } from '../components/ConversationDetail';

export type UserType = 'customer' | 'provider' | null;

export type Page = 
  | { type: 'landing' }
  | { type: 'category'; category: string }
  | { type: 'profile'; providerId: string }
  | { type: 'messages' }
  | { type: 'conversationDetail'; conversationId: string }
  | { type: 'dashboard' };

function App() {
  const [currentPage, setCurrentPage] = useState<Page>({ type: 'landing' });
  const [userType, setUserType] = useState<UserType>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage.type === 'landing' && (
        <LandingPage 
          onNavigate={setCurrentPage}
          userType={userType}
          onUserTypeChange={setUserType}
        />
      )}
      
      {currentPage.type === 'category' && (
        <CategoryBrowser
          category={currentPage.category}
          onNavigate={setCurrentPage}
          userType={userType}
        />
      )}
      
      {currentPage.type === 'profile' && (
        <ProviderProfile
          providerId={currentPage.providerId}
          onNavigate={setCurrentPage}
          userType={userType}
        />
      )}
      
      {currentPage.type === 'messages' && (
        <Messages
          onNavigate={setCurrentPage}
          userType={userType}
        />
      )}
      
      {currentPage.type === 'conversationDetail' && (
        <ConversationDetail
          conversationId={currentPage.conversationId}
          onNavigate={setCurrentPage}
          userType={userType}
        />
      )}
      
      {currentPage.type === 'dashboard' && (
        <ProviderDashboard
          onNavigate={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;
