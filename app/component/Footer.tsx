"use client";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Tunklasik <span className="text-teal-400">print</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional printing services you can trust. We bring quality,
              speed, and precision to every project.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Tunklasik Print. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Book Work Printing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lamination Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Paper Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Packaging Materials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom Printing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-sm">
                  21 awoseyin street Odunlade off onipanu bus stop Shomolu{" "}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-sm">08023450305</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-sm">+234 802 345 0305</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-sm">tunklasik2133@gmail.com</span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={openQuoteModal}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Get Quote Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
