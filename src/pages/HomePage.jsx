import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import OrgsMarquee from '../components/home/OrgsMarquee';
import Services from '../components/home/Services';
import SpeakerReel from '../components/home/SpeakerReel';
import FracturedFocus from '../components/home/FracturedFocus';
import Framework from '../components/home/Framework';
import Topics from '../components/home/Topics';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import CrossSell from '../components/home/CrossSell';
import CTABanner from '../components/home/CTABanner';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <OrgsMarquee />
      <Services />
      <SpeakerReel />
      <FracturedFocus />
      <Framework />
      <Topics />
      <About />
      <Testimonials />
      <CrossSell />
      <CTABanner />
    </motion.div>
  );
}
