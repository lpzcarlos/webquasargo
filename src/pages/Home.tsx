import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { BookingCTA } from '../components/BookingCTA';
import { Footer } from '../components/Footer';

export function Home() {
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
