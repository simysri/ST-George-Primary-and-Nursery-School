import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Facebook, Instagram} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* School Info */}
          <div className="space-y-3 sm:space-y-4">
            <img
              src="https://stgeorgenpschool.com/images/logo.png"
              alt="ST George Nursery and Primary School"
              className="h-12 sm:h-16 w-auto"
            />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              ST George Nursery and Primary School: Nurturing young minds, fostering growth, and shaping futures with quality education and a supportive community.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919444575796" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  +91 94445 75796
                </a>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Mon – Sat: 8 am – 5 pm<br />
                  Sunday: <span className="text-red-400">CLOSED</span>
                </span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Menu</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">About Us</Link></li>
              <li><Link to="/kindergarten" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Kindergarten</Link></li>
              <li><Link to="/primary" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Primary</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Courses</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Secondary</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/vision-mission" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Vision and Mission</Link></li>
              <li><Link to="/extracurricular" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Extracurricular</Link></li>
              <li><Link to="/healthandsports" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Health and Sports</Link></li>
              <li><Link to="/mandatory-disclosure" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Mandatory Disclosure</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Social Links</h3>
            <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <a
                href="https://www.facebook.com/STGeorgeNurseryandPrimarySchoolppy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors min-h-[44px] min-w-[44px]"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/STGeorgeNurseryandPrimarySchoolppy/?igsh=M3AybWtvNWVhNjc3#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors min-h-[44px] min-w-[44px]"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.74556357584!2d80.2417829!3d13.0715064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52667066480149%3A0xe4a1c865ef963fcb!2sST.GEORGE%20NURSERY%20%26%20PRIMARY%20SCHOOL!5e0!3m2!1sen!2sin!4v1689334531151!5m2!1sen!2sin"
                width="100%"
                height="200"
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
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Copyright © 2025 ST George Nursery and Primary School | powered by Archer Websol
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
