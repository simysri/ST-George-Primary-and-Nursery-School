import React from 'react';

const ClubActivities = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Club Activities</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our school offers a variety of club activities designed to enhance students' interests, develop new skills, and foster teamwork. These extracurricular clubs provide opportunities for students to explore their passions beyond the classroom.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Science Club</h2>
          <p className="text-gray-700">
            Explore the wonders of science through hands-on experiments, projects, and discussions. Perfect for budding scientists and innovators.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Art and Craft Club</h2>
          <p className="text-gray-700">
            Unleash creativity through painting, drawing, sculpting, and various craft activities. Express yourself through artistic mediums.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Music Club</h2>
          <p className="text-gray-700">
            Learn to play instruments, sing, and appreciate various forms of music. From classical to contemporary, explore the world of melodies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Drama Club</h2>
          <p className="text-gray-700">
            Develop acting skills, stage presence, and confidence through theatrical performances, role-playing, and storytelling.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Debate Club</h2>
          <p className="text-gray-700">
            Hone public speaking, critical thinking, and argumentation skills through structured debates and discussions on various topics.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Environmental Club</h2>
          <p className="text-gray-700">
            Learn about environmental conservation, sustainability, and eco-friendly practices through projects and community initiatives.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Join a Club</h2>
        <p className="text-gray-700 mb-4">
          Club activities are open to all students. Membership is voluntary and designed to complement academic learning. Each club meets regularly under the guidance of experienced faculty members.
        </p>
        <p className="text-gray-700">
          For more information about joining a club or starting a new one, please contact the school administration or your class teacher.
        </p>
      </div>
    </div>
  );
};

export default ClubActivities;
