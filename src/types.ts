export type Screen = 'home' | 'services' | 'pricing-enquiry' | 'book-appointment';

export type TransitionType = 'none' | 'push';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Refrigeration' | 'Laundry' | 'Cooking' | 'Electronics' | 'Commercial';
  tagline: string;
  description: string;
  commonIssues: string[];
  brands: string[];
  estTime: string;
  priceRange: string;
  warranty: string;
  iconName: string;
  popular?: boolean;
}

export interface BookingFormData {
  appliance: string;
  brand: string;
  model: string;
  issueDescription: string;
  symptoms: string[];
  serviceDate: string;
  timeSlot: string;
  isUrgent: boolean;
  fullName: string;
  phone: string;
  email: string;
  streetAddress: string;
  suburb: string;
  notes: string;
}
