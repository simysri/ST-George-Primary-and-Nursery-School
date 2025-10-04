import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'Vision And Mission', path: '/vision-mission' },
        { name: 'Teachers', path: '/teachers' },
        { name: 'Transport', path: '/transport' },
        { name: 'Facilities', path: '/facilities' },
      ]
    },
    {
      name: 'Academics',
      path: '#',
      dropdown: [
        {
          name: 'Classes',
          submenu: [
            { name: 'Kindergarten', path: '/kindergarten' },
            { name: 'Primary', path: '/primary' },
            { name: 'Secondary', path: '/secondary' },
          ]
        },
        { name: 'Extracurricular', path: '/extracurricular' },
      ]
    },
    { name: 'Courses', path: '/courses' },
    { name: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
    {
      name: 'Gallery',
      path: '/gallery',
      dropdown: [
        { name: 'Photo Gallery', path: '/gallery' },
        { name: 'Video Gallery', path: '/video-gallery' },
      ]
    },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-blue-900 text-white py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center sm:text-left">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">No: 16/31, School Road, Chetpet, Chennai – 600 031</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="mailto:Stgeorgenpschool2017@gmail.com" className="hover:text-blue-200 transition-colors text-xs sm:text-sm break-all sm:break-normal">
                  Stgeorgenpschool2017@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 mt-2 lg:mt-0">
              <div className="flex space-x-2 sm:space-x-3">
                <a href="https://www.facebook.com/STGeorgeNurseryandPrimarySchoolppy/" className="hover:text-blue-200 transition-colors p-1">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a href="https://www.instagram.com/STGeorgeNurseryandPrimarySchoolppy/?igsh=M3AybWtvNWVhNjc3#" className="hover:text-blue-200 transition-colors p-1">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-red-700 px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors min-h-[32px] flex items-center"
              >
                Admission Open 24-25
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4 gap-4 sm:gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 bg-white rounded">
              <img
                src="https://stgeorgenpschool.com/images/logo.png"
                alt="ST George Nursery and Primary School"
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      className="flex items-center space-x-1 cursor-pointer py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span className={`font-medium transition-colors text-sm xl:text-base ${
                        isActive(item.path) ? 'text-blue-600' : 'text-blue-900 hover:text-blue-600'
                      }`}>
                        {item.name}
                      </span>
                      <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 text-blue-900" />

                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <div key={dropdownItem.name}>
                              {dropdownItem.submenu ? (
                                <div className="relative group/submenu">
                                  <div className="px-4 py-3 text-blue-900 hover:bg-blue-50 hover:text-blue-600 cursor-pointer flex items-center justify-between text-sm">
                                    {dropdownItem.name}
                                    <ChevronDown className="w-3 h-3 rotate-[-90deg] text-blue-900" />
                                  </div>
                                  <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all">
                                    {dropdownItem.submenu.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.path}
                                        className="block px-4 py-3 text-blue-900 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  to={dropdownItem.path}
                                  className="block px-4 py-3 text-blue-900 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                                >
                                  {dropdownItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors text-sm xl:text-base ${
                        isActive(item.path) ? 'text-blue-600' : 'text-blue-900 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>


            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-4" >
              <div className="hidden lg:flex items-center space-x-3 px-3 sm:px-4 py-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <div>
                  <div className="text-xs text-gray-600">Contact Us</div>
                  <a href="tel:+919444575796" className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700">
                   +919444575796
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="space-y-3 sm:space-y-4">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 text-sm sm:text-base min-h-[44px]"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <div key={dropdownItem.name}>
                                {dropdownItem.submenu ? (
                                  <div>
                                    <div className="py-2 text-gray-600 font-medium text-sm">{dropdownItem.name}</div>
                                    <div className="ml-4 space-y-2">
                                      {dropdownItem.submenu.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          to={subItem.path}
                                          className="block py-1 text-gray-600 hover:text-blue-600 text-sm"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <Link
                                    to={dropdownItem.path}
                                    className="block py-2 text-gray-600 hover:text-blue-600 text-sm min-h-[44px] flex items-center"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block py-2 transition-colors text-sm sm:text-base min-h-[44px] flex items-center ${
                          isActive(item.path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                {/* Mobile Contact Info */}
                <div className="lg:hidden pt-4 border-t border-gray-200 mt-4">
                  <div className="flex items-center space-x-3 bg-red-50 px-4 py-3 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">Contact Us</div>
                      <a href="tel:+919444575796" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                        +91 94445 75796
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
