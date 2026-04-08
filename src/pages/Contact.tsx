import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Form } from '../components/Form';
import { Footer } from '../components/Footer';

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main className="w-full flex items-center flex-col relative pt-20">
        <Form />
      </main>
      <Footer />
    </>
  );
}
