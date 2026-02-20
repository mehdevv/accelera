import { useEffect } from 'react'
import './index.css'
import { LangProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ResultAutomation from './components/ResultAutomation'
import ResultCRM from './components/ResultCRM'
import SocialProof from './components/SocialProof'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  // Scroll-reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <Services />
      <ResultAutomation />
      <ResultCRM />
      <SocialProof />
      <Testimonials />
      <CTA />
      <Footer />
    </LangProvider>
  )
}

export default App
