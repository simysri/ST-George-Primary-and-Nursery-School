import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Facebook, Instagram} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 1000 }).map((_, i) => {
          const size = Math.random() * 20 + 5;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <img
              src="https://stgeorgenpschool.com/images/logo.png"
              alt="ST George Nursery and Primary School"
              className="h-16 w-auto"
            />
            <p className="text-gray-300 leading-relaxed">
              ST George Nursery and Primary School: Nurturing young minds, fostering growth, and shaping futures with quality education and a supportive community.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919444575796" className="text-gray-300 hover:text-white transition-colors">
                  +91 94445 75796
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  Mon – Sat: 8 am – 5 pm<br />
                  Sunday: <span className="text-red-400">CLOSED</span>
                </span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-6"><u>Menu</u></h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>

              <li><Link to="/mandatory-disclosure" className="text-gray-300 hover:text-white transition-colors">Mandatory Disclosure</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              <u>Quick Links</u></h3>
            <ul className="space-y-3">
              <li><Link to="/vision-mission" className="text-gray-300 hover:text-white transition-colors">Vision and Mission</Link></li>
              <li><Link to="/extracurricular" className="text-gray-300 hover:text-white transition-colors">Extracurricular</Link></li>
              <li><Link to="/transport" className="text-gray-300 hover:text-white transition-colors">Transport</Link></li>
              {/* Removed Founder link as per request */}
             
             
              <li><Link to="/kindergarten" className="text-gray-300 hover:text-white transition-colors">Kindergarten</Link></li>
              <li><Link to="/primary" className="text-gray-300 hover:text-white transition-colors">Primary</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Secondary</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6"><u>Social Links</u></h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/STGeorgeNurseryandPrimarySchoolppy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/STGeorgeNurseryandPrimarySchoolppy/?igsh=M3AybWtvNWVhNjc3#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.74556357584!2d80.2417829!3d13.0715064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52667066480149%3A0xe4a1c865ef963fcb!2sST.GEORGE%20NURSERY%20%26%20PRIMARY%20SCHOOL!5e0!3m2!1sen!2sin!4v1689334531151!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
                title="ST George Nursery and Primary School Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 ST George Nursery and Primary School | powered by Archer Websol
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
