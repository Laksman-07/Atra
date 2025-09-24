'use client';

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const locations = [
    {
      city: 'Chennai',
      address: [
        'Thiruvanmiyur Beach, 111, Bay View Dr St, Valmiki Nagar,',
        'Kaveri Nagar, Kottivakkam, Chennai, Tamil Nadu 600041'
      ]
    },
    {
      city: 'Bangalore',
      address: [
        'Building no.653, 2nd floor, 2nd Cross Rd, AK Colony,',
        'Domlur I Stage, 1st Stage Domlur, Bengaluru, Karnataka 560071'
      ]
    },
    {
      city: 'Coimbatore',
      address: [
        '952, Sundaram Brothers Layout, Ramasamy Nagar,',
        'Puliakulam, Coimbatore, Tamil Nadu 641045'
      ]
    }
  ];

  return (
    <footer className="bg-black text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Top Row: Locations + Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          
          {/* Locations */}
          {locations.map((loc) => (
            <div key={loc.city}>
              <h4 className="text-xl font-semibold text-yellow-400 mb-4">{loc.city}</h4>
              <div className="text-gray-300 text-sm space-y-1">
                {loc.address.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {['Home', 'About Us', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row: Contact + Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-yellow-400" />
              <p>+91 9600411808 (Mon - Sat: 6 AM - 9 PM)</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <p>For businesses: inquiries.atra@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 ml-7">
                <p>For more info: admin@atra.life</p>
              </div>
            </div>
          {/* Social Media */} <div className="flex space-x-4"> <a href="#" className="bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500 transition-colors"> <Facebook className="h-5 w-5" /> </a> <a href="#" className="bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500 transition-colors"> <Twitter className="h-5 w-5" /> </a> <a href="#" className="bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500 transition-colors"> <Instagram className="h-5 w-5" /> </a> <a href="#" className="bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500 transition-colors"> <Linkedin className="h-5 w-5" /> </a> </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest sports science insights and training tips
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
              
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Atra Sports Science. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
