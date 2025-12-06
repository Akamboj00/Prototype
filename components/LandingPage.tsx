import { Search, Music, Camera, UtensilsCrossed, Sparkles, Building2, Wine, User } from 'lucide-react';
import { Header } from './Header';
import { categories } from '../data/mockData';
import type { UserType, Page } from '../App';

type LandingPageProps = {
  onNavigate: (page: Page) => void;
  userType: UserType;
  onUserTypeChange: (type: UserType) => void;
};

const iconMap: { [key: string]: any } = {
  Music,
  Camera,
  UtensilsCrossed,
  Sparkles,
  Building2,
  Wine,
  User,
};

export function LandingPage({ onNavigate, userType, onUserTypeChange }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigate={onNavigate} 
        userType={userType} 
        onUserTypeChange={onUserTypeChange}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">
              Få alt du trenger til din fest på én plattform
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Finn og kontakt de beste eventleverandørene i Norge. DJ, fotograf, catering, dekorasjon og mer.
            </p>
            
            {/* Search bar */}
            <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Hva trenger du til festen?"
                  className="w-full pl-10 pr-4 py-3 text-gray-900 focus:outline-none rounded"
                />
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Søk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">Utforsk kategorier</h2>
          <p className="text-gray-600">
            Finn akkurat det du trenger til ditt arrangement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => onNavigate({ type: 'category', category: category.id })}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 h-64"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                  <div className="mb-4 p-4 bg-white/20 backdrop-blur-sm rounded-full">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-white">{category.name}</h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Slik fungerer det</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="mb-2">Finn leverandører</h3>
              <p className="text-gray-600">
                Bla gjennom kategorier og finn leverandører som passer ditt arrangement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="mb-2">Send melding</h3>
              <p className="text-gray-600">
                Kontakt leverandører direkte for å få tilbud og avtale detaljer
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="mb-2">Book og nyt!</h3>
              <p className="text-gray-600">
                Få bekreftet din booking og gled deg til en fantastisk fest
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA for providers */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Er du leverandør?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Få enklere synlighet, flere jobber og mindre styr. Registrer deg gratis i dag!
          </p>
          <button
            onClick={() => {
              onUserTypeChange('provider');
              onNavigate({ type: 'dashboard' });
            }}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kom i gang som leverandør
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 FestPlatform. Din markedsplass for eventleverandører.</p>
        </div>
      </footer>
    </div>
  );
}