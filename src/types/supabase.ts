
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          title: string
          description: string
          price: string
          priceUnit?: string
          location: string
          bedrooms?: number
          bathrooms?: number
          area?: string
          image: string
          isFeatured: boolean
          type: 'sale' | 'rent'
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          price: string
          priceUnit?: string
          location: string
          bedrooms?: number
          bathrooms?: number
          area?: string
          image: string
          isFeatured?: boolean
          type: 'sale' | 'rent'
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          price?: string
          priceUnit?: string
          location?: string
          bedrooms?: number
          bathrooms?: number
          area?: string
          image?: string
          isFeatured?: boolean
          type?: 'sale' | 'rent'
          created_at?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          message?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
