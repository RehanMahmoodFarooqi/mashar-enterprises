'use client';

import Link from 'next/link';

export default function Team() {
  const team = [
    {
      name: 'Khalid Nawaz',
      title: 'Chief Executive Officer (CEO)',
      bio: 'Visionary leader with 25+ years of experience in logistics and transportation. Khalid founded M Ashar Enterprises with a commitment to excellence and reliability.',
      image: '/images/team/khalid-nawaz.png',
      isCEO: true,
    },
    {
      name: 'Muhammad Hassan',
      title: 'Operations Director',
      bio: 'Expert in fleet management and nationwide logistics coordination. Muhammad oversees all operational aspects ensuring timely and safe deliveries.',
      image: null,
    },
    {
      name: 'Fatima Ahmed',
      title: 'Client Relations Manager',
      bio: 'Dedicated to customer satisfaction and long-term partnerships. Fatima ensures every client receives personalized attention and support.',
      image: null,
    },
    {
      name: 'Ali Raza',
      title: 'Fleet Manager',
      bio: 'Responsible for vehicle maintenance, safety standards, and fleet optimization. Ali ensures all vehicles meet the highest performance and safety standards.',
      image: null,
    },
    {
      name: 'Saira Khan',
      title: 'Finance Manager',
      bio: 'Manages financial operations and ensures transparent billing. Saira works to provide competitive pricing without compromising service quality.',
      image: null,
    },
    {
      name: 'Hassan Ahmed',
      title: 'Dispatch Coordinator',
      bio: 'Coordinates daily operations and manages the dispatch control room. Hassan ensures efficient routing and real-time tracking for all shipments.',
      image: null,
    },
  ];

  return (
    <main>
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Message from CEO</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Khalid Nawaz (The Chief Executive Officer of M.Ashar Enterprises)</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Management</h2>
            <p className="text-xl text-gray-600">Our talented team brings decades of combined experience in logistics and transportation.</p>
          </div>

          {/* CEO Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 md:p-12">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">{team[0].name}</h3>
                <p className="text-2xl text-orange-600 font-semibold mb-6">{team[0].title}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{team[0].bio}</p>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  {team[0].image && (
                    <img
                      src={team[0].image}
                      alt={team[0].name}
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">CEO Message</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
              Since our establishment in 1990, M. Ashar Enterprises has been driven by a single
              purpose — to redefine logistics excellence in Pakistan.
              What began as a modest operation has evolved into a national logistics network
              powered by technology, teamwork, and a service philosophy centered on
              reliability, transparency, and continuous improvement.
              Every milestone we achieve reflects our commitment to client success. We believe
              logistics is not just about moving cargo — it’s about delivering trust, efficiency,
              and value to every business we serve.
              As we look ahead, we remain focused on innovation, digital integration, and
              strategic partnerships that empower industries and accelerate business growth
              across Pakistan.
              Khalid Nawaz
              Chief Executive Officer
              M. Ashar Enterprises
              <br /><br />
              <span className="font-semibold text-orange-600">– Khalid Nawaz, Chief Executive Officer</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Team Matters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Experience</h3>
              <p className="text-gray-700">Our team members bring decades of combined experience in logistics, transportation, and customer service. This expertise ensures your shipments are handled with the utmost professionalism.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Dedication</h3>
              <p className="text-gray-700">Every team member is committed to excellence and customer satisfaction. We work around the clock to ensure your logistics needs are met efficiently and reliably.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Innovation</h3>
              <p className="text-gray-700">We continuously invest in technology and training to improve our services. Our team stays updated with industry best practices and emerging logistics solutions.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Customer Focus</h3>
              <p className="text-gray-700">Our team is trained to understand your unique needs and provide personalized solutions. We view every client as a long-term partner in business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Work With Our Experienced Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us to discuss your logistics needs and experience the difference our team can make.</p>
          <Link href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}

