export type Language = 'sv' | 'en';

export interface ServiceItem {
  id: string;
  category: 'construction' | 'installations' | 'heritage' | 'joinery' | 'realestate' | 'staffing' | 'trade';
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  details: Record<Language, string[]>;
  icon: string;
  image?: string;
  badge?: Record<Language, string>;
}

export interface ProjectItem {
  id: string;
  title: Record<Language, string>;
  location: string;
  category: Record<Language, string>;
  description: Record<Language, string>;
  year: string;
  image: string;
  stats?: { label: Record<Language, string>; value: string }[];
}

export interface QuoteRequest {
  clientType: 'private' | 'company' | 'brf' | 'public';
  services: string[];
  name: string;
  companyName?: string;
  orgOrPersonalNumber?: string;
  email: string;
  phone: string;
  city: string;
  address?: string;
  projectDescription: string;
  wantsRotDeduction: boolean;
  estimatedTimeframe: 'urgent' | '1-3months' | '3-6months' | 'future';
  estimatedBudget?: string;
}
