import Link from 'next/link';

export default function Fleet() {
  const capabilities = [
    { title: '100+ Company-Owned Vehicles', description: 'Including trailers, flatbeds, and container trucks for diverse cargo needs.' },
    { title: 'GPS-Enabled Real-Time Tracking', description: 'Monitor your shipment in real-time with complete delivery visibility.' },
    { title: 'Regular Maintenance Protocols', description: 'Each vehicle is inspected before every trip, ensuring zero downtime.' },
    { title: 'Dedicated Dispatch Control Room', description: 'Professional team managing nationwide deliveries 24/7.' },
    { title: 'Qualified & Trained Drivers', description: 'Experienced drivers trained for long-haul routes and secure handling.' },
    { title: 'Safety Standards', description: 'Strict adherence to safety protocols and best practices.' },
  ];

  return (
    <main>
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Fleet & Capabilities</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Modern, well-maintained vehicles supporting reliable nationwide logistics.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern Fleet for Every Need</h2>
              <p className="text-gray-700 text-lg mb-4">Our strength lies in our modern and well-maintained fleet, supported by experienced drivers and a professional operations team. Each vehicle is inspected before every trip, ensuring zero downtime and maximum reliability.</p>
              <p className="text-gray-700 text-lg">With GPS-enabled tracking for real-time monitoring, dedicated dispatch control managing nationwide deliveries, and qualified drivers trained for excellence, we guarantee the highest standards of service.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/service-nationwide.jpg"
                alt="M.Ashar Enterprises Fleet"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border-l-4 border-orange-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-gray-600">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fleet Specifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Vehicle Types</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Heavy-duty Trucks</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Flatbed Trailers</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Container Trucks</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Refrigerated Vehicles</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Tanker Trucks</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Pickup Vehicles</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Technology & Safety</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> GPS Real-Time Tracking</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Digital Dispatch System</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Vehicle Monitoring</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Safety Equipment</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Regular Maintenance</li>
                <li className="flex items-center gap-2"><span className="text-orange-600">✓</span> Insurance Coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us to discuss your transportation needs and get a competitive quote.</p>
          <Link href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">Get a Quote</Link>
        </div>
      </section>
    </main>
  );
}
