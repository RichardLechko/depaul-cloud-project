"use client";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CustomScrollbar from "@/components/scrollbar/CustomScrollbar";
import { Universities } from "@/components/layout/Universities";
import Services from "@/components/layout/Services";
import React from "react";
import "../styles/scss/main.scss";
import Reviews from "@/components/layout/Reviews";
import Contact from "@/components/layout/Contact";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen">
          <CustomScrollbar>
            <Navbar />
            <div id="home">
              <Header />
            </div>
            <div id="explore">
              <Universities />
            </div>
            <div id="resources">
              <Services />
            </div>
            <div id="community">
              <Reviews />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
            <main>{children}</main>
          </CustomScrollbar>
        </div>
      </body>
    </html>
  );
}
