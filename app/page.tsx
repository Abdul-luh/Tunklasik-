import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tunklasik Print</title>
        <meta name="description" content="Professional Printing Services" />
      </Head>
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />{" "}
          {/* Add your logo */}
          <h1 className="font-bold text-xl">Tunklasik print</h1>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Request a Quote
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-green-50 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Professional Printing Services
        </h2>
        <p className="mb-4">You Can Trust</p>
        <p className="mb-4">
          Specializing in book work, lamination, paper bags, packaging
          materials, and more..
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded">
          View Our Services
        </button>
      </section>

      {/* Our Service Overview */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-gray-50">
        {/* Service Items */}
        {["Book Work", "Lamination", "Paper Bags", "Packaging"].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow text-center">
            <div className="mb-2">
              {/* Placeholder icons or images */}
              <div className="bg-gray-200 h-16 w-16 mx-auto rounded-full"></div>
            </div>
            <h3 className="font-semibold">{item}</h3>
          </div>
        ))}
      </section>

      {/* Get Quote / Contact Section */}
      <section className="p-8 bg-white grid md:grid-cols-2 gap-4">
        {/* Contact Info */}
        <div className="border p-4 rounded shadow">
          <h3 className="font-bold mb-2">Get In Touch</h3>
          <p>Phone: 08023450305</p>
          <p>WhatsApp: +234 802 345 0305</p>
          <p>Email: tunklasik2133@gmail.com</p>
        </div>

        {/* Send Message Form */}
        <div className="border p-4 rounded shadow">
          <h3 className="font-bold mb-2">Send Us a Message</h3>
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-2 rounded"
            />
            <select className="w-full border p-2 rounded">
              <option>Select a service</option>
            </select>
            <textarea
              placeholder="Project Details"
              className="w-full border p-2 rounded"
            ></textarea>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 Tunklasik Print. All rights reserved.</p>
      </footer>
    </>
  );
}
