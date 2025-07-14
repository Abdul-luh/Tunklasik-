import React from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import ServicesSection from "./component/ServicesSection";
import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import QuoteModal from "./component/Modal";

export default function TunklasikLanding() {
  return (
    <QuoteModalProvider>
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

        {/* Quote Modal */}
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
}
