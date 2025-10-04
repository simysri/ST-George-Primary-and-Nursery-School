import React, { useEffect, useRef, useState } from 'react';
import Breadcrumb from '../components/breadcrumb';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  // Remove IntersectionObserver and visibility state to always show content

  return (
    <div>
      <Breadcrumb title="Courses" />
      {/* Courses Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Our Educational Programs</span>
            <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Comprehensive Courses for Every Stage</h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At St. George Nursery and Primary School, we offer a structured curriculum designed to nurture young minds from the earliest stages of learning through primary education. Our programs focus on holistic development, combining academic excellence with character building.
            </p>
          </div>
        </div>
      </section>

      {/* Kindergarten Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={contentRef}
              className={contentVisible ? 'animate-slide-right' : 'opacity-0'}
            >
              <img
                src="https://img.freepik.com/premium-photo/poster-with-couple-kids-holding-hands-saying-welcome-school_810748-70.jpg?w=2000"
                alt="Kindergarten"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
            </div>
            <div
              ref={imageRef}
              className={imageVisible ? 'animate-slide-left' : 'opacity-0'}
            >
              <span className="text-blue-600 font-semibold text-lg">Kindergarten Program</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Nurturing Foundation Skills</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our Kindergarten program focuses on building essential skills through play-based learning. Children aged 3-5 years engage in activities that develop social skills, creativity, and early literacy.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Age Group: 3-5 years</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Play-based learning approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Social and emotional development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Creative arts and music</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={contentRef}
              className={contentVisible ? 'animate-slide-right' : 'opacity-0'}
            >
              <span className="text-blue-600 font-semibold text-lg">Primary Education</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Building Strong Academic Foundations</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The Primary program (Grades 1-5) provides a comprehensive curriculum that integrates core subjects with creative activities, fostering critical thinking and collaborative learning.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Grades: 1-5 (Ages 6-10)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Core subjects: English, Mathematics, Science, Social Studies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Co-curricular activities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Character education and values</span>
                </li>
              </ul>
            </div>
            <div
              ref={imageRef}
              className={imageVisible ? 'animate-slide-left' : 'opacity-0'}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/639/917/original/cute-little-boy-measuring-height-of-his-growth-on-the-background-of-wall-with-giraffe-vector.jpg"
                alt="Primary Education"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={contentRef}
              className={contentVisible ? 'animate-slide-right' : 'opacity-0'}
            >
              <img
                src="https://www.collidu.com/media/catalog/product/img/a/d/add18e7e8b81b16400174a165d5f7849a6d7eba5f8711303dddf82e965503f9f/school-safety-slide3.png"
                alt="Secondary Education"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
            </div>
            <div
              ref={imageRef}
              className={imageVisible ? 'animate-slide-left' : 'opacity-0'}
            >
              <span className="text-blue-600 font-semibold text-lg">Secondary Education</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Preparing for Future Success</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our Secondary program offers rigorous academics, skill-building, and character development to equip students for higher education and beyond. We prepare them to become responsible global citizens.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Grades: 6-8 (Ages 11-13)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Advanced curriculum with specialization options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Leadership and life skills development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Career guidance and counseling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Curriculum Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a balanced curriculum that combines academic rigor with practical learning experiences, ensuring our students are well-prepared for the challenges of the modern world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600">Strong foundation in core subjects with emphasis on conceptual understanding and critical thinking.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Character Development</h3>
              <p className="text-gray-600">Value-based education that instills moral values, discipline, and social responsibility.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Holistic Growth</h3>
              <p className="text-gray-600">Comprehensive development including physical, emotional, and creative aspects of learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-thistle">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <div className="bg-white/20 p-4 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-white">
                <p className="text-lg">Call For More Info</p>
                <a href="tel:+919444575796" className="text-2xl font-bold hover:text-blue-200 transition-colors">
                  +91 94445 75796
                </a>
              </div>
              <div className="hidden lg:block">
                <h3 className="text-2xl font-bold text-white">Schedule a free student admission consultation now.</h3>
              </div>
            </div>
           <Link
                         to="/contact"
                         className="bg-blue-600 text-white hover:bg-gray-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors"
                       >
                         Contact Us
                       </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
