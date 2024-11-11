"use client";

import React, { useState, useEffect } from "react";
import ContactUsModal from "../../components/modals/ContactUsModal";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "@/store/userSlice";
import { useRouter } from "next/navigation";

const ContactPage: React.FC = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (typeof window !== "undefined" && !isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg mb-4">
        We'd love to hear from you! Please fill out the form below.
      </p>

      <button
        onClick={openModal}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Contact Us
      </button>

      <ContactUsModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default ContactPage;
