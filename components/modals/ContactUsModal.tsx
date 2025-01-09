"use client";

import React, { useEffect } from "react";
import Modal from "react-modal";

interface ContactUsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  useEffect(() => {
    Modal.setAppElement("#modal-root");
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Us"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 p-2 w-full rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <button onClick={onRequestClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ContactUsModal;
