"use client";
import { X, Upload, FileText, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQuoteModal } from "@/context/QuoteModalContext";

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
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteModal() {
  const { showQuoteModal, closeQuoteModal } = useQuoteModal();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    // Validate file size (10MB limit)
    const validFiles = files.filter((file) => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return false;
      }
      return true;
    });

    // Validate file types
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];
    const typeValidFiles = validFiles.filter((file) => {
      if (!allowedTypes.includes(file.type)) {
        alert(
          `File ${file.name} is not supported. Please use PDF, JPG, or PNG files.`
        );
        return false;
      }
      return true;
    });

    setSelectedFiles((prev) => [...prev, ...typeValidFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

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
Budget: ${data.budget || "Not specified"}${
      selectedFiles.length > 0
        ? `\nFiles attached: ${selectedFiles
            .map((f) => f.name)
            .join(", ")} (Note: Files need to be sent separately)`
        : ""
    }`;
    // `https://wa.me/2348023450305?text=${encodeURIComponent(whatsappMessage)}`

    window.open(
      `https://wa.me/2347033824496?text=${encodeURIComponent(whatsappMessage)}`
    );
    closeQuoteModal();
    reset();
    setSelectedFiles([]);
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
      }${
        selectedFiles.length > 0
          ? `\n\nFiles to be attached: ${selectedFiles
              .map((f) => f.name)
              .join(
                ", "
              )}\n(Note: Please attach these files manually to your email)`
          : ""
      }`
    );
    window.location.href = `mailto:tunklasik2133@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  const resetForm = () => {
    reset();
    setSelectedFiles([]);
    closeQuoteModal();
  };

  if (!showQuoteModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">Request a Quote</h3>
          <button
            onClick={resetForm}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                className={`w-full px-4 py-3 border text-gray-900 ${
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
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className={`w-full px-4 py-3 border text-gray-900 ${
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
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                className={`w-full px-4 py-3 border text-gray-900 ${
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
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Service Required *
              </label>
              <select
                className={`w-full px-4 py-3 border text-gray-900 ${
                  errors.service ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                {...register("service")}
              >
                <option className="text-[#333]" value="">
                  Select a service
                </option>
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
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Project Timeline
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-black focus:border-transparent"
                {...register("timeline")}
              >
                <option className="text-[#333]" value="">
                  Select timeline
                </option>
                <option className="text-[#333]" value="Rush (1-3 days)">
                  Rush (1-3 days)
                </option>
                <option className="text-[#333]" value="Standard (1 week)">
                  Standard (1 week)
                </option>
                <option className="text-[#333]" value="Flexible (2+ weeks)">
                  Flexible (2+ weeks)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Budget Range
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-black focus:border-transparent"
                {...register("budget")}
              >
                <option className="text-[#333]" value="">
                  Select budget range
                </option>
                <option className="text-[#333]" value="Under ₦50,000">
                  Under ₦50,000
                </option>
                <option className="text-[#333]" value="₦50,000 - ₦100,000">
                  ₦50,000 - ₦100,000
                </option>
                <option className="text-[#333]" value="₦100,000 - ₦500,000">
                  ₦100,000 - ₦500,000
                </option>
                <option className="text-[#333]" value="₦500,000+">
                  ₦500,000+
                </option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-black mb-2">
              Project Details *
            </label>
            <textarea
              rows={4}
              className={`w-full px-4 py-3 border text-gray-900 ${
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
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Upload Files (Optional)
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors cursor-pointer"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Drag and drop files here or click to browse
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PDF, JPG, PNG up to 10MB each
              </p>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                id="file-upload"
                onChange={handleFileSelect}
              />
            </div>

            {/* Display selected files */}
            {selectedFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-medium text-gray-900">
                  Selected Files:
                </h4>
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
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
  );
}
