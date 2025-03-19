
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Properties API
export const getProperties = async (type?: 'sale' | 'rent') => {
  let query = supabase.from('properties').select('*');
  
  if (type) {
    query = query.eq('type', type);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
  
  return data;
};

export const getPropertyById = async (id: string) => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching property:', error);
    throw error;
  }
  
  return data;
};

export const getFeaturedProperties = async (limit = 3) => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('isFeatured', true)
    .limit(limit);
  
  if (error) {
    console.error('Error fetching featured properties:', error);
    throw error;
  }
  
  return data;
};

// Contact form submission
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData]);
  
  if (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
  
  return data;
};
