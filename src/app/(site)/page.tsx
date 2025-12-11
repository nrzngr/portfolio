import Hero from '@/components/dom/sections/Hero';
import BentoGrid from '@/components/dom/ui/BentoGrid';
import About from '@/components/dom/sections/About';
import Footer from '@/components/dom/layout/Footer';
import ExperienceSection from '@/components/dom/sections/Experience';
import CertificationsSection from '@/components/dom/sections/Certifications';
import LazyScene from '@/components/canvas/LazyScene';
import { getProjects, getSiteSettings, getExperiences, getCertifications } from '@/lib/supabase/queries';

// Revalidate data every hour (ISR) instead of on every request
export const revalidate = 3600;

export default async function Home() {
  const [projects, settings, experiences, certifications] = await Promise.all([
    getProjects(),
    getSiteSettings(),
    getExperiences(),
    getCertifications()
  ]);

  return (
    <main className="relative w-full min-h-screen bg-black text-white">
      {/* 3D Scene Background (Client Island) - Deferred via Client Wrapper */}
      <LazyScene />

      {/* DOM Content (Foreground) */}
      <Hero
        title={settings?.hero_title}
        subtitle={settings?.hero_subtitle}
      />

      <div id="work" className="relative z-10 bg-black">
        <BentoGrid projects={projects} />
      </div>

      <div id="experience" className="relative z-10">
        <ExperienceSection items={experiences} />
      </div>

      <div id="certifications" className="relative z-10">
        <CertificationsSection items={certifications} />
      </div>

      <div className="relative z-10">
        <About
          text={settings?.about_text ?? ""}
          marquee={settings?.marquee_text ?? ""}
        />
        <Footer
          cta={settings?.footer_cta ?? ""}
          email={settings?.contact_email ?? ""}
        />
      </div>
    </main>
  );
}
