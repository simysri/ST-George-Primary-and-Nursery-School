import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Phone, Award } from 'lucide-react';
import priceImg from '../assests/price distribution.jpg';
import principleImg from '../assests/Principle images.jpg';
import boardImg from '../assests/board image.jpg';
import kvGeorgeImg from '../assests/kv george image.jpg';
import teachingImg from '../assests/teaching images.webp';
import goldLeafImg from '../assests/gold-leaf-line-free-png.webp';

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="w-16 h-16 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
      title: "Kindergarten",
      description: "The school places significant importance on the early foundational years.",
      details: "Our kindergarten program focuses on developing social skills, emotional intelligence, and basic cognitive abilities through play-based learning and interactive activities."
    },
    {
      icon: <Users className="w-16 h-16 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
      title: "Primary",
      description: "Our Primary school helps kids learn basic academic skills from the beginning.",
      details: "The primary curriculum emphasizes fundamental subjects like mathematics, language arts, science, and social studies while fostering creativity and critical thinking."
    },
    {
      icon: <Award className="w-16 h-16 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
      title: "Secondary",
      description: "In ST George Nursery and Primary School, every child is at the heart of the curriculum's design and implementation.",
      details: "Our secondary program prepares students for higher education with advanced subjects, leadership development, and comprehensive academic preparation."
    }
  ];

  const highlights = [
    "CBSE Affiliation",
    "Holistic Development Approach",
    "Passionate Educators",
    "Inclusive Environment"
  ];

  const testimonials = [
    {
      name: "Mr. R. Murugan",
      designation: "M.A, B.Ed",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "This school is the best school for all the children, in terms of sports and education. In short, it's the school where my daughter carries a smile on her face and that shows it's a right choice for her to be in ST George Nursery and Primary School."
    },
    {
      name: "Mrs. M. Yazhini",
      designation: "M.Com (CA), M.phil.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "I truly appreciate your patience to take care of my child at school. I can see the improvement in my son; I can't thank you enough for your contribution."
    },
    {
      name: "Mrs. C. Narmatha",
      designation: "B.Sc (CDF)",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "My kids really enjoy going school every day and I can see how every teacher, staff uses their heart to teach my kid. I highly recommend this school."
    },
     {
      name: "Mr. R. Mageshan",
      designation: "B.A English, B.Ed",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "I'm really excited to share that my kids are truly enjoyed in this school and their communication skills are nice when we compared it to before."
    },
  ];

  // State for current testimonial index
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // State for animated shapes
  const [shapePosition, setShapePosition] = useState(0);

  // State for rapid moving pattern
  const [rapidPatternPosition, setRapidPatternPosition] = useState(0);

  // State for feature popup
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // State for current slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // State for contact message visibility
  const [showContactMessage, setShowContactMessage] = useState(false);

  // State for decorative image animation
  const [decorativeImagePosition, setDecorativeImagePosition] = useState(0);

  // Slider images array
  const sliderImages = [
    {
      src: teachingImg,
      alt: "Teaching Image"
    },
    {
      src: boardImg,
      alt: "Board Image"
    },
    {
      src: kvGeorgeImg,
      alt: "KV George Image"
    }
  ];

  // Auto-cycle testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-animate shapes every 2 seconds (left to right, top to bottom)
  useEffect(() => {
    const interval = setInterval(() => {
      setShapePosition((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Rapid animation for pattern image every 500ms - moving left and right above the image
  useEffect(() => {
    const interval = setInterval(() => {
      setRapidPatternPosition((prev) => (prev + 1) % 6);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Auto-cycle slider images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        (prevIndex + 1) % sliderImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Animate decorative image every 2 seconds - moving top to bottom, right to left
  useEffect(() => {
    const interval = setInterval(() => {
      setDecorativeImagePosition((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Function to go to previous testimonial
  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to go to next testimonial
  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <div>
      {/* Hero Video Section - Enhanced Responsive Slider */}
      <section className="relative h-[calc(100vh-80px)] min-h-[600px] sm:min-h-[calc(100vh-80px)] overflow-hidden" style={{height: 'calc(100vh - 80px)'}}>
        <div className="hero-slider absolute inset-0 w-full h-full">
          <div className="slider-container relative w-full h-full overflow-hidden">
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className={`slide absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
                }`}
                id={`slide${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 sm:bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in leading-tight">
              Welcome to ST George Nursery and Primary School
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed px-2">
              A school is a place where dreams are nurtured and futures are built. We are Transforming Education, Enriching Lives!!
              Education is the key that opens the doors to a world of endless possibilities.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-thistle hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-[44px] min-w-[100px] sm:min-w-[120px] justify-center touch-manipulation"
            >
              Learn More
              <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-thistle relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-red-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 relative z-10"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>

                {/* Popup */}
                {hoveredFeature === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-xl shadow-2xl p-6 w-80 z-50 border border-gray-200 animate-fade-in">
                    <div className="flex items-center mb-3">
                      {feature.icon}
                      <h4 className="text-lg font-semibold text-gray-800 ml-3">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.details}</p>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <p className="text-blue-600 text-sm font-medium">Hover to learn more about our {feature.title.toLowerCase()} program</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" >
              {/* Rapidly moving pattern image above the main image */}
              <div
                className={`absolute w-20 h-20 transition-all duration-500 ease-in-out z-5 ${
                  rapidPatternPosition === 0 ? 'left-1/4 -top-16' :
                  rapidPatternPosition === 1 ? 'left-1/2 -top-16' :
                  rapidPatternPosition === 2 ? 'left-3/4 -top-16' :
                  rapidPatternPosition === 3 ? 'left-3/4 -top-12' :
                  rapidPatternPosition === 4 ? 'left-1/2 -top-12' :
                  'left-1/4 -top-12'
                }`}
              >
                <img
                  src={goldLeafImg}
                  alt="Rapid Pattern"
                  className="w-full h-full object-contain opacity-100"
                />
              </div>

              <img
                src={priceImg}
                alt="School Building"
                className="rounded-xl shadow-lg bg-blue hover:bg-gray-500 transition-all duration-300 hover:-translate-y-4"
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-xl hover:bg-blue-500 transition-colors duration-300">
                <h3 className="text-3xl font-bold">49 <span className="text-lg">Years</span></h3>
                <p className="text-blue-100">We nurturing minds, shaping futures.</p>
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-semibold text-lg">Transforming Education, Enriching Lives</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Welcome to ST George Nursery and Primary School</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join us at ST George Nursery and Primary School, where quality education meets holistic development. Prepare for a dynamic future with us.
              </p>
              <ul className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mb-8">
                Experience excellence, grow holistically, with devoted educators. ST George Nursery and Primary School awaits your kids dynamic future.
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={principleImg}
                  alt="Chairman"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">KV George</h4>
                  <p className="text-gray-600">Chairman</p>
                </div>
                <div className="ml-auto">
                  <div className="text-2xl font-bold text-blue-600 italic transform -rotate-12">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-thistle relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Decorative shapes positioned between content */}
              <div
                className={`absolute w-32 h-32 transition-all duration-2000 ease-in-out z-10 ${
                  shapePosition === 0 ? 'top-16 left-8' :
                  shapePosition === 1 ? 'top-16 right-8' :
                  shapePosition === 2 ? 'bottom-16 right-8' :
                  shapePosition === 3 ? 'bottom-16 left-8' :
                  shapePosition === 4 ? 'top-1/2 left-4 transform -translate-y-1/2' :
                  'top-1/2 right-4 transform -translate-y-1/2'
                }`}
              >
                <img
                  src="https://springdalecbse.in/wp-content/uploads/2023/08/overview_img_shape.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className={`absolute w-24 h-24 transition-all duration-2000 ease-in-out z-10 ${
                  shapePosition === 0 ? 'bottom-16 right-8' :
                  shapePosition === 1 ? 'bottom-16 left-8' :
                  shapePosition === 2 ? 'top-16 left-8' :
                  shapePosition === 3 ? 'top-16 right-8' :
                  shapePosition === 4 ? 'top-1/2 right-4 transform -translate-y-1/2' :
                  'top-1/2 left-4 transform -translate-y-1/2'
                }`}
              >
                <img
                  src="https://springdalecbse.in/wp-content/uploads/2023/08/h5_testimonial_shape03.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className={`absolute w-28 h-28 transition-all duration-2000 ease-in-out z-0 ${
                  shapePosition === 0 ? 'top-1/2 right-8 transform -translate-y-1/2' :
                  shapePosition === 1 ? 'bottom-16 left-8' :
                  shapePosition === 2 ? 'top-16 right-8' :
                  shapePosition === 3 ? 'bottom-16 right-8' :
                  shapePosition === 4 ? 'top-16 left-8' :
                  'bottom-16 left-8'
                }`}
              >
                <img
                  src="https://springdalecbse.in/wp-content/uploads/2023/08/h2_about_shape02.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>



              <span className="text-blue-600 font-semibold text-lg">Our Facilities</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Explore Our Exceptional Facilities</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience the education with our global quality standards. Explore our modern library, equipped with international resources. Enjoy hassle-free transport to and from school campus. Dive into fun and fitness with our swimming pool.Schools should have a variety of facilities to create a conducive learning environment, including:
Classrooms: Essential for teaching and learning activities.

Libraries: Provide resources for research and study.

Laboratories: For science experiments and practical learning.

Sports Facilities: Promote physical education and extracurricular activities.

              </p>
            </div>

            <div className="relative">
              <img
                src="https://educationsnapshots.com/wp-content/uploads/sites/4/2020/05/elementary-school-classroom-design.jpg"
                alt="School Facilities"
                className="rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-thistle relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://www.promoteyourschool.co.uk/wp-content/uploads/2019/02/reigate-st-marys-canteen-1.jpg"
                alt="School Facilities"
                className="rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
            </div>

            <div className="relative">
              <span className="text-blue-600 font-semibold text-lg">Our Canteen Facilities</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Explore Our healthy and better Canteen Facilities</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">A previous experience with a canteen run by a professional chef showcased the benefits of a diverse rotating menu of freshly cooked meals. However, there have been complaints about overpriced meals with poor service. Modern canteens are evolving, offering global cuisine options like Somerset Beef Stew or Gluten-Free Hodmedod's Bean Stew, catering to varied tastes. Additionally, a healthy food menu planning guideline emphasizes nutrition and balance to meet children's daily needs.Experience the education with our global quality standards. Explore our modern library, equipped with international resources. Enjoy hassle-free transport to and from school campus. Dive into fun and fitness with our swimming pool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-thistle relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <span className="text-blue-600 font-semibold text-lg">Our Good Environment</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Explore Our healthy and better Environment</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Research has consistently shown that a clean environment directly influences student performance, motivation, and attendance, while also affecting the morale and effectiveness of school staff. Cleanliness in educational institutions serves multiple purposes.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_architecturaldigest.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1511988618/architecturaldigest_Most-Beautiful-Public-High-Schools-in-America.jpg?mbid=social_retweet"
                alt="School Facilities"
                className="rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-grey">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-8 mb-6 lg:mb-0">
              <div className="bg-white/20 p-4 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-black space-y-2 bg-red-100 p-4 rounded-lg">
                <p className="text-lg">Call For Admission 24-25</p>
                <a href="tel:+91 94445 75796" className="text-2xl font-bold hover:text-blue-200 transition-colors">
                  +91 94445 75796
                </a>
              </div>
              <div className="hidden lg:block relative">
                <div className="space-y-2 bg-blue-100 p-4 rounded-lg mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black">We will contact you soon</h3>
                      <p>Join us our free demo classes from online,</p>
                      <p> And let your kids future brightens in</p>
                    </div>
                    <button
                      onClick={() => setShowContactMessage(!showContactMessage)}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300 ml-4 flex-shrink-0"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {showContactMessage && (
                  <div className="absolute top-full left-0 mt-2 bg-green-100 border border-green-300 p-4 rounded-lg shadow-lg z-10 animate-fade-in">
                    <p className="text-green-800 font-semibold">Thanks for contacting us, we'll reach you soon</p>
                  </div>
                )}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-lg">Our Testimonials</span>
            <h2 className="text-4xl font-bold text-black mb-6 mt-2">What Parents Say About ST George Nursery and Primary School</h2>
          </div>
          <div className="flex justify-center relative">
            {/* Left Arrow Button */}
            <button
              type="button"
              className="slick-prev slick-arrow absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-blue-600"
              style={{left: '-60px'}}
              onClick={goToPreviousTestimonial}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              type="button"
              className="slick-next slick-arrow absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-blue-600"
              style={{right: '-60px'}}
              onClick={goToNextTestimonial}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="max-w-2xl w-full">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic text-center">"{testimonials[currentTestimonialIndex].text}"</p>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 text-lg">{testimonials[currentTestimonialIndex].name}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[currentTestimonialIndex].designation}</p>
                  </div>
                  <img
                    src={testimonials[currentTestimonialIndex].image}
                    alt={testimonials[currentTestimonialIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              {/* Testimonial indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonialIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
