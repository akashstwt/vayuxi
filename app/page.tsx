import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { ReviewsSection } from '@/components/sections/reviews-section';
import { ContactSection } from '@/components/sections/contact-section';
import AppSample from '@/components/sections/app-sample';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AppSample />
      <PricingSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}