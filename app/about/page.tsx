import React from "react";

const About: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl">
        We provide personalized guidance for international students moving to
        the USA, ensuring a smooth transition and access to essential resources.
      </p>

      <section className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">
          Who We Are
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Our mission is to support students from India in navigating their
          educational journey in the USA. We understand the unique challenges
          you face and are here to provide tailored resources to help you
          succeed.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          With a dedicated team of advisors and mentors, we strive to ensure
          that each student receives the attention and support they deserve. Our
          experience in the field allows us to connect students with the right
          opportunities.
        </p>

        <h2 className="text-3xl font-semibold text-blue-600 mb-3">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Customized college insights based on your profile</li>
          <li>Cost of living resources to help you budget effectively</li>
          <li>A supportive community for networking and support</li>
          <li>Workshops and seminars for new students to acclimate</li>
          <li>One-on-one mentorship programs to guide your decisions</li>
          <li>Access to exclusive events and meetups</li>
        </ul>

        <h2 className="text-3xl font-semibold text-blue-600 mb-3">
          Get Involved
        </h2>
        <p className="text-gray-600 mb-4">
          Join our community to connect with peers, share experiences, and find
          the best path for your education. We’re dedicated to helping you every
          step of the way. Whether you need academic support or social
          connections, we have the resources to assist you.
        </p>
        <p className="text-gray-600 mb-4">
          Our community platform provides a space for discussions, questions,
          and networking opportunities. Don’t hesitate to reach out to fellow
          students who share your journey.
        </p>

        <h2 className="text-3xl font-semibold text-blue-600 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or need more information, feel free to reach
          out. We're here to help you every step of the way. Contact us via
          email or through our website for more personalized support.
        </p>
      </section>
    </main>
  );
};

export default About;
