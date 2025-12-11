
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
            projects: {
                Row: {
                    id: string
                    created_at: string
                    title: string
                    slug: string
                    description: string | null
                    tags: string[] | null
                    main_image: string | null
                    gallery: string[] | null
                    url: string | null
                    github: string | null
                    role: string | null
                    impact: string | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    title: string
                    slug: string
                    description?: string | null
                    tags?: string[] | null
                    main_image?: string | null
                    gallery?: string[] | null
                    url?: string | null
                    github?: string | null
                    role?: string | null
                    impact?: string | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    title?: string
                    slug?: string
                    description?: string | null
                    tags?: string[] | null
                    main_image?: string | null
                    gallery?: string[] | null
                    url?: string | null
                    github?: string | null
                    role?: string | null
                    impact?: string | null
                }
            },
            site_settings: {
                Row: {
                    id: number
                    hero_title: string
                    hero_subtitle: string
                    about_text: string
                    marquee_text: string
                    footer_cta: string
                    contact_email: string
                }
                Insert: {
                    id?: number
                    hero_title: string
                    hero_subtitle: string
                    about_text: string
                    marquee_text: string
                    footer_cta: string
                    contact_email: string
                }
                Update: {
                    id?: number
                    hero_title?: string
                    hero_subtitle?: string
                    about_text?: string
                    marquee_text?: string
                    footer_cta?: string
                    contact_email?: string
                }
                Relationships: []
            },
            experiences: {
                Row: {
                    id: number
                    created_at: string
                    company: string
                    role: string
                    date_range: string
                    description: string[] | null
                }
                Insert: {
                    id?: number
                    created_at?: string
                    company: string
                    role: string
                    date_range: string
                    description?: string[] | null
                }
                Update: {
                    id?: number
                    created_at?: string
                    company?: string
                    role?: string
                    date_range?: string
                    description?: string[] | null
                }
                Relationships: []
            },
            certifications: {
                Row: {
                    id: number
                    created_at: string
                    name: string
                    issuer: string
                }
                Insert: {
                    id?: number
                    created_at?: string
                    name: string
                    issuer: string
                }
                Update: {
                    id?: number
                    created_at?: string
                    name?: string
                    issuer?: string
                }
                Relationships: []
            }
        }
    }
}

