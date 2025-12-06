import { useState } from 'react';
import { 
  ChevronLeft, 
  Upload, 
  Plus, 
  X, 
  Save,
  MessageSquare,
  Calendar,
  TrendingUp,
  User
} from 'lucide-react';
import { Header } from './Header';
import type { Page } from '../App';

type ProviderDashboardProps = {
  onNavigate: (page: Page) => void;
};

export function ProviderDashboard({ onNavigate }: ProviderDashboardProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'stats'>('profile');
  const [availability, setAvailability] = useState<'available' | 'limited' | 'booked'>('available');
  const [services, setServices] = useState<string[]>(['Bryllup', 'Bursdagsfester']);
  const [newService, setNewService] = useState('');

  const handleAddService = () => {
    if (newService.trim() && !services.includes(newService.trim())) {
      setServices([...services, newService.trim()]);
      setNewService('');
    }
  };

  const handleRemoveService = (service: string) => {
    setServices(services.filter((s) => s !== service));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigate={onNavigate} 
        userType="provider" 
        onUserTypeChange={() => {}}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => onNavigate({ type: 'landing' })}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Tilbake til forsiden
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Leverandørdashboard</h1>
          <p className="text-gray-600">Administrer din profil og se statistikk</p>
        </div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-600">Profilvisninger</span>
            </div>
            <p className="text-3xl">342</p>
            <p className="text-sm text-green-600 mt-1">+12% fra forrige uke</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-600">Henvendelser</span>
            </div>
            <p className="text-3xl">23</p>
            <p className="text-sm text-gray-500 mt-1">Siste 30 dager</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-gray-600">Bookinger</span>
            </div>
            <p className="text-3xl">8</p>
            <p className="text-sm text-gray-500 mt-1">Bekreftet fremover</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <User className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-gray-600">Profil status</span>
            </div>
            <p className="text-xl text-green-600">Aktiv</p>
            <p className="text-sm text-gray-500 mt-1">Synlig for kunder</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 transition-colors ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Rediger profil
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`px-6 py-4 transition-colors ${
                  activeTab === 'stats'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Statistikk og innsikt
              </button>
            </div>
          </div>

          {/* Profile tab */}
          {activeTab === 'profile' && (
            <div className="p-6 space-y-6">
              {/* Basic info */}
              <div>
                <h3 className="mb-4">Grunnleggende informasjon</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Bedriftsnavn / Navn
                    </label>
                    <input
                      type="text"
                      defaultValue="DJ Magnus"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Kategori
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>DJ & Musikk</option>
                      <option>Fotograf & Video</option>
                      <option>Catering & Mat</option>
                      <option>Dekorasjon & Pynt</option>
                      <option>Lokaler & Venues</option>
                      <option>Bartender & Drikke</option>
                      <option>Makeup & Bridal Design</option>
                      <option>Dhol Spillere</option>
                      <option>Dansere</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Område
                    </label>
                    <input
                      type="text"
                      defaultValue="Oslo"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Prisklasse
                    </label>
                    <input
                      type="text"
                      defaultValue="5 000 - 15 000 kr"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Kort beskrivelse
                </label>
                <input
                  type="text"
                  defaultValue="Profesjonell DJ med 10 års erfaring"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Maks 100 tegn"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Utfyllende beskrivelse
                </label>
                <textarea
                  rows={6}
                  defaultValue="Jeg er en erfaren DJ som har underholdt på hundrevis av bryllup, bursdager og firmafester. Med et bredt musikkbibliotek og god forståelse for stemningen, sørger jeg for at dansegulvet alltid er fullt."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Fortell om deg selv og hva du tilbyr..."
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Tilgjengelighet neste måned
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setAvailability('available')}
                    className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                      availability === 'available'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>Ledig</span>
                    </div>
                    <p className="text-sm text-gray-600">Kan ta oppdrag</p>
                  </button>

                  <button
                    onClick={() => setAvailability('limited')}
                    className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                      availability === 'limited'
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-200 hover:border-yellow-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                      <span>Begrenset</span>
                    </div>
                    <p className="text-sm text-gray-600">Noen datoer ledige</p>
                  </button>

                  <button
                    onClick={() => setAvailability('booked')}
                    className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                      availability === 'booked'
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span>Fullbooket</span>
                    </div>
                    <p className="text-sm text-gray-600">Ikke tilgjengelig</p>
                  </button>
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Tjenester / Type arrangementer
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg"
                    >
                      {service}
                      <button
                        onClick={() => handleRemoveService(service)}
                        className="hover:text-blue-900"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddService()}
                    placeholder="Legg til tjeneste..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleAddService}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Legg til
                  </button>
                </div>
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Bilder
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="aspect-square border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-blue-600">
                    <Upload className="w-8 h-8" />
                    <span className="text-sm">Last opp</span>
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Last opp bilder av ditt arbeid. Maks 10 bilder.
                </p>
              </div>

              {/* Contact info */}
              <div>
                <h3 className="mb-4">Kontaktinformasjon</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      defaultValue="+47 987 65 432"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      E-post
                    </label>
                    <input
                      type="email"
                      defaultValue="magnus@djmagnus.no"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Instagram (valgfri)
                    </label>
                    <input
                      type="text"
                      defaultValue="@djmagnus"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Nettside (valgfri)
                    </label>
                    <input
                      type="text"
                      placeholder="www.dinside.no"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Save button */}
              <div className="flex justify-end pt-4 border-t border-gray-200">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Save className="w-5 h-5" />
                  Lagre endringer
                </button>
              </div>
            </div>
          )}

          {/* Stats tab */}
          {activeTab === 'stats' && (
            <div className="p-6">
              <div className="text-center py-12 text-gray-500">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="mb-2">Statistikk kommer snart</h3>
                <p>Her vil du kunne se detaljert statistikk om profilens ytelse</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}