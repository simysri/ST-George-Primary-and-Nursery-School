import React, { useEffect, useRef, useState } from 'react';
import Breadcrumb from '../components/breadcrumb';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === imageRef.current) {
          if (entry.isIntersecting) {
            setImageVisible(true);
          }
        }
        if (entry.target === contentRef.current) {
          if (entry.isIntersecting) {
            setContentVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div>
      <Breadcrumb title="founder" />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={contentRef}
              className={contentVisible ? 'animate-slide-right' : 'opacity-0'}
            >
              <span className="text-blue-600 font-semibold text-lg">Our Canteen Facilities</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Explore Our Nutritious Canteen</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our canteen offers balanced, nutritious meals prepared with fresh ingredients by qualified staff. We prioritize healthy eating with diverse options to cater to dietary needs and promote well-being among students.
              </p>
            </div>
            <div
              ref={imageRef}
              className={imageVisible ? 'animate-slide-left' : 'opacity-0'}
            >
              <img
                src="https://www.promoteyourschool.co.uk/wp-content/uploads/2019/02/reigate-st-marys-canteen-1.jpg"
                alt="Canteen Facilities"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spacious Classrooms */}
      <section className="py-2 bg-thistle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://thumbs.dreamstime.com/b/spacious-cheerful-education-classroom-designed-young-learners-colorful-furniture-educational-materials-353109772.jpg"
                alt="Spacious Classrooms"
                className="rounded-xl shadow-lg w-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Spacious And Resourceful Classrooms</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our classrooms are meticulously designed to foster an optimal learning environment, providing generous space and a supportive atmosphere where students can actively participate, collaborate, and thrive academically.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Enhanced with contemporary teaching tools and materials, our classrooms empower educators to deliver dynamic and captivating lessons, nurturing the growth and success of every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Swimming Pool */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Play Area</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ST George Nursery and Primary School's supervised play area prioritizes safety with trained supervisors and age-appropriate activities for all skill levels. Our state-of-the-art facility ensures students enjoy a fun and enriching experience while fostering confidence and social skills.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With adequate fencing and signage, we prevent unauthorized access, providing parents peace of mind. Structured activities cater to different age groups, promoting skill development and social awareness. Beyond play, our facilities at ST George promote physical fitness and recreational enjoyment, aligning with our holistic approach to education.
              </p>
            </div>
            <div>
              <img
                src="/src/assests/play_area_ultra_optimized.jpg"
                alt="Play Area"
                className="rounded-xl shadow-lg w-full transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Class */}
      <section className="py-20 bg-thistle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://www.aver.com/Upload/Expert/17/Main.jpg"
                alt="Smart Class"
                className="rounded-xl shadow-lg w-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Smart Class</h2>
              <p className="text-gray-600 leading-relaxed">
                Smart class in our school incorporates advanced technology to enrich the learning experience. Through interactive whiteboards and digital displays, students access engaging content curated for their educational needs. These resources cover a wide range of subjects and topics, providing a dynamic learning environment. With interactive tools and multimedia content, students actively participate in lessons, fostering deeper understanding and retention of knowledge. Our smart class initiative aims to leverage technology to enhance teaching and learning outcomes, preparing students for success in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Other Facilities</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At ST George Nursery and Primary School, we believe in nurturing well-rounded individuals through a diverse array of extracurricular activities. From arts and crafts to music and dance, our offerings cater to varied interests and talents.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated instructors and coaches provide expert guidance, fostering skill development, discipline, and teamwork. Whether students aspire to master creative arts, explore music, or develop their artistic talents, our extracurricular programs offer engaging opportunities for personal growth and enrichment.
              </p>
            </div>
            <div>
              <img
                src="/src/assests/hope_talent_contest_optimized.jpg"
                alt="Other Facilities"
                className="rounded-xl shadow-lg w-full transition-transform duration-300 hover:scale-110"
              />
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

export default Facilities;
