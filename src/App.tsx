import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // We clean up scroll trigger globally on unmount just in case
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main className="w-full flex items-center flex-col relative">
        <Hero />
        <Services />
        <Process />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
