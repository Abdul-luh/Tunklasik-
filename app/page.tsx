import React from "react";

import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import ServicesSection from "./component/ServicesSection";
import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";

export default function TunklasikLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
