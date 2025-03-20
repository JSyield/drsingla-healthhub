
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Force scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>M/s Friends Property Consultants | Home</title>
        <meta name="description" content="M/s Friends Property Consultants - Your trusted real estate consultancy in Panchkula, Haryana." />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
