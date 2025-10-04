import React from 'react';
import Breadcrumb from '../components/breadcrumb';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Facilities = () => {

  return (
    <div>
      <Breadcrumb title="About Us" />
      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://img.freepik.com/premium-photo/poster-with-couple-kids-holding-hands-saying-welcome-school_810748-70.jpg?w=2000"
                alt="Canteen Facilities"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
             
            </div>
            <div>
             <span className="text-blue-600 font-semibold text-lg">Welcome To Our School</span>
              <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-2">St George Nursery & Primary School</h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                St. George Nursery and Primary School started in the year 1979 with a strength of 75 students and 5 teachers.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                K.V. George and George Thomas were the founder members. Students studied in this school are now holding high position in the State Government and Central Government. Many are Charter Accountant and Professors in Colleges. Some are in foreign countries. Some are working as full time Christian Missionaries and Pastors.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                The school is managed by St. George Educational and Charitable Trust, a registered body. The trust has been rendering yeoman service in the field of education and charity since 1979. The trust has also established St. George College of Education, which is approved by NCTE and affiliated to M.G. University.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">This school is recognized by the Government of Tamil Nadu. Now we have a team of good qualified and dedicated teaches bring the school in the top level in Chennai city.
                    </p>
            </div>
          </div>
        </div>
        <hr></hr>
      </section>
    
      <br></br>
      {/* Description Section */}
      
      <center>
      <div className="p-6 rounded-lg" style={{ backgroundColor: '#40098dff', width: '80%', margin: '0 auto', border: '100px solid lavender' }}>
            <span className="text-blue-900 font-semibold text-lg bg-white">Our Dynamic Changes Over 49 Years👁️‍🗨️</span>
            <h1 className="text-4xl font-bold text-white mb-6 mt-2">St George Nursery & Primary School</h1>
            <p className="text-white mb-8 leading-relaxed">
              St George is open to all students irrespective of caste and creed.
              They are accepted and cherished as they are and are helped to grow in their cultural, social and religious milieu. Our School aims at shaping Learners to Leaders, who are intellectually competent, spiritually oriented, morally upright, socially mature, emotionally balanced and noble in behavior.
            </p>
            <p className="text-white mb-8 leading-relaxed">
              K.V. George and George Thomas were the founder members. Students studied in this school are now holding high position in the State Government and Central Government. Many are Charter Accountant and Professors in Colleges. Some are in foreign countries. Some are working as full time Christian Missionaries and Pastors.
            </p>
            <p className="text-white mb-8 leading-relaxed">
              A Dynamic, Systematic, Energetic role Model for staves and students community is belonged of our Institutions and an award winner from Leadership Excellence of International Human Rights Peace Council. She has a thrust to build positive vibe, traditional values, and ready to face any circumstance in the minds of the future pillars of our Nation.
            </p>
        </div>
      </center>

      {/* Authentication Section */}
       <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <img
                src="https://static.vecteezy.com/system/resources/previews/009/639/917/original/cute-little-boy-measuring-height-of-his-growth-on-the-background-of-wall-with-giraffe-vector.jpg"
                alt="Valuable Spells"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-110 hover:-translate-y-4"
                style={{ border: '70px solid lavender' }}
              />
            </div>
            <div>
             <span className="text-white font-semibold text-lg bg-blue-900 p-2">Our Valuable Spells📚</span>
              <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-2"></h1>
              <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">
              ✅ Cheerful
              </p>
              <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">
              ✅ Honest
                </p>
                <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">
              ✅ Rational
                </p>
                <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">
               ✅ Optimistic
                </p>
                <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">
               ✅ Grateful
                </p>
                  <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">✅ Noble</p>
                  <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">✅ Eloquent</p>
                  <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">✅ Respectful</p>
                  <p className="text-white mb-8 leading-relaxed bg-blue-900 p-2">✅ Youthful</p>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      {/* Campus Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <img
                src="https://www.collidu.com/media/catalog/product/img/a/d/add18e7e8b81b16400174a165d5f7849a6d7eba5f8711303dddf82e965503f9f/school-safety-slide3.png"
                alt="Safer Campus-1"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
              <br></br>
               <img
                src="https://schoolscompass.com.ng/blog/wp-content/uploads/2021/10/safe-feature-image.jpg"
                alt="Safer Campus-2"
                className="rounded-xl shadow-lg w-full max-w-md transition-all duration-300 hover:scale-110 hover:-translate-y-4"
              />
            </div>
            <div>
             <span className="text-blue-600 font-semibold text-lg"></span>
              <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-2">Safer Campus, Safer Students</h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe education is more than academics—it’s about character, compassion, and courage. With a dynamic curriculum, value-based teaching, and a safe, green campus, we empower students to become intellectually competent, morally upright, socially responsible, and emotionally resilient.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
               At St. George Nursery and Primary School, safety isn’t just a protocol—it’s a promise. We believe that a secure, nurturing environment is the foundation for confident learning and personal growth. Our campus is designed to be a sanctuary where students feel protected, respected, and empowered.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
               We believe that when students feel safe, they thrive—not just academically, but socially and emotionally. A safer campus builds stronger students, and stronger students build a better future.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed"> 
                    Teachers and support staff are trained in child protection, emergency response, and emotional well-being.
                  </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-[#0a2a6f] rounded-lg relative overflow-hidden mb-5 mx-[5px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 lg:mb-0">
              <div className="bg-white/10 p-4 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-white border-r border-blue-500 pr-6">
                <p className="text-lg font-semibold">Call For Admission 24-25</p>
                <a href="tel:+919363093634" className="text-3xl font-bold hover:text-blue-300 transition-colors">
                  +91 93630 93634
                </a>
              </div>
              <div className="text-white pl-6">
                <h3 className="text-2xl font-bold">We will contact you soon</h3>
              </div>
            </div>
            <Link
              to="/contact"
              className="flex items-center bg-blue-700 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              CONTACT US
              <svg
                className="ml-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
<br></br>

export default Facilities;
