"use client";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";
import QuoteModal from "@/app/component/Modal";

// Mock data for different service galleries
const galleryData = {
  "book-printing": {
    title: "Book Printing Gallery",
    description:
      "From captivating novels and insightful educational textbooks to elegant corporate lookbooks, our book printing gallery is a testament to our mastery of the craft. Explore a diverse range of projects that highlight our precision in various binding techniques, our commitment to vibrant color reproduction, and our passion for creating books that are both beautiful and durable.",
    projects: [
      {
        id: 1,
        title: "Prestige Financial Annual Report",
        description:
          "A meticulously crafted annual report featuring a lay-flat perfect binding and a scuff-resistant matte laminate cover, ensuring a premium feel and lasting durability.",
        image: "/images/projects/book1.jpg",
        client: "Prestige Financial Group",
        date: "December 2024",
        details:
          "200 pages, 150gsm silk inner, 300gsm matte laminated cover, perfect binding, spot UV on logo",
      },
      {
        id: 2,
        title: "The Magical Forest - Children's Book",
        description:
          "A beautifully illustrated children's book with vibrant, non-toxic inks and durable saddle-stitching, designed to withstand the love of little readers.",
        image: "/images/projects/book2.jpg",
        client: "Little Bee Books",
        date: "November 2024",
        details:
          "32 pages + 4-page cover, 200gsm gloss paper, saddle-stitched, rounded corners for safety",
      },
      {
        id: 3,
        title: "University Physics Textbook",
        description:
          "An essential academic textbook produced with a robust hardcover case binding, designed for heavy use and longevity in an educational environment.",
        image: "/images/projects/book3.jpg",
        client: "Academic Press Inc.",
        date: "October 2024",
        details:
          "450 pages, 80gsm offset paper, full-color, section-sewn hardcover case binding",
      },
      {
        id: 4,
        title: "Modern Italian Cuisine - Recipe Book",
        description:
          "A user-friendly spiral-bound cookbook that lays flat for easy reference in the kitchen, complete with a water-resistant gloss laminated cover.",
        image: "/images/projects/book4.jpg",
        client: "Gourmet Kitchen Publishing",
        date: "September 2024",
        details:
          "120 pages, 170gsm silk paper, plastic spiral binding, 300gsm gloss laminated cover",
      },
      {
        id: 5,
        title: "Urban Landscapes - Photography Portfolio",
        description:
          "A stunning lay-flat photography portfolio showcasing high-resolution images on premium matte photo paper, providing a seamless panoramic viewing experience.",
        image: "/images/projects/book5.jpg",
        client: "Visionary Studios",
        date: "August 2024",
        details:
          "80 pages, 250gsm premium matte photo paper, lay-flat binding, custom debossed cover",
      },
      {
        id: 6,
        title: "Corporate Onboarding Manuals",
        description:
          "Functional and easy-to-navigate training manuals with durable wire-o binding and custom-printed index tabs for quick section referencing.",
        image: "/images/projects/book6.jpg",
        client: "TechTrain Solutions",
        date: "July 2024",
        details:
          "300 pages, 100gsm uncoated paper, wire-o binding, 5-part Mylar-coated index tabs",
      },
      // {
      //   id: 7,
      //   title: "Literary Arts Journal - 'The Quill'",
      //   description:
      //     "An elegant literary journal featuring a classic design with a textured paper cover and high-quality cream paper for a comfortable reading experience.",
      //   image: "/images/projects/book7.jpg",
      //   client: "The Writer's Guild",
      //   date: "June 2024",
      //   details:
      //     "150 pages, 90gsm cream Vellum paper, perfect bound, 280gsm textured card cover",
      // },
      // {
      //   id: 8,
      //   title: "Poetry Collection: 'Echoes of the City'",
      //   description:
      //     "A self-published poetry collection with a minimalist aesthetic, printed on eco-friendly recycled paper, demonstrating our support for independent authors.",
      //   image: "/images/projects/book8.jpg",
      //   client: "Jane Doe (Indie Author)",
      //   date: "May 2024",
      //   details:
      //     "96 pages, 100% recycled 120gsm paper, softcover, matte finish",
      // },
    ],
  },
  lamination: {
    title: "Lamination & Finishing Gallery",
    description:
      "Witness the transformative power of professional finishing. Our gallery showcases how lamination can elevate printed materials, providing superior protection, enhancing color vibrancy, and adding a premium tactile quality to everything from menus and business cards to book covers and presentation folders.",
    projects: [
      {
        id: 1,
        title: "Restaurant Menu Collection",
        description:
          "Durable and vibrant restaurant menus with a high-gloss lamination, making them spill-resistant and easy to clean for a busy dining environment.",
        image: "/images/projects/lamination1.jpg",
        client: "The Grand Bistro",
        date: "December 2024",
        details:
          "A4 Trifold, 350gsm card, double-sided gloss lamination, creased",
      },
      {
        id: 2,
        title: "Executive ID Cards",
        description:
          "Sleek corporate ID cards with a non-reflective matte lamination and embedded security features for a professional and secure solution.",
        image: "/images/projects/lamination2.jpg",
        client: "Global Tech Inc.",
        date: "November 2024",
        details:
          "CR80 PVC, matte lamination, hologram overlay, QR code integration",
      },
      {
        id: 3,
        title: "Classroom Learning Posters",
        description:
          "Tear-resistant and wipeable educational posters with a protective satin lamination, ensuring they last for years in a classroom setting.",
        image: "/images/projects/lamination3.jpg",
        client: "Bright Minds Academy",
        date: "October 2024",
        details:
          "A1 size, 170gsm poster paper, satin matte lamination, UV resistant",
      },
      {
        id: 4,
        title: "Retail Price & Spec Lists",
        description:
          "Hard-wearing, waterproof price lists for a retail environment, featuring a thick gloss lamination for maximum durability and readability.",
        image: "/images/projects/lamination4.jpg",
        client: "Gadget World",
        date: "September 2024",
        details:
          "A3 size, 250gsm silk, heavy-duty gloss lamination, waterproof sealed edges",
      },
      {
        id: 5,
        title: "Workshop Safety Instructions",
        description:
          "Industrial-grade laminated safety cards designed for frequent handling in a workshop setting, resistant to grease, water, and tearing.",
        image: "/images/projects/lamination5.jpg",
        client: "Forge & Steel Co.",
        date: "August 2024",
        details:
          "A5 size, 400gsm card, encapsulated heavy-duty matte lamination",
      },
      {
        id: 6,
        title: "Outdoor Festival Signage",
        description:
          "Weather-proof and fade-resistant outdoor event signage, protected with a UV-resistant lamination to withstand the elements.",
        image: "/images/projects/lamination6.jpg",
        client: "Summer Fest Events",
        date: "July 2024",
        details:
          "Various sizes on Foamex board, outdoor-grade gloss lamination",
      },
      // {
      //   id: 7,
      //   title: "Luxury Business Cards",
      //   description:
      //     "Premium business cards featuring a velvety soft-touch (velvet) lamination and spot UV highlights, creating a memorable first impression.",
      //   image: "/images/projects/lamination7.jpg",
      //   client: "Maven Design Studio",
      //   date: "June 2024",
      //   details: "85x55mm, 450gsm card, soft-touch lamination, spot UV gloss",
      // },
      // {
      //   id: 8,
      //   title: "Presentation Folders",
      //   description:
      //     "Professionally finished A4 presentation folders with an anti-scuff matte lamination, providing a sophisticated look for corporate documents.",
      //   image: "/images/projects/lamination8.jpg",
      //   client: "Innovate Corp",
      //   date: "May 2024",
      //   details:
      //     "A4+ size, 350gsm card, matte lamination, die-cut with capacity",
      // },
    ],
  },
  "paper-bags": {
    title: "Custom Branded Paper Bags",
    description:
      "More than just a bag, it's a mobile billboard for your brand. Browse our collection of custom paper bags that blend style with functionality. From luxurious retail bags with foil stamping to eco-friendly options for green-minded brands, our gallery demonstrates our ability to create packaging that customers love to carry.",
    projects: [
      {
        id: 1,
        title: "Luxury Boutique Bags",
        description:
          "Elegant retail bags crafted from thick, high-quality art card with a matte finish, custom-dyed rope handles, and a stunning gold foil logo.",
        image: "/images/projects/bags1.jpg",
        client: "Éclat Boutique",
        date: "December 2024",
        details:
          "350gsm art card, matte lamination, gold foil, reinforced base & turnover",
      },
      {
        id: 2,
        title: "Corporate Event Gift Bags",
        description:
          "Vibrant, full-color printed gift bags for a corporate summit, featuring brand colors and elegant ribbon handles for a premium feel.",
        image: "/images/projects/bags2.jpg",
        client: "Momentum Planners",
        date: "November 2024",
        details: "250gsm coated paper, gloss finish, satin ribbon handles",
      },
      {
        id: 3,
        title: "Gourmet Takeaway Bags",
        description:
          "Sturdy, grease-resistant takeaway bags for a busy restaurant, constructed from food-grade kraft paper with strong, flat tape handles.",
        image: "/images/projects/bags3.jpg",
        client: "Urban Bites",
        date: "October 2024",
        details:
          "120gsm food-grade kraft paper, grease-resistant, block bottom",
      },
      {
        id: 4,
        title: "Eco-Friendly Promotional Bags",
        description:
          "Sustainable promotional bags made from 100% recycled paper and printed with water-based inks, perfectly aligning with a green brand's message.",
        image: "/images/projects/bags4.jpg",
        client: "The Organic Market",
        date: "September 2024",
        details:
          "150gsm recycled kraft, water-based inks, twisted paper handles",
      },
      {
        id: 5,
        title: "Pharmacy & Healthcare Bags",
        description:
          "Discreet and professional white pharmacy bags with a top fold for patient privacy, printed with clear, compliant branding.",
        image: "/images/projects/bags5.jpg",
        client: "Well-being Pharmacy",
        date: "August 2024",
        details: "100gsm white kraft, privacy fold-over top, flat handles",
      },
      {
        id: 6,
        title: "Artisan Market Craft Bags",
        description:
          "Charming, natural-feel paper bags with a textured finish and rustic cotton cord handles, designed to complement handmade artisan products.",
        image: "/images/projects/bags6.jpg",
        client: "The Crafter's Collective",
        date: "July 2024",
        details: "170gsm textured paper, cotton handles, unbleached stock",
      },
      // {
      //   id: 7,
      //   title: "Boutique Wine & Bottle Bags",
      //   description:
      //     "Tall, reinforced bottle bags with a custom fit, designed to safely carry wine bottles while showcasing the brand with elegant side-gusset printing.",
      //   image: "/images/projects/bags7.jpg",
      //   client: "Vintage Vineyards",
      //   date: "June 2024",
      //   details: "210gsm card, reinforced handles and base, custom dimensions",
      // },
      // {
      //   id: 8,
      //   title: "Exhibition & Trade Show Bags",
      //   description:
      //     "Large-format bags designed to hold brochures and promotional materials at a trade show, featuring a bold design for maximum brand visibility.",
      //   image: "/images/projects/bags8.jpg",
      //   client: "Future Tech Expo",
      //   date: "May 2024",
      //   details:
      //     "A3+ size, 200gsm gloss paper, long rope handles for shoulder carrying",
      // },
    ],
  },
  "packaging-materials": {
    title: "Custom Packaging Solutions Gallery",
    description:
      "First impressions are everything. Our packaging gallery reveals how thoughtful design and quality construction can create unforgettable unboxing experiences and protect products in transit. Explore examples of our custom boxes, branded labels, bespoke inserts, and innovative solutions for a wide range of industries.",
    projects: [
      {
        id: 1,
        title: "E-commerce Mailer Boxes",
        description:
          "Durable, custom-sized corrugated mailer boxes designed for a secure fit, featuring an easy-open tear strip and internal printing for a premium unboxing experience.",
        image: "/images/projects/packaging1.jpg",
        client: "Shopify Stars Inc.",
        date: "December 2024",
        details:
          "E-flute corrugated board, custom die-cut, 2-color flexo print",
      },
      {
        id: 2,
        title: "Waterproof Product Labels",
        description:
          "High-tack, waterproof vinyl labels for a beverage company, printed with vibrant, fade-resistant inks to withstand refrigeration and moisture.",
        image: "/images/projects/packaging2.jpg",
        client: "AquaPure Drinks",
        date: "November 2024",
        details:
          "White vinyl stock, permanent adhesive, waterproof, full-color digital print",
      },
      {
        id: 3,
        title: "Luxury Gift Box with Magnetic Closure",
        description:
          "Exquisite rigid gift boxes for a high-end chocolatier, featuring a smooth matte finish, magnetic snap-shut closure, and a custom-fitted silk-lined interior.",
        image: "/images/projects/packaging3.jpg",
        client: "Le Chocolatier",
        date: "October 2024",
        details:
          "1200gsm rigid board, matte lamination, magnetic closure, foil debossing",
      },
      {
        id: 4,
        title: "Food-Safe Container Sleeves",
        description:
          "Professionally printed and food-safe cardboard sleeves for takeaway food containers, providing essential branding and nutritional information.",
        image: "/images/projects/packaging4.jpg",
        client: "Fresh & Fast",
        date: "September 2024",
        details: "300gsm food-grade board, FDA-compliant inks, custom die-cut",
      },
      {
        id: 5,
        title: "Heavy-Duty Industrial Parts Boxes",
        description:
          "Robust, double-walled corrugated boxes with custom foam inserts, engineered to protect heavy and sensitive industrial components during shipping.",
        image: "/images/projects/packaging5.jpg",
        client: "Machina Parts Ltd.",
        date: "August 2024",
        details:
          "Double-wall BC flute board, custom CNC-cut foam inserts, reinforced",
      },
      {
        id: 6,
        title: "Elegant Cosmetics Packaging",
        description:
          "Sophisticated packaging for a luxury skincare line, utilizing soft-touch coated card, an embossed logo, and spot UV varnish to highlight key design elements.",
        image: "/images/projects/packaging6.jpg",
        client: "Aura Beauty",
        date: "July 2024",
        details:
          "350gsm C1S coated board, soft-touch finish, embossing, spot UV",
      },
      // {
      //   id: 7,
      //   title: "Subscription Box Suite",
      //   description:
      //     "A complete monthly subscription box experience, including a custom-printed mailer box, branded tissue paper, and informational product cards.",
      //   image: "/images/projects/packaging7.jpg",
      //   client: "Curated Crate Co.",
      //   date: "June 2024",
      //   details: "Mailer box, custom printed tissue paper, A6 info cards",
      // },
      // {
      //   id: 8,
      //   title: "Retail Product Hang Tags",
      //   description:
      //     "Custom-shaped hang tags for a clothing line, printed on thick, uncoated stock with a drilled hole and supplied with natural twine.",
      //   image: "/images/projects/packaging8.jpg",
      //   client: "Urban Threads Apparel",
      //   date: "May 2024",
      //   details:
      //     "400gsm uncoated card, custom die-cut shape, drilled, full-color",
      // },
    ],
  },
  "custom-printing": {
    title: "Custom & Bespoke Printing Gallery",
    description:
      "Your vision, printed. This gallery highlights our versatility in handling unique and bespoke printing projects. From large-format banners and custom stationery to intricate die-cut flyers and personalized event invitations, we have the technology and expertise to bring any creative idea to life.",
    projects: [
      {
        id: 1,
        title: "Wedding Invitation Suite",
        description:
          "An elegant wedding invitation suite featuring gold foil on heavy cotton paper, complete with matching RSVP cards and custom-printed envelopes.",
        image: "/images/projects/custom1.jpg",
        client: "Private Client",
        date: "December 2024",
        details:
          "350gsm cotton paper, gold foil, letterpress, matching envelopes",
      },
      {
        id: 2,
        title: "Large Format Event Banner",
        description:
          "A vibrant, large-format vinyl banner for a product launch event, printed with weather-resistant UV inks and finished with grommets for easy installation.",
        image: "/images/projects/custom2.jpg",
        client: "TechLaunch Expo",
        date: "November 2024",
        details:
          "5m x 2m, heavy-duty vinyl, UV-cured inks, hemmed with eyelets",
      },
      {
        id: 3,
        title: "Die-Cut Marketing Flyers",
        description:
          "Creative, custom-shaped marketing flyers for a new cafe, die-cut in the shape of a coffee cup to grab attention and create a lasting impression.",
        image: "/images/projects/custom3.jpg",
        client: "The Daily Grind Cafe",
        date: "October 2024",
        details: "A5 size, 300gsm silk, custom die-cut, double-sided print",
      },
      {
        id: 4,
        title: "Branded Office Stationery Set",
        description:
          "A complete set of branded office stationery including letterheads, compliment slips, and notepads, all printed on premium, sustainably sourced paper.",
        image: "/images/projects/custom4.jpg",
        client: "Apex Legal",
        date: "September 2024",
        details: "120gsm FSC-certified paper, offset printing, matching set",
      },
      {
        id: 5,
        title: "Custom Wall Decals for Office",
        description:
          "Large, removable vinyl wall decals for a corporate office space, featuring the company's mission statement and branding elements.",
        image: "/images/projects/custom5.jpg",
        client: "Innovate Hub",
        date: "August 2024",
        details: "Matte removable vinyl, contour cut, easy-apply adhesive",
      },
      {
        id: 6,
        title: "Numbered & Perforated Event Tickets",
        description:
          "Secure event tickets for a music festival, featuring sequential numbering, a perforated stub for tear-off, and a holographic security foil.",
        image: "/images/projects/custom6.jpg",
        client: "SoundWave Festival",
        date: "July 2024",
        details: "DL size, 250gsm card, perforation, numbering, security foil",
      },
      {
        id: 7,
        title: "Saddle-Stitched Product Catalogs",
        description:
          "A glossy, full-color product catalog for a furniture retailer, professionally saddle-stitched for a sleek and durable finish.",
        image: "/images/projects/custom7.jpg",
        client: "Modern Living",
        date: "June 2024",
        details: "48 pages, A4, 150gsm gloss paper, saddle-stitched",
      },
      {
        id: 8,
        title: "Personalized Desk Calendars",
        description:
          "Custom-designed A5 desk calendars for corporate gifting, spiral-bound with a sturdy stand and featuring unique company photos for each month.",
        image: "/images/projects/custom8.jpg",
        client: "Synergy Corp",
        date: "May 2024",
        details:
          "A5 size, 200gsm silk paper, wire-o binding, 500gsm board stand",
      },
    ],
  },
};

export default function GalleryPage() {
  const params = useParams();
  const router = useRouter();
  const { openQuoteModal } = useQuoteModal();

  const gallerySlug = params.slug as string;
  const gallery = galleryData[gallerySlug as keyof typeof galleryData] as
    | (typeof galleryData)[keyof typeof galleryData]
    | undefined;

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
      <QuoteModal />
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
