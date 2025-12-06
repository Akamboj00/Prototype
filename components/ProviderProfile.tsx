import { MapPin, Phone, Mail, Instagram, Facebook, Globe, Star, ChevronLeft, MessageSquare } from 'lucide-react';
import { Header } from './Header';
import { providers } from '../data/mockData';
import type { UserType, Page } from '../App';

type ProviderProfileProps = {
  providerId: string;
  onNavigate: (page: Page) => void;
  userType: UserType;
};

export function ProviderProfile({ providerId, onNavigate, userType }: ProviderProfileProps) {
  const provider = providers.find((p) => p.id === providerId);

  if (!provider) {
    return <div>Leverandør ikke funnet</div>;
  }

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'limited':
        return 'bg-yellow-500';
      case 'booked':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getAvailabilityText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Ledig neste måned';
      case 'limited':
        return 'Begrenset ledighet';
      case 'booked':
        return 'Fullbooket neste måned';
      default:
        return 'Ukjent';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigate={onNavigate} 
        userType={userType} 
        onUserTypeChange={() => {}}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => onNavigate({ type: 'category', category: provider.category })}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Tilbake til søk
        </button>

        {/* Main image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={provider.images[0]}
            alt={provider.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h1 className="mb-2">{provider.name}</h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{provider.location}</span>
                  </div>
                </div>
                {provider.rating && (
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <div>
                      <div>{provider.rating}</div>
                      <div className="text-sm text-gray-500">({provider.reviewCount} anmeldelser)</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className={`w-3 h-3 rounded-full ${getAvailabilityColor(provider.availability)}`}></span>
                <span>{getAvailabilityText(provider.availability)}</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="mb-4">Om {provider.name}</h2>
              <p className="text-gray-700 leading-relaxed">{provider.description}</p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="mb-4">Tjenester</h2>
              <div className="flex flex-wrap gap-3">
                {provider.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="mb-4">Priser</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl text-blue-600">{provider.priceRange}</span>
              </div>
              <p className="text-gray-600 mt-2">Prisene varierer basert på type arrangement og varighet. Kontakt meg for eksakt tilbud.</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact card */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="mb-4">Kontakt {provider.name}</h3>

              <button
                onClick={() => onNavigate({ type: 'messages' })}
                className="w-full mb-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Send melding
              </button>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <a
                  href={`tel:${provider.phone}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{provider.phone}</span>
                </a>

                <a
                  href={`mailto:${provider.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{provider.email}</span>
                </a>

                {provider.instagram && (
                  <a
                    href={`https://instagram.com/${provider.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>{provider.instagram}</span>
                  </a>
                )}

                {provider.facebook && (
                  <a
                    href={`https://facebook.com/${provider.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>{provider.facebook}</span>
                  </a>
                )}

                {provider.website && (
                  <a
                    href={`https://${provider.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span>{provider.website}</span>
                  </a>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
                <p>Responstid: Vanligvis innen 24 timer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
