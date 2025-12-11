// @ts-nocheck
'use server';

import { supabase } from './client';
import { revalidatePath } from 'next/cache';
import { Database } from './types';

export async function updateSiteSettings(formData: FormData) {
    const hero_title = formData.get('hero_title') as string;
    const hero_subtitle = formData.get('hero_subtitle') as string;
    const about_text = formData.get('about_text') as string;
    const marquee_text = formData.get('marquee_text') as string;
    const footer_cta = formData.get('footer_cta') as string;
    const contact_email = formData.get('contact_email') as string;

    const updates: Database['public']['Tables']['site_settings']['Update'] = {
        hero_title,
        hero_subtitle,
        about_text,
        marquee_text,
        footer_cta,
        contact_email
    };

    console.log("Server Action: Updating settings...", updates);

    // @ts-ignore
    const { data, error } = await supabase
        .from('site_settings')
        .update(updates)
        .eq('id', 1)
        .select();

    console.log("Supabase response:", { data, error });

    if (error) {
        console.error('Update failed:', error);
        throw new Error('Failed to update settings');
    }

    revalidatePath('/', 'layout'); // Revalidate everything
    revalidatePath('/admin', 'layout');
}

export async function createProject(formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const role = formData.get('role') as string;
    // Simple slug gen
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    // @ts-ignore
    const { error } = await supabase.from('projects').insert({
        title,
        slug,
        description,
        role,
        tags: [], // Default empty or handle parsing
        gallery: []
    });

    if (error) throw new Error('Failed to create project');
    revalidatePath('/', 'layout');
}

export async function createExperience(formData: FormData) {
    const company = formData.get('company') as string;
    const role = formData.get('role') as string;
    const date_range = formData.get('date_range') as string;
    const description = formData.get('description') as string; // Expecting newline separated?

    // @ts-ignore
    const { error } = await supabase.from('experiences').insert({
        company,
        role,
        date_range,
        description: description ? description.split('\n') : []
    });

    if (error) throw new Error('Failed to create experience');
    revalidatePath('/', 'layout');
}

export async function createCertification(formData: FormData) {
    const name = formData.get('name') as string;
    const issuer = formData.get('issuer') as string;

    // @ts-ignore
    const { error } = await supabase.from('certifications').insert({
        name,
        issuer
    });

    if (error) throw new Error('Failed to create certification');
    revalidatePath('/', 'layout');
}
