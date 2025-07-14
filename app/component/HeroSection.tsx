"use client";
import {
  BookOpen,
  Layers,
  Mail,
  Package,
  Phone,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import React from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/2347033824496?text=Hi, I need a quote for printing services"
    );
  };

  return (
    <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Printing Services
            <span className="block text-teal-200 text-4xl md:text-5xl mt-2">
              You Can Trust
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-100">
            Specializing in book work, lamination, paper bags, packaging
            materials, and more. Let us bring your printing projects to life
            with precision and quality.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-teal-200" />
              <p className="text-sm font-medium">Book Work</p>
            </div>
            <div className="text-center">
              <Layers className="w-12 h-12 mx-auto mb-3 text-teal-200" />
              <p className="text-sm font-medium">Lamination</p>
            </div>
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-teal-200" />
              <p className="text-sm font-medium">Paper Bags</p>
            </div>
            <div className="text-center">
              <Package className="w-12 h-12 mx-auto mb-3 text-teal-200" />
              <p className="text-sm font-medium">Packaging</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openQuoteModal}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Your Quote Today
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Our Services
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-teal-100">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>08023450305</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+234 802 345 0305</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>tunklasik2133@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
