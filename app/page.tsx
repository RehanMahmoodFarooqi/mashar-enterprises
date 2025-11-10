'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Nationwide Goods Transportation',
      description: 'End-to-end transport services across Pakistan with timely and secure deliveries.',
      icon: '🚚',
      image: '/images/service-nationwide.jpg',
    },
    {
      id: 2,
      title: 'Industrial Cargo Movement',
      description: 'Specialized handling of raw materials, finished goods, and heavy machinery.',
      icon: '⚙️',
      image: '/images/service-industrial.jpg',
    },
    {
      id: 3,
      title: 'Containerized Transportation',
      description: 'Secure movement of containerized cargo with minimal handling risk.',
      icon: '📦',
      image: '/images/service-container.jpg',
    },
    {
      id: 4,
      title: 'Bulk & Agricultural Goods',
      description: 'Efficient logistics for fertilizers, grains, chemicals, and construction materials.',
      icon: '🌾',
      image: '/images/service-bulk.jpg',
    },
    {
      id: 5,
      title: 'Automobile & Specialized Transport',
      description: 'Dedicated carriers for vehicles, oversized cargo, and specialized shipments.',
      icon: '🚗',
      image: '/images/service-automobile.jpg',
    },
    {
      id: 6,
      title: 'Customized Logistics Solutions',
      description: 'Tailored solutions designed to meet unique business requirements.',
      icon: '🎯',
      image: '/images/service-custom.jpeg',
    },
  ];

  const stats = [
    { label: 'Years of Experience', value: '35+' },
    { label: 'Company-Owned Vehicles', value: '100+' },
    { label: 'Cities Covered', value: '50+' },
    { label: 'Satisfied Clients', value: '1000+' },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg_home.jpg"
            alt="Transportation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Delivering Trust <br /> Across Pakistan
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Professional nationwide logistics and transportation services with reliability, commitment, and professionalism since 1990.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="bg-orange-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-900 transition inline-block border-2 border-white"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-orange-600">M.Ashar Enterprises</span>
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                For over three decades, M.Ashar Enterprises has been a trusted name in Pakistan's logistics sector, recognized for integrity, reliability, and excellence in goods transportation.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Established in 1990 and headquartered in Karachi, we have grown from a modest operation into a dependable logistics partner for leading manufacturing and import-export businesses across Pakistan.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                With a modern fleet of 100+ vehicles and a team dedicated to timely and secure deliveries, we ensure that every shipment reaches its destination safely and efficiently.
              </p>
              <Link
                href="/about"
                className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p>To deliver safe, timely, and cost-efficient logistics services through a dedicated team, modern fleet, and technology-driven operations.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                  <p>To be recognized as Pakistan's most reliable and trusted logistics partner, delivering efficient, innovative, and value-driven transport solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics and transportation solutions designed for industrial, manufacturing, and import-export clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Highlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Fleet & Capabilities</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>100+ Company-Owned Vehicles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>GPS-Enabled Real-Time Tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Regular Maintenance Protocols</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Dedicated Dispatch Control Room</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Qualified & Trained Drivers</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Modern Fleet for Every Need</h3>
              <p className="text-gray-700 text-lg mb-4">
                Our strength lies in our modern and well-maintained fleet, supported by experienced drivers and a professional operations team. Each vehicle is inspected before every trip, ensuring zero downtime and maximum reliability for our clients.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                With GPS-enabled tracking for real-time monitoring and delivery visibility, dedicated dispatch control managing nationwide deliveries, and qualified drivers trained for long-haul routes and secure handling, we guarantee the highest standards of service.
              </p>
              <Link
                href="/fleet"
                className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
              >
                View Fleet Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your logistics needs and discover how we can help your business grow.
          </p>
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

