import { MapPin, Star, ChevronLeft } from 'lucide-react';
import { Header } from './Header';
import { providers, categories } from '../data/mockData';
import type { UserType, Page } from '../App';

type CategoryBrowserProps = {
  category: string;
  onNavigate: (page: Page) => void;
  userType: UserType;
};

export function CategoryBrowser({ category, onNavigate, userType }: CategoryBrowserProps) {
  const categoryData = categories.find((c) => c.id === category);
  const categoryProviders = providers.filter((p) => p.category === category);

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
        return 'Ledig';
      case 'limited':
        return 'Begrenset ledighet';
      case 'booked':
        return 'Fullbooket';
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
        showSearch
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button and header */}
        <button
          onClick={() => onNavigate({ type: 'landing' })}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Tilbake til kategorier
        </button>

        <div className="mb-8">
          <h1 className="mb-2">{categoryData?.name}</h1>
          <p className="text-gray-600">
            {categoryProviders.length} leverandører funnet
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 bg-white text-gray-900 dark:bg-white dark:text-gray-900 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Alle områder</option>
              <option>Oslo</option>
              <option>Bergen</option>
              <option>Trondheim</option>
              <option>Stavanger</option>
            </select>

            <select className="px-4 py-2 bg-white text-gray-900 dark:bg-white dark:text-gray-900 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Tilgjengelighet</option>
              <option>Ledig neste måned</option>
              <option>Begrenset ledighet</option>
            </select>

            <select className="px-4 py-2 bg-white text-gray-900 dark:bg-white dark:text-gray-900 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sorter etter</option>
              <option>Høyest rangering</option>
              <option>Flest anmeldelser</option>
              <option>Pris: lav til høy</option>
              <option>Pris: høy til lav</option>
            </select>
          </div>
        </div>

        {/* Provider list */}
        <div className="grid gap-6">
          {categoryProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-80 h-64 md:h-auto relative flex-shrink-0">
                  <img
                    src={provider.images[0]}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm ${getAvailabilityColor(provider.availability)}`}>
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {getAvailabilityText(provider.availability)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="mb-1">{provider.name}</h2>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{provider.location}</span>
                      </div>
                    </div>
                    {provider.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span>{provider.rating}</span>
                        <span className="text-gray-500">({provider.reviewCount})</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">{provider.shortDescription}</p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.services.slice(0, 4).map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-gray-600 text-sm">Prisklasse</span>
                      <p>{provider.priceRange}</p>
                    </div>
                    <button
                      onClick={() => onNavigate({ type: 'profile', providerId: provider.id })}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Se profil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
