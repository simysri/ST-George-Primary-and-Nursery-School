import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({
  title,
  backgroundImage = "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
}) => {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">{title}</h1>
        <nav className="flex items-center justify-center space-x-1 sm:space-x-2 text-white text-sm sm:text-base">
          <Link to="/" className="hover:text-blue-200 transition-colors min-h-[44px] flex items-center px-2 py-1">
            ST George Nursery and Primary School
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="text-blue-200 min-h-[44px] flex items-center px-2 py-1">{title}</span>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;