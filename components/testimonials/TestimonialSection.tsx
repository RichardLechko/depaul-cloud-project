"use client";

import React from "react";

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aditi Sharma",
    text: "This app helped me navigate the college application process smoothly! I couldn't have done it without the resources provided here.",
  },
  {
    name: "Rohit Kumar",
    text: "An invaluable tool for any international student! The community support made my transition so much easier.",
  },
  {
    name: "Sneha Patel",
    text: "I found my dream university thanks to this app! The personalized guidance was a game changer for me.",
  },
  {
    name: "Vikram Singh",
    text: "The information on scholarships and financial aid is top-notch. This app is a must-have for students planning to study abroad.",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          What Our Users Say
        </h2>
        <div className="flex flex-col space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <p className="mt-4 font-semibold text-blue-600">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
