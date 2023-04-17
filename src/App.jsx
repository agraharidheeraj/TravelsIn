import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import { Contact } from "./components/Contact";
import scrollreveal from "scrollreveal";
import Members from "./components/aboutme";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 5000,
      reset: true,
    });
    sr.reveal(
      `
        #nav,
        #hero,
        #services,
        #recommend,
        #members,
        #footer
        `,
      {
        opacity: 1,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Members/>
      <Contact/>
      <Footer />
      
    </div>
  );
}
