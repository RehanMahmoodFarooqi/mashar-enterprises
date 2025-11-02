'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <main>
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Contact us today to discuss your logistics needs and get a competitive quote.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="Tell us about your logistics needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </form>

              {/* Prominent Social Media Icons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-6">
                  {/* Facebook Icon */}
                  <Link href="https://www.facebook.com/M.AsharEnterprises" target="_blank" rel="noopener noreferrer">
                    <div className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                      <FaFacebook size={48} />
                    </div>
                  </Link>

                  {/* LinkedIn Icon */}
                  <Link href="https://www.linkedin.com/company/m-ashar-enterprises/" target="_blank" rel="noopener noreferrer">
                    <div className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                      <FaLinkedin size={48} />
                    </div>
                  </Link>

                  {/* WhatsApp Icon (Green) */}
                  <Link href="https://wa.me/923092556555" target="_blank" rel="noopener noreferrer">
                    <div className="text-green-500 hover:text-green-700 transition-colors duration-300">
                      <FaWhatsapp size={48} />
                    </div>
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">Follow us on social media for the latest updates.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">Phone</h3>
                  <p className="text-gray-700 text-lg mb-2">
                    <a href="tel:+123-456-7890" className="hover:text-orange-600 transition">+92 309 2556555 (Whatsapp)</a>
                  </p>
                  <p className="text-gray-700 text-lg">
                    <a href="tel:021-32356555" className="hover:text-orange-600 transition">021-32356555</a>
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">Email</h3>
                  <p className="text-gray-700 text-lg">
                    <a href="mailto:masharenterprises@gmail.com" className="hover:text-orange-600 transition">
                      masharenterprises@gmail.com
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">Head Office</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Plot No. 538-A, Street No. 4, Gate No. 3<br />
                    Quaid-e-Azam Truck Stand<br />
                    Hawksbay Road, Karachi<br />
                    Pakistan
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">Regional Office</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Plot No. 32, Sabzazar Scheme<br />
                    Lahore<br />
                    Pakistan
                  </p>
                </div>

                <div className="bg-orange-600 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                  <p className="text-lg mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-lg mb-2">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-lg">Sunday: Closed</p>
                  <p className="text-sm mt-4 text-orange-100">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose M.Ashar Enterprises?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">We respond to inquiries within 24 hours and provide quick quotes for your logistics needs.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reliable Service</h3>
              <p className="text-gray-600">With 35+ years of experience, we guarantee reliable and professional logistics solutions.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">We offer cost-effective solutions without compromising on quality and reliability.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
