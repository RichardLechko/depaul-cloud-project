"use client";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomScrollbar from "@/components/scrollbar/CustomScrollbar";
import "../styles/scss/main.scss";

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
            <main>{children}</main>
            <Footer />
          </CustomScrollbar>
        </div>
      </body>
    </html>
  );
}