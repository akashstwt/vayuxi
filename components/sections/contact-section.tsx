"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-3 md:px-8 bg-gradient-to-b from-[#0c1825] to-[#0a1421]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch with Us
              </h2>
              <p className="text-gray-300 mb-4">
                Have questions about VAYUXI ERP?
              </p>
              <p className="text-gray-300 mb-4">
                We’re here to help whether you’re curious, confused, or ready to get started.
              </p>
              <p className="text-gray-300 mb-8">
                Fill out the form or reach out directly our team will get back to you shortly.
              </p>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <h3 className="text-white font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:admin@vayuxierp.com" className="text-gray-200 underline hover:text-white">admin@vayuxierp.com</a>
                    <a href="mailto:vayuxierp@gmail.com" className="text-gray-200 underline hover:text-white">vayuxierp@gmail.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Call Us</h3>
                    <a href="tel:+918320554983" className="text-gray-200 underline hover:text-white">+91-8320554983</a>
                  </div>
                </div>

                {/* Location */}
                <div
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Visit Us</h3>
                    <a
                    href="https://www.google.com/maps?q=21.4506166,72.9481452"
                    target="_blank"
                    rel="noopener noreferrer"  
                    className="text-gray-200 underline hover:text-white" 
                    >
                      183, REEVA RESIDENCY FLYOVER BRIDGE,<br />
                      KOSAMBA DIST- SURAT 394120 Gujarat, India
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-[#0f1d2a] p-6 rounded-xl border border-blue-900/30">
                <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#0c1825] border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#0c1825] border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#0c1825] border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#0c1825] border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center"
                    >
                      Send Message <Send size={18} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}