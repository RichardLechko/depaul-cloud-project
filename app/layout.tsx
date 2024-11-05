"use client";

import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Provider } from "react-redux";
import store from "../store";
import React, { useState } from "react";
import SignInModal from "@/components/modals/SignInModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <Header openSignInModal={handleOpenModal} />
          <main>
            {children}
            <div id="modal-root" />
          </main>
          <Footer openSignInModal={handleOpenModal} />
          <SignInModal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            onSignInSuccess={handleCloseModal}
          />
        </body>
      </html>
    </Provider>
  );
}
