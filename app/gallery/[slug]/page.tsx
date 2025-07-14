"use client";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";

// Mock data for different service galleries
const galleryData = {
  "book-printing": {
    title: "Book Work Printing Gallery",
    description:
      "Explore our collection of professionally printed books, from novels to educational materials, showcasing our expertise in binding and print quality.",
    projects: [
      {
        id: 1,
        title: "Corporate Annual Report",
        description:
          "High-quality perfect binding with glossy cover finish for a leading financial institution.",
        image: "/images/projects/book1.jpg",
        client: "Financial Corp",
        date: "December 2024",
        details: "200 pages, perfect binding, full-color printing",
      },
      {
        id: 2,
        title: "Children's Storybook Collection",
        description:
          "Vibrant illustrations with durable saddle stitching perfect for young readers.",
        image: "/images/projects/book2.jpg",
        client: "ABC Publishing",
        date: "November 2024",
        details: "32 pages, saddle stitching, premium paper",
      },
      {
        id: 3,
        title: "Academic Textbook Series",
        description:
          "Professional hardcover binding for educational materials with enhanced durability.",
        image: "/images/projects/book3.jpg",
        client: "Education Plus",
        date: "October 2024",
        details: "450 pages, hardcover, case binding",
      },
      {
        id: 4,
        title: "Recipe Book Collection",
        description:
          "Spiral-bound cookbooks with water-resistant coating for kitchen use.",
        image: "/images/projects/book4.jpg",
        client: "Gourmet Kitchen",
        date: "September 2024",
        details: "120 pages, spiral binding, laminated cover",
      },
      {
        id: 5,
        title: "Photography Portfolio",
        description:
          "Premium photo book with high-resolution printing and matte finish.",
        image: "/images/projects/book5.jpg",
        client: "Studio Vision",
        date: "August 2024",
        details: "80 pages, lay-flat binding, premium photo paper",
      },
      {
        id: 6,
        title: "Training Manual Series",
        description:
          "Professional training materials with tabbed sections and wire binding.",
        image: "/images/projects/book6.jpg",
        client: "TechTrain Inc",
        date: "July 2024",
        details: "300 pages, wire binding, indexed tabs",
      },
    ],
  },
  lamination: {
    title: "Lamination Services Gallery",
    description:
      "Discover our premium lamination work that protects and enhances your printed materials with professional finishes.",
    projects: [
      {
        id: 1,
        title: "Restaurant Menu Collection",
        description:
          "Gloss lamination for durability and easy cleaning in high-traffic dining environments.",
        image: "/images/projects/lamination1.jpg",
        client: "Bistro Delight",
        date: "December 2024",
        details: "A4 size, gloss lamination, 250gsm paper",
      },
      {
        id: 2,
        title: "Corporate ID Cards",
        description:
          "Professional matte lamination for employee identification cards with security features.",
        image: "/images/projects/lamination2.jpg",
        client: "Corporate Solutions",
        date: "November 2024",
        details: "CR80 size, matte lamination, UV printing",
      },
      {
        id: 3,
        title: "Educational Posters",
        description:
          "Protective lamination for classroom posters ensuring long-lasting educational materials.",
        image: "/images/projects/lamination3.jpg",
        client: "Greenfield School",
        date: "October 2024",
        details: "A1 size, satin lamination, full-color printing",
      },
      {
        id: 4,
        title: "Product Price Lists",
        description:
          "Durable lamination for retail price displays with easy-to-clean surfaces.",
        image: "/images/projects/lamination4.jpg",
        client: "Retail Pro",
        date: "September 2024",
        details: "A3 size, gloss lamination, waterproof",
      },
      {
        id: 5,
        title: "Safety Instruction Cards",
        description:
          "Industrial-grade lamination for workplace safety materials requiring frequent handling.",
        image: "/images/projects/lamination5.jpg",
        client: "Safety First Ltd",
        date: "August 2024",
        details: "A5 size, heavy-duty lamination, tear-resistant",
      },
      {
        id: 6,
        title: "Event Signage",
        description:
          "Weather-resistant lamination for outdoor event displays and directional signage.",
        image: "/images/projects/lamination6.jpg",
        client: "Event Masters",
        date: "July 2024",
        details: "Various sizes, outdoor lamination, UV resistant",
      },
    ],
  },
  "paper-bags": {
    title: "Paper Bags Gallery",
    description:
      "Browse our eco-friendly paper bag designs, from retail shopping bags to promotional packaging solutions.",
    projects: [
      {
        id: 1,
        title: "Luxury Retail Bags",
        description:
          "Premium kraft paper bags with custom branding and reinforced handles for upscale retail.",
        image: "/images/projects/bags1.jpg",
        client: "Luxury Boutique",
        date: "December 2024",
        details: "320gsm kraft, rope handles, gold foil logo",
      },
      {
        id: 2,
        title: "Event Gift Bags",
        description:
          "Colorful paper bags with custom printing for corporate events and celebrations.",
        image: "/images/projects/bags2.jpg",
        client: "Event Planners Co",
        date: "November 2024",
        details: "250gsm colored paper, ribbon handles, full-color print",
      },
      {
        id: 3,
        title: "Restaurant Takeaway Bags",
        description:
          "Grease-resistant paper bags designed for food service with strong construction.",
        image: "/images/projects/bags3.jpg",
        client: "Food Hub",
        date: "October 2024",
        details: "Food-grade paper, grease-resistant coating, flat handles",
      },
      {
        id: 4,
        title: "Promotional Shopping Bags",
        description:
          "Eco-friendly shopping bags with vibrant brand colors and sustainable messaging.",
        image: "/images/projects/bags4.jpg",
        client: "Green Market",
        date: "September 2024",
        details: "Recycled paper, water-based inks, biodegradable",
      },
      {
        id: 5,
        title: "Pharmacy Bags",
        description:
          "Professional white paper bags with privacy features for healthcare retail.",
        image: "/images/projects/bags5.jpg",
        client: "Health Plus Pharmacy",
        date: "August 2024",
        details: "White kraft, privacy fold, medical-grade printing",
      },
      {
        id: 6,
        title: "Artisan Craft Bags",
        description:
          "Handcrafted-style paper bags with natural textures for artisan product packaging.",
        image: "/images/projects/bags6.jpg",
        client: "Artisan Collective",
        date: "July 2024",
        details: "Textured paper, natural colors, cotton cord handles",
      },
    ],
  },
  "packaging-materials": {
    title: "Packaging Materials Gallery",
    description:
      "Explore our comprehensive packaging solutions including boxes, labels, and custom designs for product protection and branding.",
    projects: [
      {
        id: 1,
        title: "E-commerce Shipping Boxes",
        description:
          "Custom-branded corrugated boxes designed for safe product shipping with unboxing experience.",
        image: "/images/projects/packaging1.jpg",
        client: "Online Store Pro",
        date: "December 2024",
        details: "Corrugated cardboard, custom size, 2-color printing",
      },
      {
        id: 2,
        title: "Product Labels Collection",
        description:
          "Waterproof product labels with vibrant colors and durable adhesive for various industries.",
        image: "/images/projects/packaging2.jpg",
        client: "Manufacturing Plus",
        date: "November 2024",
        details: "Vinyl material, waterproof, permanent adhesive",
      },
      {
        id: 3,
        title: "Gift Box Series",
        description:
          "Premium gift boxes with magnetic closures and custom interior designs for luxury products.",
        image: "/images/projects/packaging3.jpg",
        client: "Premium Gifts",
        date: "October 2024",
        details: "Rigid cardboard, magnetic closure, silk lining",
      },
      {
        id: 4,
        title: "Food Packaging Solutions",
        description:
          "Food-safe packaging materials including containers, labels, and sealing solutions.",
        image: "/images/projects/packaging4.jpg",
        client: "Gourmet Foods",
        date: "September 2024",
        details: "Food-grade materials, tamper-evident seals, FDA compliant",
      },
      {
        id: 5,
        title: "Industrial Packaging",
        description:
          "Heavy-duty packaging solutions for industrial equipment with protective inserts.",
        image: "/images/projects/packaging5.jpg",
        client: "Industrial Solutions",
        date: "August 2024",
        details: "Double-wall corrugated, foam inserts, reinforced corners",
      },
      {
        id: 6,
        title: "Cosmetic Packaging",
        description:
          "Elegant packaging for beauty products with sophisticated finishing and branding.",
        image: "/images/projects/packaging6.jpg",
        client: "Beauty Brand",
        date: "July 2024",
        details: "Coated cardboard, spot UV, embossed logo",
      },
    ],
  },
};

export default function GalleryPage() {
  const params = useParams();
  const router = useRouter();
  const { openQuoteModal } = useQuoteModal();

  const gallerySlug = params.slug as string;
  const gallery = galleryData[gallerySlug as keyof typeof galleryData];

  if (!gallery) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Gallery Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The gallery you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </button>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {gallery.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {gallery.description}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.date}</span>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>Client: {project.client}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Details:</span>{" "}
                    {project.details}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={openQuoteModal}
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                >
                  Request Similar Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Inspired by Our Work?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s create something amazing for your business. Our team is
              ready to bring your vision to life with the same quality and
              attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openQuoteModal}
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
              >
                Get Your Quote
              </button>
              <button
                onClick={() => router.push("/#services")}
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
