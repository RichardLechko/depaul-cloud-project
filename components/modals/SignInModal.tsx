"use client";

import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { signIn } from "@/store/userSlice";

interface SignInModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSignInSuccess: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onRequestClose,
  onSignInSuccess,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    Modal.setAppElement("#modal-root");
  }, []);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signIn());
    onSignInSuccess();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sign In"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSignIn}>
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
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <button onClick={onRequestClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SignInModal;
