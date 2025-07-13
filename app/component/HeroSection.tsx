"use client";
import {
  BookOpen,
  Layers,
  Mail,
  Package,
  Phone,
  ShoppingBag,
  X,
  Upload,
  MessageCircle,
} from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for form validation
const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  projectDetails: z
    .string()
    .min(10, "Project details must be at least 10 characters"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  files: z.any().optional(), // For file uploads
});

// Infer TypeScript type from Zod schema
type QuoteFormData = z.infer<typeof quoteSchema>;

export default function HeroSection() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      projectDetails: "",
      timeline: "",
      budget: "",
    },
  });

  const services = [
    "Book Work Printing",
    "Lamination",
    "Paper Bags",
    "Packaging Materials",
    "Custom Printing",
    "Other",
  ];

  const onSubmit = (data: QuoteFormData) => {
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'd like to request a quote for ${
      data.service
    }. 
    
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Project Details: ${data.projectDetails}
Timeline: ${data.timeline || "Not specified"}
Budget: ${data.budget || "Not specified"}`;

    window.open(
      `https://wa.me/2348023450305?text=${encodeURIComponent(whatsappMessage)}`
    );
    setShowQuoteModal(false);
    reset();
  };

  const handleEmailSubmit = (data: QuoteFormData) => {
    const emailSubject = encodeURIComponent("Quote Request - " + data.service);
    const emailBody = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${
        data.phone
      }\nService: ${data.service}\nProject Details: ${
        data.projectDetails
      }\nTimeline: ${data.timeline || "Not specified"}\nBudget: ${
        data.budget || "Not specified"
      }`
    );
    window.location.href = `mailto:tunklasik2133@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/2348023450305?text=Hi, I need a quote for printing services"
    );
  };

  return (
    <>
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
                onClick={() => setShowQuoteModal(true)}
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

      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">
                Request a Quote
              </h3>
              <button
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                    placeholder="Enter your full name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                    placeholder="Enter your phone number"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    className={`w-full px-4 py-3 border ${
                      errors.service ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                    {...register("service")}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    {...register("timeline")}
                  >
                    <option value="">Select timeline</option>
                    <option value="Rush (1-3 days)">Rush (1-3 days)</option>
                    <option value="Standard (1 week)">Standard (1 week)</option>
                    <option value="Flexible (2+ weeks)">
                      Flexible (2+ weeks)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    {...register("budget")}
                  >
                    <option value="">Select budget range</option>
                    <option value="Under ₦50,000">Under ₦50,000</option>
                    <option value="₦50,000 - ₦100,000">
                      ₦50,000 - ₦100,000
                    </option>
                    <option value="₦100,000 - ₦500,000">
                      ₦100,000 - ₦500,000
                    </option>
                    <option value="₦500,000+">₦500,000+</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 border ${
                    errors.projectDetails ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                  placeholder="Please describe your project requirements, quantities, specifications, etc."
                  {...register("projectDetails")}
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.projectDetails.message}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Files (Optional)
                </label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors cursor-pointer"
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Drag and drop files here or click to browse
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PDF, JPG, PNG up to 10MB
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    id="file-upload"
                    {...register("files")}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                </button>
                <button
                  type="button"
                  onClick={handleSubmit(handleEmailSubmit)}
                  disabled={isSubmitting}
                  className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold disabled:opacity-70"
                >
                  Send via Email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
