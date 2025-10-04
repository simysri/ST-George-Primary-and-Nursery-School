 import React from 'react';

const HealthAndSports = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Health and Sports</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        At St. George Nursery and Primary School, we prioritize the health and physical development of our students. Our comprehensive health and sports programs are designed to promote fitness, teamwork, and a lifelong love for physical activity.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Health Programs</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Regular health check-ups and screenings</li>
        <li>Nutrition education and healthy eating habits</li>
        <li>Mental health awareness and counseling support</li>
        <li>Hygiene and wellness workshops</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Sports Activities</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Track and field events</li>
        <li>Team sports including football, basketball, and volleyball</li>
        <li>Yoga and meditation sessions</li>
        <li>Inter-school sports competitions and tournaments</li>
      </ul>
      <p className="mt-6 text-gray-700">
        We believe that a healthy body supports a healthy mind, and our programs are tailored to encourage students to achieve their best both academically and physically.
      </p>
    </div>
  );
};

export default HealthAndSports;
