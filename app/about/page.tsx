import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About M.Ashar Enterprises</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Over three decades of trust, reliability, and excellence in Pakistan's logistics sector.
            M. Ashar Enterprises — Trusted
            logistics partner for Pakistan’s
            leading industries, providing
            nationwide transportation solutions
            with guaranteed safety, timeliness,
            and transparency.
          </p>
        </div>
      </section>

      {/* Our Story + Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg mb-4">
                For over three decades, M.Ashar Enterprises has been a trusted name in Pakistan's logistics sector,
                recognized for integrity, reliability, and excellence.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Established in 1990 and headquartered in Karachi, we have grown from a modest operation into a dependable
                logistics partner for leading businesses across Pakistan.
              </p>
              <p className="text-gray-700 text-lg">
                With a modern fleet of 100+ vehicles and a dedicated team, we ensure every shipment reaches its destination
                safely and efficiently.
              </p>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-8 text-white space-y-8 shadow-lg">
              <div>
                <h3 className="text-3xl font-bold mb-2">35+</h3>
                <p className="text-orange-100">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">100+</h3>
                <p className="text-orange-100">Company-Owned Vehicles</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-orange-100">Cities Across Pakistan</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">1000+</h3>
                <p className="text-orange-100">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Two Static Images */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/about6.jpg"
              alt="Logistics operations"
              className="w-full rounded-lg shadow-md object-cover h-64 hover:scale-[1.02] transition-transform"
            />
            <img
              src="/images/about2.png"
              alt="Fleet vehicles"
              className="w-full rounded-lg shadow-md object-cover h-64 hover:scale-[1.02] transition-transform"
            />
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center">
            <img
              src="/images/team/khalid-nawaz.png"
              alt="CEO Khalid Nawaz"
              className="w-60 h-60 rounded-full object-cover border-4 border-orange-600 shadow-lg"
            />
          </div>
          <p className="mt-4 font-semibold text-orange-600 text-lg">Khalid Nawaz</p>
          <p className="text-gray-700 text-sm">Chief Executive Officer (CEO)</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To deliver safe, timely, and cost-efficient logistics services through a dedicated team, modern fleet,
                and technology-driven operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-orange-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be recognized as Pakistan's most reliable and trusted logistics partner, delivering efficient,
                innovative, and value-driven transport solutions.
              </p>
            </div>
          </div>

          {/* Two smaller images under mission/vision */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/about4.png"
              alt="Logistics warehouse"
              className="w-full rounded-lg shadow-md object-cover h-64 hover:scale-[1.02] transition-transform"
            />
            <img
              src="/images/service-nationwide.jpg"
              alt="Trucks in operation"
              className="w-full rounded-lg shadow-md object-cover h-64 hover:scale-[1.02] transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Our Registration */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Registration</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At M.Ashar Enterprises, we take pride in being a fully compliant and transparent business entity — registered
            and operating in complete alignment with Pakistan’s taxation and regulatory framework.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our commitment to integrity extends beyond service delivery. We ensure that every aspect of our operations,
            from corporate registration to tax compliance, reflects our dedication to ethical business practices and
            national accountability.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We are a registered taxpayer with the Federal Board of Revenue (FBR) and maintain all necessary legal and
            operational certifications required for nationwide logistics and transportation services.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 shadow-md text-left mt-8">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Company Details:</h3>
            <ul className="space-y-2 text-gray-800 text-lg">
              <li><span className="font-semibold">Registered Name:</span> M. Ashar Enterprises</li>
              <li><span className="font-semibold">National Tax Number (NTN):</span> 5101968-3</li>
              <li><span className="font-semibold">Registration Type:</span> Sole Proprietorship</li>
              <li><span className="font-semibold">FBR Status:</span> Active Taxpayer (ATL Listed)</li>
            </ul>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            By fulfilling all statutory obligations and contributing our fair share of taxes, we ensure that every
            partnership with M. Ashar Enterprises is built on credibility, compliance, and confidence.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
