
import { supabase } from './client';
import { Database } from './types';

export type Project = Database['public']['Tables']['projects']['Row'];

export async function getProjects() {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching projects:', error);
        return [];
    }

    return data as Project[];
}

export async function getProjectBySlug(slug: string) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error('Error fetching project:', error);
        return null;
    }
    return data as Project;
}

export type SiteSettingsRow = Database['public']['Tables']['site_settings']['Row'];

export async function getSiteSettings(): Promise<SiteSettingsRow | null> {
    const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .single();

    if (error) {
        // Fallback or potentially undefined if table empty, but we seeded it.
        console.error('Error fetching site settings:', error);
        return null;
    }
    return data as SiteSettingsRow;
}

export type SiteSettings = SiteSettingsRow;

export type Experience = Database['public']['Tables']['experiences']['Row'];
export type Certification = Database['public']['Tables']['certifications']['Row'];

export async function getExperiences() {
    const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('id', { ascending: true }); // Using ID or date if text format allows sorting, ID is insertion order so reliable for seed

    if (error) {
        console.error('Error fetching experiences:', error);
        return [];
    }
    return data as Experience[];
}

export async function getCertifications() {
    const { data, error } = await supabase
        .from('certifications')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        console.error('Error fetching certifications:', error);
        return [];
    }
    return data as Certification[];
}
