import { Menu, MessageSquare, User, Search } from 'lucide-react';
import type { UserType, Page } from '../App';

type HeaderProps = {
  onNavigate: (page: Page) => void;
  userType: UserType;
  onUserTypeChange: (type: UserType) => void;
  showSearch?: boolean;
};

export function Header({ onNavigate, userType, onUserTypeChange, showSearch }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate({ type: 'landing' })}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">E</span>
            </div>
            <span className="text-xl">Eventbasen</span>
          </button>

          {/* Search bar - optional */}
          {showSearch && (
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Søk etter leverandører..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Right side navigation */}
          <div className="flex items-center gap-4">
            {!userType && (
              <div className="flex gap-2">
                <button
                  onClick={() => onUserTypeChange('customer')}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Logg inn
                </button>
                <button
                  onClick={() => {
                    onUserTypeChange('provider');
                    onNavigate({ type: 'dashboard' });
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Leverandør? Registrer deg
                </button>
              </div>
            )}

            {userType && (
              <>
                <button
                  onClick={() => onNavigate({ type: 'messages' })}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                  title="Meldinger"
                >
                  <MessageSquare className="w-6 h-6 text-gray-700" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Meny">
                  <Menu className="w-6 h-6 text-gray-700" />
                </button>

                <button 
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Profil"
                >
                  <User className="w-6 h-6 text-gray-700" />
                  <span className="hidden md:inline text-sm text-gray-700">
                    {userType === 'provider' ? 'Leverandør' : 'Min profil'}
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
