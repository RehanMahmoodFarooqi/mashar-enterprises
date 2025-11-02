import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="M.Ashar Enterprises Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <div className="font-bold text-orange-500">M.ASHAR</div>
                <div className="text-xs">ENTERPRISES</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Delivering Trust Across Pakistan with reliable logistics and transportation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-orange-500 transition">
                  Fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/services#nationwide" className="hover:text-orange-500 transition">
                  Nationwide Transport
                </Link>
              </li>
              <li>
                <Link href="/services#cargo" className="hover:text-orange-500 transition">
                  Industrial Cargo
                </Link>
              </li>
              <li>
                <Link href="/services#containerized" className="hover:text-orange-500 transition">
                  Containerized Transport
                </Link>
              </li>
              <li>
                <Link href="/services#bulk" className="hover:text-orange-500 transition">
                  Bulk & Agricultural
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">📞</span>
                <div>

                  <p>021-32356555</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">📧</span>
                <a href="mailto:masharenterprises@gmail.com" className="hover:text-orange-500 transition">
                  masharenterprises@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">🌐</span>
                <a href="https://www.masharenterprises.com" className="hover:text-orange-500 transition">
                  www.masharenterprises.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} M.Ashar Enterprises. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-orange-500 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-orange-500 transition">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-gray-700">
            <a
              href="https://www.facebook.com/M.AsharEnterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition"
              title="Follow us on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/m-ashar-enterprises/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition"
              title="Connect with us on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.737h3.554v1.378c.43-.664 1.195-1.61 2.91-1.61 2.126 0 3.719 1.395 3.719 4.391v5.578zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.952-1.71 1.18 0 1.913.754 1.938 1.71 0 .951-.758 1.71-1.975 1.71zm1.946 11.597H3.392V9.715h3.891v10.737zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://wa.me/923092556555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition"
              title="Chat with us on WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.226l-.341.194-3.52.361.367-3.431-.235-.374a9.86 9.86 0 011.51-4.529A9.868 9.868 0 0112.05.9c5.45 0 9.885 4.434 9.885 9.885 0 2.605-.994 5.055-2.81 6.948l-.262.213-3.265-.335.221 3.588.339.305a9.87 9.87 0 01-5.108 1.463c-5.45 0-9.885-4.434-9.885-9.885a9.865 9.865 0 011.466-5.18l.205-.304 3.181-.327-.074-3.585z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

