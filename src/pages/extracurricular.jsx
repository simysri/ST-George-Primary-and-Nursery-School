import React from 'react';
import Breadcrumb from '../components/breadcrumb';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Extracurricular = () => {
  const activities = [
    {
      title: "Arts and Crafts",
      description: "ST George Nursery and Primary School offers arts and crafts classes where students can explore their creativity through various mediums. Students learn painting, drawing, and craft-making techniques that enhance their artistic abilities and self-expression.",
      image: "https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      imageClass: "max-w-2xl"
    },
    {
      title: "Music",
      description: "At ST George Nursery and Primary School, music classes offer students a wonderful opportunity to explore rhythm, melody, and musical expression. With expert instructors guiding each lesson, students learn various instruments and develop their musical talents.",
      image: "https://thumbs.dreamstime.com/b/girl-plays-piano-according-to-notes-music-school-girl-plays-piano-according-to-notes-music-255206624.jpg"
    },
    {
      title: "Dance",
      description: "ST George Nursery and Primary School's dance program empowers students with rhythm, coordination, and artistic expression. Led by experienced instructors, students learn various dance forms while fostering confidence and creativity.",
      image: "https://springdalecbse.in/wp-content/uploads/2024/03/dance.jpg"
    },
    {
      title: "Skating",
      description: "Springdale Public School's skating program offers students the thrill of gliding on ice while honing balance, coordination, and agility. With expert coaches guiding each glide, students learn fundamental skills and techniques.",
      image: "https://indiaskate.com/wp-content/uploads/2021/02/DSC1.jpg"
    },
    {
      title: "Horse Riding",
      description: "Springdale Public School's horse riding program invites students to experience the beauty and grace of equestrianism. Under the guidance of skilled instructors, students learn horse care, riding techniques, and equestrian sportsmanship.",
      image: "https://images.pexels.com/photos/2889030/pexels-photo-2889030.jpeg",
      imageClass: "max-w-2xl"
    },
    {
      title: "Archery Program",
      description: "Springdale Public School's archery program offers students the opportunity to develop focus, precision, and discipline. With expert coaches guiding each shot, students learn proper stance, aiming techniques, and bow handling skills.",
      image: "https://th.bing.com/th/id/R.a8f91e2792b34a3e377a89f81d5d154a?rik=JJhm%2b96aHqz3rQ&riu=http%3a%2f%2fbondiarc.sg5.fcomet.com%2fsydneyarchery%2fwp-content%2fuploads%2f2019%2f05%2fIMG_0334-1024x768.jpg&ehk=%2fcS6BHBzsAjMYAnYlbVKtYauHM%2bzAY8lIRKfHzRTlJ4%3d&risl=&pid=ImgRaw&r=0",
      imageClass: "max-w-2xl"
    },
    {
      title: "Rifle Shooting",
      description: "Springdale Public School's rifle shooting program provides students with a safe and structured environment to develop marksmanship skills and discipline. Under the guidance of certified instructors, students learn firearm safety, proper handling, and precision shooting techniques.",
      image: "https://th.bing.com/th/id/R.9fb0f6f5a12e48a61ce81fed5bf889b0?rik=fUxarP%2f4DMKXqg&riu=http%3a%2f%2fambalschools.com%2fwp-content%2fuploads%2f2023%2f11%2fIndoor-Rifle-Shooting.jpg&ehk=bLK83H3Mm4ANZGWxvvWLzZw4gPTs%2foohBp30917xOZo%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title: "Dance Program",
      description: "Springdale Public School's dance program invites students to express themselves through movement, rhythm, and creativity. With experienced instructors guiding each step, students explore various dance styles, develop coordination, and build confidence.",
      image: "https://www.abdhmashti.org/uploads/gallery/media/gal15.jpg"
    },
    {
      title: "Robotics and AI",
      description: "At our school, we teach about robots and artificial intelligence (AI). Students learn how to build and program robots, and they also study how AI works. Through fun activities and projects, they get to see these technologies in action.",
      image: "https://www.jeffbullas.com/wp-content/uploads/2023/04/AI-robot.jpg"
    }
  ];

  return (
    <div>
      <Breadcrumb title="Extracurricular" />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">ST George Facilities</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At ST George Nursery and Primary School, students can engage in a diverse range of extracurricular activities to foster their interests and skills. Our offerings include arts and crafts, music, dance, sports, and creative activities. These activities provide opportunities for physical fitness, personal growth, and social interaction outside of the traditional classroom setting.
            </p>
          </div>

          <div className="space-y-20">
            {activities.map((activity, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className={`rounded-xl shadow-lg w-full transition-all duration-300 hover:scale-110 ${activity.imageClass || 'max-w-2xl'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <div className="bg-white/20 p-4 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-white">
                <p className="text-lg">Call For More Info</p>
                <a href="tel:+919363093634" className="text-2xl font-bold hover:text-blue-200 transition-colors">
                  +91 93630 93634
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

export default Extracurricular;
