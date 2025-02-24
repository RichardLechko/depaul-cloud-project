"use client";
import Header from "@/components/layout/Header";
import { Universities } from "@/components/layout/Universities";
import Services from "@/components/layout/Services";
import Reviews from "@/components/layout/Reviews";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <>
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
    </>
  );
}