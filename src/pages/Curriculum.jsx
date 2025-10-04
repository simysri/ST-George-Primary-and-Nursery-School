import React from 'react';

const Curriculum = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Curriculum</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        At St. George Nursery and Primary School, our curriculum is designed to foster holistic development, combining academic excellence with creative and physical activities. We follow a comprehensive educational framework that prepares students for lifelong learning.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Key Features</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Integrated learning approach combining traditional and modern teaching methods</li>
        <li>Focus on core subjects: English, Mathematics, Science, Social Studies, and Languages</li>
        <li>Incorporation of arts, music, and physical education</li>
        <li>Project-based learning and hands-on activities</li>
        <li>Regular assessments and personalized feedback</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Educational Goals</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Develop critical thinking and problem-solving skills</li>
        <li>Encourage creativity and innovation</li>
        <li>Build strong moral and ethical values</li>
        <li>Promote physical and mental well-being</li>
        <li>Foster a love for learning and curiosity</li>
      </ul>
      <p className="mt-6 text-gray-700">
        Our curriculum is regularly updated to meet the changing needs of education and society, ensuring our students are well-prepared for the future.
      </p>
    </div>
  );
};

export default Curriculum;
