export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'professional';
  created_at: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  last_visit?: string;
}

export interface Professional {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialties: string[];
  is_active: boolean;
  created_at: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // em minutos
  price: number;
  category: string;
  is_active: boolean;
  created_at: string;
}

export interface Appointment {
  id: string;
  client_id: string;
  professional_id: string;
  service_id: string;
  date: string;
  time: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  total_price: number;
  created_at: string;
  client?: Client;
  professional?: Professional;
  service?: Service;
}

export interface Commission {
  id: string;
  professional_id: string;
  service_id: string;
  percentage: number;
  created_at: string;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  created_at: string;
}