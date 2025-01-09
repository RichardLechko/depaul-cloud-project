"use client";

import React from "react";

const LandingPage: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to International Student Advisor
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your personalized guide for studying abroad.
          </p>
        </div>
      </header>

      <section className="py-16 px-5 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Personalized Insights
            </h3>
            <p>
              Receive tailored information based on your preferences, ensuring
              you get the best options for your study abroad journey.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Comprehensive Resources
            </h3>
            <p>
              Access a wide range of resources, including cost of living, local
              amenities, and college options that fit your needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>
              Join a community of fellow international students and share
              experiences, tips, and advice for a successful transition.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
