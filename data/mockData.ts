export type Category = {
  id: string;
  name: string;
  icon: string;
  image: string;
};

export type AvailabilityStatus = 'available' | 'limited' | 'booked';

export type Provider = {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  shortDescription: string;
  priceRange: string;
  images: string[];
  availability: AvailabilityStatus;
  phone: string;
  email: string;
  instagram?: string;
  facebook?: string;
  website?: string;
  services: string[];
  rating?: number;
  reviewCount?: number;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: Date;
};

export type Conversation = {
  id: string;
  providerId: string;
  providerName: string;
  customerId: string;
  customerName: string;
  lastMessage: string;
  timestamp: Date;
  unread: boolean;
  providerImage?: string;
};

export const categories: Category[] = [
  {
    id: 'dj',
    name: 'DJ & Musikk',
    icon: 'Music',
    image: 'https://images.unsplash.com/photo-1558871042-c80fc7f73f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMERKJTIwbXVzaWN8ZW58MXx8fHwxNzY1MDQzODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'fotograf',
    name: 'Fotograf & Video',
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1623783356340-95375aac85ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyfGVufDF8fHx8MTc2NDk2MjkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'catering',
    name: 'Catering & Mat',
    icon: 'UtensilsCrossed',
    image: 'https://images.unsplash.com/photo-1592868859049-dfdcd6c07c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBidWZmZXR8ZW58MXx8fHwxNzY1MDMwNjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'dekor',
    name: 'Dekorasjon & Pynt',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1607430107755-eed0660a4212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGRlY29yYXRpb24lMjBiYWxsb29uc3xlbnwxfHx8fDE3NjUwNDM4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'lokale',
    name: 'Lokaler & Venues',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1762765684665-6b6855bb6fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlJTIwaGFsbHxlbnwxfHx8fDE3NjUwMzYxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'bar',
    name: 'Bartender & Drikke',
    icon: 'Wine',
    image: 'https://images.unsplash.com/photo-1676471797246-7070301108e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBjb2NrdGFpbHN8ZW58MXx8fHwxNzY1MDQzODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'makeup',
    name: 'Makeup & Bridal Design',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1625139108082-48bb424c2333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBhcnRpc3R8ZW58MXx8fHwxNzY1MDAwMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'dhol',
    name: 'Dhol Spillere',
    icon: 'Music',
    image: 'https://images.unsplash.com/photo-1759253138417-f6953e1c6455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaG9sJTIwcGxheWVyJTIwZHJ1bW1lcnxlbnwxfHx8fDE3NjUwNDY2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'dansere',
    name: 'Dansere',
    icon: 'User',
    image: 'https://images.unsplash.com/photo-1650820597435-c1d6d6cbbcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xseXdvb2QlMjBkYW5jZXJzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzY1MDQ2NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export const providers: Provider[] = [
  {
    id: '1',
    name: 'DJ Magnus',
    category: 'dj',
    location: 'Oslo',
    shortDescription: 'Profesjonell DJ med 10 års erfaring',
    description: 'Jeg er en erfaren DJ som har underholdt på hundrevis av bryllup, bursdager og firmafester. Med et bredt musikkbibliotek og god forståelse for stemningen, sørger jeg for at dansegulvet alltid er fullt. Jeg tilpasser musikken etter dine ønsker og sørger for en uforglemmelig kveld.',
    priceRange: '5 000 - 15 000 kr',
    images: ['https://images.unsplash.com/photo-1558871042-c80fc7f73f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMERKJTIwbXVzaWN8ZW58MXx8fHwxNzY1MDQzODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'limited',
    phone: '+47 987 65 432',
    email: 'magnus@djmagnus.no',
    instagram: '@djmagnus',
    facebook: 'DJMagnusOfficial',
    services: ['Mehndi', 'Sangeet', 'Walima', 'Nikah', 'Bursdagsfester', 'Forlovelse'],
    rating: 4.8,
    reviewCount: 47,
  },
  {
    id: '2',
    name: 'BeatMasters',
    category: 'dj',
    location: 'Bergen',
    shortDescription: 'Spesialisert i Bollywood og Desi musikk',
    description: 'Vi er en DJ-duo som brenner for musikk og fest! Med et massivt bibliotek av Bollywood, Bhangra, og arabisk musikk, skaper vi den perfekte stemningen for ditt arrangement. Vi forstår viktigheten av musikk i kulturelle feiringer og tilpasser oss deres ønsker.',
    priceRange: '8 000 - 20 000 kr',
    images: ['https://images.unsplash.com/photo-1558871042-c80fc7f73f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMERKJTIwbXVzaWN8ZW58MXx8fHwxNzY1MDQzODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'available',
    phone: '+47 456 78 901',
    email: 'kontakt@beatmasters.no',
    instagram: '@beatmasters_official',
    website: 'www.beatmasters.no',
    services: ['Test'],
    rating: 4.9,
    reviewCount: 62,
  },
  {
    id: '3',
    name: 'Lene Fotografi',
    category: 'fotograf',
    location: 'Oslo',
    shortDescription: 'Kreativ bryllupsfotograf',
    description: 'Som bryllupsfotograf elsker jeg å fange de store og små øyeblikkene. Med erfaring fra både norske og internasjonale bryllup, forstår jeg viktigheten av å dokumentere alle ritualene og tradisjonene. Jeg tilbyr fleksible pakker og leverer bildene digitalt i høy oppløsning.',
    priceRange: '12 000 - 35 000 kr',
    images: ['https://images.unsplash.com/photo-1623783356340-95375aac85ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyfGVufDF8fHx8MTc2NDk2MjkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'available',
    phone: '+47 912 34 567',
    email: 'lene@lenefoto.no',
    instagram: '@lenefotografi',
    website: 'www.lenefotografi.no',
    services: ['Mehndi', 'Sangeet', 'Nikah', 'Walima', 'Engagement', 'Milestone bursdager'],
    rating: 5.0,
    reviewCount: 89,
  },
  {
    id: '4',
    name: 'Smakfullt Catering',
    category: 'catering',
    location: 'Oslo',
    shortDescription: 'Autentisk indisk, pakistansk og arabisk mat',
    description: 'Vi leverer autentisk catering til alle typer arrangementer. Vårt kjøkken spesialiserer seg på indisk, pakistansk og arabisk mat med tradisjonelle retter og moderne tilpasninger. Vi forstår viktigheten av halal og håndterer spesialdietter med profesjonalitet.',
    priceRange: '350 - 900 kr per person',
    images: ['https://images.unsplash.com/photo-1592868859049-dfdcd6c07c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBidWZmZXR8ZW58MXx8fHwxNzY1MDMwNjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'limited',
    phone: '+47 234 56 789',
    email: 'post@smakfullt.no',
    website: 'www.smakfullt.no',
    services: ['Walima', 'Mehndi', 'Sangeet', 'Nikah', 'Engagement', 'Milestone bursdager'],
    rating: 4.7,
    reviewCount: 134,
  },
  {
    id: '5',
    name: 'Party Perfect Dekor',
    category: 'dekor',
    location: 'Bergen',
    shortDescription: 'Spektakulær dekor for desi-arrangementer',
    description: 'Vi spesialiserer oss på dekor for indiske, pakistanske og arabiske arrangementer. Fra elegante Mehndi-setups til storslåtte bryllupsdekorasjoner. Vi forstår viktigheten av farger, tekstiler og tradisjonelle elementer. Alt fra blomsterdekor til lyssetting og lounge-areas.',
    priceRange: '5 000 - 50 000 kr',
    images: ['https://images.unsplash.com/photo-1607430107755-eed0660a4212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGRlY29yYXRpb24lMjBiYWxsb29uc3xlbnwxfHx8fDE3NjUwNDM4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'available',
    phone: '+47 345 67 890',
    email: 'hei@partyperfect.no',
    instagram: '@partyperfect_dekor',
    services: ['Mehndi', 'Sangeet', 'Walima', 'Nikah', 'Engagement', 'Milestone bursdager'],
    rating: 4.6,
    reviewCount: 53,
  },
  {
    id: '6',
    name: 'Grand Hall Oslo',
    category: 'lokale',
    location: 'Oslo',
    shortDescription: 'Elegante lokaler i Oslo sentrum',
    description: 'Vårt eventlokale ligger sentralt i Oslo og kan romme 50-300 gjester. Vi har erfaring med store bryllupsarrangementer og forstår behovene til flerdagers-feiringer. Moderne fasiliteter, profesjonelt lyd- og lysanlegg, og fleksible rom som kan tilpasses deres ønsker.',
    priceRange: '15 000 - 70 000 kr',
    images: ['https://images.unsplash.com/photo-1762765684665-6b6855bb6fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlJTIwaGFsbHxlbnwxfHx8fDE3NjUwMzYxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'booked',
    phone: '+47 456 78 912',
    email: 'booking@grandhall.no',
    website: 'www.grandhall.no',
    services: ['Mehndi', 'Sangeet', 'Walima', 'Nikah', 'Engagement', 'Store feiringer'],
    rating: 4.9,
    reviewCount: 112,
  },
  {
    id: '7',
    name: 'Cocktail Kings',
    category: 'bar',
    location: 'Oslo',
    shortDescription: 'Profesjonelle bartendere og drikkeløsninger',
    description: 'Vi leverer profesjonelle bartendere og komplett barløsning til ditt arrangement. Vi tilbyr både alkoholholdige og et bredt utvalg av kreative alkoholfrie alternativer. Mocktails, lassi, sharbat og andre tradisjonelle drikker er våre spesialiteter.',
    priceRange: '8 000 - 30 000 kr',
    images: ['https://images.unsplash.com/photo-1676471797246-7070301108e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBjb2NrdGFpbHN8ZW58MXx8fHwxNzY1MDQzODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'available',
    phone: '+47 567 89 012',
    email: 'booking@cocktailkings.no',
    instagram: '@cocktailkings_no',
    facebook: 'CocktailKingsNorge',
    services: ['Mehndi', 'Sangeet', 'Walima', 'Engagement', 'Milestone bursdager'],
    rating: 4.8,
    reviewCount: 76,
  },
  {
    id: '8',
    name: 'Glam Beauty Studio',
    category: 'makeup',
    location: 'Oslo',
    shortDescription: 'Bridal makeup og styling',
    description: 'Vi spesialiserer oss på bridal makeup for desi-bryllup. Med erfaring i tradisjonelle og moderne looks, sikrer vi at du ser fantastisk ut fra Mehndi til Walima. Vi bruker high-end produkter som holder hele dagen. Vi tilbyr også hårdesign, draping og komplette bridal packages.',
    priceRange: '3 000 - 15 000 kr',
    images: ['https://images.unsplash.com/photo-1625139108082-48bb424c2333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBhcnRpc3R8ZW58MXx8fHwxNzY1MDAwMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'limited',
    phone: '+47 678 90 123',
    email: 'booking@glambeauty.no',
    instagram: '@glambeauty_oslo',
    services: ['Mehndi makeup', 'Nikah makeup', 'Walima makeup', 'Sangeet styling', 'Hair design'],
    rating: 4.9,
    reviewCount: 98,
  },
  {
    id: '9',
    name: 'Royal Dhol Group',
    category: 'dhol',
    location: 'Oslo',
    shortDescription: 'Energiske dhol-spillere for baraat og sangeet',
    description: 'Vi er en gruppe profesjonelle dhol-spillere som skaper energi og liv i deres feiring! Perfekt for baraat, sangeet og alle deler av bryllupet hvor du vil ha tradisjonell musikk og stemning. Vi har også tilbud med lysshow og ekstra perkusjon.',
    priceRange: '5 000 - 12 000 kr',
    images: ['https://images.unsplash.com/photo-1759253138417-f6953e1c6455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaG9sJTIwcGxheWVyJTIwZHJ1bW1lcnxlbnwxfHx8fDE3NjUwNDY2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'available',
    phone: '+47 789 01 234',
    email: 'kontakt@royaldhol.no',
    instagram: '@royaldhol',
    services: ['Baraat', 'Sangeet', 'Mehndi', 'Walima entrance', 'Engagement'],
    rating: 4.7,
    reviewCount: 54,
  },
  {
    id: '10',
    name: 'Bollywood Stars Dance',
    category: 'dansere',
    location: 'Oslo',
    shortDescription: 'Profesjonelle bollywood og bhangra-dansere',
    description: 'Vi er en gruppe profesjonelle dansere med spesialisering i Bollywood, Bhangra og tradisjonelle danser. Vi tilbyr både koreograferte opptreden for deres sangeet eller andre deler av festen, samt dansetimer for brudepar og gjester. Vi skaper show som alle vil huske!',
    priceRange: '8 000 - 25 000 kr',
    images: ['https://images.unsplash.com/photo-1650820597435-c1d6d6cbbcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xseXdvb2QlMjBkYW5jZXJzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzY1MDQ2NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
    availability: 'available',
    phone: '+47 890 12 345',
    email: 'info@bollywoodstars.no',
    instagram: '@bollywoodstars_norway',
    website: 'www.bollywoodstars.no',
    services: ['Sangeet performance', 'Mehndi entertainment', 'Dansetimer', 'Bridal choreography', 'Flash mob'],
    rating: 4.8,
    reviewCount: 67,
  },
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    providerId: '1',
    providerName: 'DJ Magnus',
    customerId: 'c1',
    customerName: 'Kari Nordmann',
    lastMessage: 'Takk for rask respons! Vi vil gjerne bestille deg til 15. juni.',
    timestamp: new Date('2024-12-05T14:30:00'),
    unread: true,
    providerImage: 'https://images.unsplash.com/photo-1558871042-c80fc7f73f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMERKJTIwbXVzaWN8ZW58MXx8fHwxNzY1MDQzODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    providerId: '4',
    providerName: 'Smakfullt Catering',
    customerId: 'c1',
    customerName: 'Kari Nordmann',
    lastMessage: 'Vi har allergier i familien, kan dere tilpasse menyen?',
    timestamp: new Date('2024-12-04T10:15:00'),
    unread: false,
  },
  {
    id: '3',
    providerId: '3',
    providerName: 'Lene Fotografi',
    customerId: 'c1',
    customerName: 'Kari Nordmann',
    lastMessage: 'Perfekt! Vi sees på befaring tirsdag kl 15.',
    timestamp: new Date('2024-12-03T16:45:00'),
    unread: false,
    providerImage: 'https://images.unsplash.com/photo-1623783356340-95375aac85ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyfGVufDF8fHx8MTc2NDk2MjkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export const mockMessages: { [conversationId: string]: Message[] } = {
  '1': [
    {
      id: 'm1',
      conversationId: '1',
      senderId: 'c1',
      senderName: 'Kari Nordmann',
      text: 'Hei! Jeg lurer på om du er ledig 15. juni? Vi skal ha bryllup og trenger DJ.',
      timestamp: new Date('2024-12-05T13:00:00'),
    },
    {
      id: 'm2',
      conversationId: '1',
      senderId: '1',
      senderName: 'DJ Magnus',
      text: 'Hei Kari! Gratulerer med bryllupet! Ja, jeg er ledig den datoen. Hvor mange gjester blir det og hvor lenge skal jeg spille?',
      timestamp: new Date('2024-12-05T13:15:00'),
    },
    {
      id: 'm3',
      conversationId: '1',
      senderId: 'c1',
      senderName: 'Kari Nordmann',
      text: 'Det blir ca 80 gjester, og vi ønsker musikk fra kl 19 til midnatt. Hva blir prisen for det?',
      timestamp: new Date('2024-12-05T13:30:00'),
    },
    {
      id: 'm4',
      conversationId: '1',
      senderId: '1',
      senderName: 'DJ Magnus',
      text: 'For et bryllup med 5 timers spilletid blir prisen 12 000 kr. Dette inkluderer alt av utstyr, lys og møte i forkant for å planlegge musikk.',
      timestamp: new Date('2024-12-05T14:00:00'),
    },
    {
      id: 'm5',
      conversationId: '1',
      senderId: 'c1',
      senderName: 'Kari Nordmann',
      text: 'Takk for rask respons! Vi vil gjerne bestille deg til 15. juni.',
      timestamp: new Date('2024-12-05T14:30:00'),
    },
  ],
  '2': [
    {
      id: 'm6',
      conversationId: '2',
      senderId: 'c1',
      senderName: 'Kari Nordmann',
      text: 'Hei! Jeg så profilene deres og er interessert i catering til bryllup 15. juni. Kan dere sende et tilbud?',
      timestamp: new Date('2024-12-04T09:00:00'),
    },
    {
      id: 'm7',
      conversationId: '2',
      senderId: '4',
      senderName: 'Smakfullt Catering',
      text: 'Hei! Absolutt! Hvor mange personer blir det, og har dere tanker om type meny?',
      timestamp: new Date('2024-12-04T09:30:00'),
    },
    {
      id: 'm8',
      conversationId: '2',
      senderId: 'c1',
      senderName: 'Kari Nordmann',
      text: 'Vi har allergier i familien, kan dere tilpasse menyen?',
      timestamp: new Date('2024-12-04T10:15:00'),
    },
  ],
};