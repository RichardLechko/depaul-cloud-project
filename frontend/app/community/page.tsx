"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "@/store/userSlice";
import { useRouter } from "next/navigation";

const Community: React.FC = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Join Our Community
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl">
        Connect with fellow international students and make the most of your
        journey in the USA. Our community is here to support you, share
        experiences, and provide valuable resources.
      </p>

      <section className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">
          Why Join Us?
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Being part of our community means you're never alone in your journey.
          You'll find peers who understand the challenges you face and can offer
          insights and support based on their experiences.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We facilitate connections through events, online discussions, and
          networking opportunities, allowing you to build lasting relationships
          that can help you both academically and socially.
        </p>

        <h2 className="text-3xl font-semibold text-blue-600 mb-3">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Regular meetups and networking events</li>
          <li>Online forums for discussion and support</li>
          <li>Access to mentorship programs</li>
          <li>Workshops on cultural adaptation and academic success</li>
          <li>Fun activities and outings to explore local culture</li>
        </ul>

        <h2 className="text-3xl font-semibold text-blue-600 mb-3">
          How to Get Involved
        </h2>
        <p className="text-gray-600 mb-4">
          Joining our community is simple! Sign up on our platform, participate
          in discussions, and attend events. We encourage everyone to share
          their thoughts, ask questions, and contribute to a welcoming
          atmosphere.
        </p>
        <p className="text-gray-600 mb-4">
          Stay updated on community events and initiatives by following us on
          our social media channels. Your participation makes our community
          stronger!
        </p>

        <h2 className="text-3xl font-semibold text-blue-600 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          For any questions or suggestions regarding our community, please reach
          out via email or through our website. We value your input and are here
          to assist you.
        </p>
      </section>
    </main>
  );
};

export default Community;
