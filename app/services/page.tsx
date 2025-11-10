'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'nationwide',
      title: 'Nationwide Goods Transportation',
      description: 'End-to-end transport services from Karachi to all major industrial zones across Pakistan, ensuring timely and secure deliveries through our own fleet.',
      features: ['Full Coverage Across Pakistan', 'Timely Deliveries', 'Secure Handling', 'Competitive Rates'],
      image: '/images/service-nationwide.jpg',
    },
    {
      id: 'cargo',
      title: 'Industrial Cargo Movement',
      description: 'Specialized handling and movement of raw materials, finished goods, and heavy machinery executed with strict safety and operational protocols.',
      features: ['Raw Materials Handling', 'Finished Goods Transport', 'Heavy Machinery Movement', 'Safety Protocols'],
      image: '/images/service-industrial.jpg',
    },
    {
      id: 'containerized',
      title: 'Containerized Transportation',
      description: 'Secure and organized movement of containerized cargo, minimizing handling risk and ensuring damage-free transport over long distances.',
      features: ['Container Management', 'Risk Minimization', 'Damage-Free Transport', 'Long-Distance Coverage'],
      image: '/images/service-container.jpg',
    },
    {
      id: 'bulk',
      title: 'Bulk & Agricultural Goods Transport',
      description: 'Efficient bulk cargo logistics for fertilizers, grains, chemicals, and construction materials, supporting Pakistan\'s industrial and agricultural economy.',
      features: ['Fertilizer Transport', 'Grain Logistics', 'Chemical Handling', 'Construction Materials'],
      image: '/images/service-bulk.jpg',
    },
    {
      id: 'automobile',
      title: 'Automobile & Specialized Transport',
      description: 'Dedicated carriers and specialized equipment for vehicles, oversized cargo, and unique shipments requiring precision and compliance.',
      features: ['Vehicle Transport', 'Oversized Cargo', 'Specialized Equipment', 'Precision Handling'],
      image: '/images/service-automobile.jpg',
    },
    {
      id: 'customized',
      title: 'Customized Logistics Solutions',
      description: 'Tailored logistics solutions designed to meet unique business requirements, combining flexibility, reliability, and transparent communication.',
      features: ['Custom Solutions', 'Flexible Services', 'Reliable Execution', 'Transparent Communication'],
      image: '/images/service-custom.jpeg',
    },
    {
      id: 'reefer',
      title: 'Containerized & Reefer Transport',
      description: 'Secure and temperature-controlled movement of containerized cargo ensuring product integrity. Specialized reefer containers for perishable goods, pharmaceuticals, and temperature-sensitive products.',
      features: ['Temperature Control', 'Product Integrity', 'Perishable Goods', 'Real-Time Monitoring'],
      image: '/images/service-reefer.jpg',
    },
  ];

  return (
    <main>
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Comprehensive logistics and transportation solutions for every business need.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-orange-600 text-2xl">✓</span>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition">Get Quote</Link>
                </div>
                <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-96 object-cover hover:scale-110 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us to discuss your specific logistics requirements and get a personalized quote.</p>
          <Link href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}

