'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

export default function AdminDashboard() {
  const router = useRouter();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'announcement',
    image: null as File | null,
    video: null as File | null,
  });
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        setIsLoggedIn(true);
        fetchAnnouncements();
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/announcements');
      const data = await response.json();

      if (data.success) {
        setAnnouncements(data.announcements);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('auth_token', data.token);
        setIsLoggedIn(true);
        setShowLoginForm(false);
        setLoginData({ username: '', password: '' });
        setMessage({ type: 'success', text: 'Logged in successfully!' });
        fetchAnnouncements();
      } else {
        setMessage({ type: 'error', text: data.error || 'Login failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error logging in' });
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setIsLoggedIn(false);
    setAnnouncements([]);
  };

  const handleAddAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('auth_token');
    if (!token) {
      setMessage({ type: 'error', text: 'Not authenticated' });
      return;
    }

    const form = new FormData();
    form.append('title', formData.title);
    form.append('content', formData.content);
    form.append('type', formData.type);
    if (formData.image) form.append('image', formData.image);
    if (formData.video) form.append('video', formData.video);

    try {
      const response = await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Announcement added successfully!' });
        setFormData({ title: '', content: '', type: 'announcement', image: null, video: null });
        setShowAddForm(false);
        fetchAnnouncements();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to add announcement' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error adding announcement' });
      console.error('Error:', error);
    }
  };

  const handleDeleteAnnouncement = async (id: number) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;

    const token = localStorage.getItem('auth_token');
    if (!token) {
      setMessage({ type: 'error', text: 'Not authenticated' });
      return;
    }

    try {
      const response = await fetch(`/api/announcements/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Announcement deleted successfully!' });
        fetchAnnouncements();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to delete announcement' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting announcement' });
      console.error('Error:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admin Panel</h1>
            <p className="text-xl text-gray-100">Manage announcements and news</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-md mx-auto px-4">
            {!showLoginForm ? (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Login</h2>
                <p className="text-gray-600 mb-8">Sign in to manage announcements and news</p>
                <button
                  onClick={() => setShowLoginForm(true)}
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
                >
                  Login
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sign In</h2>

                {message && (
                  <div className={`mb-4 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {message.text}
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Username</label>
                  <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="admin"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Password</label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => setShowLoginForm(false)}
                  className="w-full mt-3 text-gray-600 hover:text-gray-900 transition"
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admin Dashboard</h1>
            <p className="text-xl text-gray-100">Manage announcements and news</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {message && (
            <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {message.text}
            </div>
          )}

          <div className="mb-8">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
            >
              {showAddForm ? 'Cancel' : '+ Add New Announcement'}
            </button>
          </div>

          {showAddForm && (
            <form onSubmit={handleAddAnnouncement} className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Create New Announcement</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    placeholder="Announcement title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  >
                    <option value="announcement">Announcement</option>
                    <option value="news">News</option>
                    <option value="discount">Discount</option>
                    <option value="ceo_message">Message from CEO</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 h-32"
                  placeholder="Announcement content"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Video</label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setFormData({ ...formData, video: e.target.files?.[0] || null })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
              >
                Create Announcement
              </button>
            </form>
          )}

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Announcements</h2>

            {announcements.length === 0 ? (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <p className="text-gray-600 text-lg">No announcements yet. Create one to get started!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{announcement.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full capitalize font-semibold">
                            {announcement.type}
                          </span>
                          <span>{formatDate(announcement.created_at)}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDeleteAnnouncement(announcement.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">{announcement.content}</p>

                    {(announcement.image_path || announcement.video_path) && (
                      <div className="flex gap-4">
                        {announcement.image_path && (
                          <a
                            href={announcement.image_path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:text-orange-700 font-semibold"
                          >
                            View Image
                          </a>
                        )}
                        {announcement.video_path && (
                          <a
                            href={announcement.video_path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:text-orange-700 font-semibold"
                          >
                            View Video
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

