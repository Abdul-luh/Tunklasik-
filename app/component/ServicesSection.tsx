"use client";
import {
  ArrowRight,
  BookOpen,
  Layers,
  Package,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const { openQuoteModal } = useQuoteModal();
  const router = useRouter();

  const services = [
    {
      icon: <BookOpen className="w-12 h-12 text-teal-600" />,
      title: "Book Work Printing",
      description:
        "Professional book printing with high-quality materials and precise binding for all your publishing needs.",
      additionalInfo:
        "We offer perfect binding, saddle stitching, and hardcover options for books of all sizes. Our printing process ensures vibrant colors and crisp text reproduction.",
      image: "/images/newspaper-print.jpg",
      gallerySlug: "book-printing",
    },
    {
      icon: <Layers className="w-12 h-12 text-teal-600" />,
      title: "Lamination",
      description:
        "Protect and enhance your printed materials with our premium lamination services for durability and a professional finish.",
      additionalInfo:
        "Choose from gloss, matte, or satin lamination to add a sleek touch or superior protection for documents, menus, and posters.",
      image: "/images/Lamination.jpg",
      gallerySlug: "lamination",
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-teal-600" />,
      title: "Paper Bags",
      description:
        "Eco-friendly custom paper bags for retail, events, and promotional purposes with your branding.",
      additionalInfo:
        "We provide various sizes, colors, and finishes, including kraft, gloss, or matte, with options for custom printing and handles.",
      image: "/images/paper-bags.jpg",
      gallerySlug: "paper-bags",
    },
    {
      icon: <Package className="w-12 h-12 text-teal-600" />,
      title: "Packaging Materials",
      description:
        "Complete packaging solutions including boxes, labels, and custom packaging designs for your products.",
      additionalInfo:
        "From sturdy cartons to branded labels and tissue paper, we tailor packaging to protect your products and boost brand appeal.",
      image: "/images/packaging-materials.jpg",
      gallerySlug: "packaging-materials",
    },
  ];

  const handleViewGallery = (gallerySlug: string) => {
    router.push(`/gallery/${gallerySlug}`);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Printing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From book publishing to packaging solutions, we offer comprehensive
            printing services that combine quality with value to exceed your
            expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  height={500}
                  width={500}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />

                {/* Icon overlay */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <button
                  onClick={() => handleViewGallery(service.gallerySlug)}
                  className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2 transition-colors duration-200"
                >
                  View Gallery
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your printing needs and create something
              amazing together. Get a free quote today and experience the
              difference.
            </p>
            <button
              onClick={openQuoteModal}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
