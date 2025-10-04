import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleMouseEnter = (menuName) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the dropdown after 1 second
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 1000);
  };

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      dropdown: [
        {
          name: 'Team',
          submenu: [
            { name: 'Staffs', path: '#' },
          ]
        },
      ]
    },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        {
          name: 'Staff',
          submenu: [
            { name: 'Teachers', path: '/teachers' },
          ]
        },
        {
          name: 'Facilities',
          submenu: [
            { name: 'Transport', path: '/transport' },
            { name: 'Courses', path: '/courses' },
          ]
        },
        {
          name: 'Vision',
          submenu: [
            { name: 'Vision And Mission', path: '/vision-mission' },
          ]
        },
      ]
    },
     { name: <div>Other<br/>Facilities</div>, path: '/facilities' },

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
        {
          name: 'Activities',
          submenu: [
            { name: 'Extracurricular', path: '/extracurricular' },
          ]
        },
      ]
    },
    { name: <div>Mandatory<br/>Disclosure</div>, path: '/mandatory-disclosure' },
    
     { name:<div> Vision And<br/> Mission</div>, path: '/vision-mission' },

     {
      name: 'Health and Sports',
      path: '#',
      dropdown: [
        {
          name: 'Activities',
          submenu: [
            { name: 'Exercise', path: '/exercise' },
            { name: 'Games', path: '/games' },
          ]
        },
        {
          name: 'Opportunities',
          submenu: [
            { name: 'Opportunities by School', path: '/sportsopportunity' },
            { name: 'Special Coaching', path: '/specialcoaching' },
          ]
        },
      ]
    },
    {
      name: 'Gallery',
      path: '/gallery',
      dropdown: [
        {
          name: 'Galleries',
          submenu: [
            { name: 'Photo Gallery', path: '/gallery' },
            { name: 'Video Gallery', path: '/video-gallery' },
          ]
        },
      ]
    },

  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <a
                  href="https://www.google.com/maps/place/ST.GEORGE+NURSERY+%26+PRIMARY+SCHOOL/@13.0715064,80.2417829,15z/data=!3m1!4b1!4m6!3m5!1s0x3a52667066480149:0xe4a1c865ef963fcb!8m2!3d13.0715064!2d80.2417829!16s%2Fg%2F11f3q6j8z8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors"
                >
                  No: 16/31, School Road, Chetpet, Chennai – 600 031
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:Stgeorgenpschool2017@gmail.com" className="hover:text-blue-200 transition-colors">
                  Stgeorgenpschool2017@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 lg:mt-0">
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/STGeorgeNurseryandPrimarySchoolppy/" className="hover:text-blue-200 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/STGeorgeNurseryandPrimarySchoolppy/?igsh=M3AybWtvNWVhNjc3#" className="hover:text-blue-200 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-red-700 px-4 py-1 rounded text-sm font-medium transition-colors"
              >
                Admission Open 24-25
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg text-white' : 'bg-blue-700 text-white pt-4 pb-2'
      }`}>
        <div className="container mx-auto px-4 ">
          {/* Logo Row */}
          <div className="flex justify-center bg-white">
            <Link to="/" className="flex items-center">
              <img
                src="https://stgeorgenpschool.com/images/logo.png"
                alt="ST George Nursery and Primary School"
                className="h-16 md:h-20 w-auto bg-white"
              />
            </Link>
          </div>

          {/* Navigation Row */}
          <div className="flex items-center py-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center gap-5">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group text-center mx-5">
                  {item.dropdown ? (
                    <div
                      className="flex items-center space-x-1 py-2"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.path !== '#' ? (
                      <Link
                        to={item.path}
                        className={`font-medium transition-colors ${
                          isActive(item.path) ? 'text-blue-200' : 'text-white hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                      ) : (
                        <span className={`font-medium transition-colors ${
                          isActive(item.path) ? 'text-blue-200' : 'text-white hover:text-blue-100'
                        }`}>
                          {item.name}
                        </span>
                      )}
                      <ChevronDown className="w-4 h-4 text-white" />

                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-blue-900 shadow-lg rounded-lg border border-white z-50 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <div key={dropdownItem.name}>
                              {dropdownItem.submenu ? (
                                <div className="relative group/submenu">
                                  <div className="px-4 py-3 text-white/60 hover:bg-blue-800 hover:text-white cursor-pointer flex items-center justify-between">
                                    {dropdownItem.name}
                                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                                  </div>
                                  <div className="absolute left-full top-0 w-48 bg-blue-900 shadow-lg rounded-lg border border-white opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all space-y-1">
                                    {dropdownItem.submenu.map((subItem) => (
                                <div className="border-b border-white last:border-0">
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block px-4 py-4 text-white hover:bg-blue-800 hover:text-white transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="border-b border-white last:border-0">
                                  <Link
                                    to={dropdownItem.path}
                                    className="block px-4 py-4 text-white hover:bg-blue-800 hover:text-white transition-colors"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors ${
                        isActive(item.path) ? 'text-blue-200' : 'text-white hover:text-blue-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4 ml-auto" >
              <div className="hidden lg:flex items-center space-x-3 bg-lavender-800 hover:bg-black px-4 py-2 rounded-lg group">
                <Phone className="w-5 h-5 text-white group-hover:text-thistle" />
                <div>
                  <div className="text-xs text-white/80 group-hover:text-thistle">Contact Us</div>
                  <a href="tel:+919444575796" className="text-sm font-semibold text-white group-hover:text-thistle">
                   +919444575796
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-900 border-t-blue-800 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <div key={item.name} className="mx-5">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full py-2 text-white/60 hover:text-white"
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
                                    <div className="py-2 text-white/60 font-medium">{dropdownItem.name}</div>
                                    <div className="ml-4 space-y-2">
                                      {dropdownItem.submenu.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          to={subItem.path}
                                          className="block py-1 text-white/60 hover:text-white"
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
                        className="block py-2 text-white hover:text-white"
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
                        className={`block py-2 transition-colors ${
                          isActive(item.path) ? 'text-blue-600' : 'text-white/60 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
