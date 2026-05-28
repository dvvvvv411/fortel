import { useEffect } from 'react';
import HeroBento from '@/components/landing-v2/HeroBento';
import BentoFeatures from '@/components/landing-v2/BentoFeatures';
import ProcessFlow from '@/components/landing-v2/ProcessFlow';
import ImpactGrid from '@/components/landing-v2/ImpactGrid';
import VoicesSection from '@/components/landing-v2/VoicesSection';
import FAQTerminal from '@/components/landing-v2/FAQTerminal';
import FinalCTA from '@/components/landing-v2/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'for.tel Solutions – Software & Beratung für 2026';
  }, []);

  return (
    <>
      <HeroBento />
      <BentoFeatures />
      <ProcessFlow />
      <ImpactGrid />
      <VoicesSection />
      <FAQTerminal />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Index;
