import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import '../src/assest/Style/style.css';
import Home from './Component/Home/Home';
import Sidebar from './Component/Sidebar/Sidebar';
import Service from './Component/Service/Service';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Resume from './Component/Resume/Resume';
import Portfolio from './Component/Portfolio/Portfolio';
import Pricing from './Component/Pricing/Pricing';
import Testimonials from './Component/Testimonials/Testimonials';
import Blog from './Component/Blog/Blog';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Sidebar />
      <main className='main'>
        <section data-aos="fade-in">
          <Home />
        </section>
        <section data-aos="fade-up">
          <About />
        </section>
        <section data-aos="fade-down">
          <Service />
        </section>
        <section data-aos="slide-left">
          <Resume />
        </section>
        <section data-aos="slide-right">
          <Portfolio />
        </section>
        <section data-aos="zoom-in">
          <Pricing />
        </section>
        <section data-aos="zoom-out">
          <Testimonials />
        </section>
        <section data-aos="fade-in">
          <Blog />
        </section>
        <section data-aos="fade-out">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
