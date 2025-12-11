-- Create the projects table
create table projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null unique,
  description text,
  tags text[] default '{}',
  main_image text,
  gallery text[] default '{}',
  url text,
  github text
);

-- Enable Row Level Security (RLS)
alter table projects enable row level security;

-- Create a policy that allows everyone to read
create policy "Public projects are viewable by everyone"
  on projects for select
  using ( true );

-- Create a storage bucket for 'portfolio-assets'
insert into storage.buckets (id, name, public)
values ('portfolio-assets', 'portfolio-assets', true);

-- Policy to allow public access to the bucket
create policy "Give public access to portfolio-assets"
  on storage.objects
  for select
  using ( bucket_id = 'portfolio-assets' );
