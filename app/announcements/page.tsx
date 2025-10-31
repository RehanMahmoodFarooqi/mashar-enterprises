'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Announcement {
  id: number;
  title: string;
  content: string;
  type: string;
  image_path: string | null;
  video_path: string | null;
  created_by: number;
  created_at: string;
  updated_at: string;
}

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('/api/announcements');
        const data = await response.json();

        if (data.success) {
          setAnnouncements(data.announcements);
        } else {
          setError('Failed to load announcements');
        }
      } catch (err) {
        setError('Error fetching announcements');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement':
        return 'bg-blue-100 text-blue-800';
      case 'discount':
        return 'bg-green-100 text-green-800';
      case 'news':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main>
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Announcements</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Stay updated with the latest news, announcements, and special offers from M Ashar Enterprises.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              <p className="mt-4 text-gray-600">Loading announcements...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-800">{error}</p>
            </div>
          ) : announcements.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <p className="text-gray-600 text-lg">No announcements yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {announcements.map((announcement) => (
                <article
                  key={announcement.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                    {/* Image or Video */}
                    {(announcement.image_path || announcement.video_path) && (
                      <div className="md:col-span-1">
                        {announcement.image_path && (
                          <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200">
                            <img
                              src={announcement.image_path}
                              alt={announcement.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        {announcement.video_path && !announcement.image_path && (
                          <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                            <video
                              src={announcement.video_path}
                              controls
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className={announcement.image_path || announcement.video_path ? 'md:col-span-2' : 'md:col-span-3'}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${getTypeColor(announcement.type)}`}>
                          {announcement.type}
                        </span>
                        <span className="text-gray-500 text-sm">{formatDate(announcement.created_at)}</span>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{announcement.title}</h2>

                      <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-4">
                        {announcement.content}
                      </p>

                      <div className="flex items-center gap-4">
                        <button className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
                          Read More
                        </button>
                        {announcement.video_path && announcement.image_path && (
                          <a
                            href={announcement.video_path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-orange-600 font-semibold hover:text-orange-700 transition"
                          >
                            Watch Video →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for more information about our services and special offers.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

