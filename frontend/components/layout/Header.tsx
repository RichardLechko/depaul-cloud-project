"use client";
import React from "react";
import { Input } from "@/components/ui/input";

const Header: React.FC = () => {
  return (
    <header className="hero" id="home">
      <div className="hero-container">
        <div className="hero-title-and-text">
          <h1 className="hero-title">Empowering your learning path.</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="search-box">
          <Input 
            className="search-input custom-focus"
            placeholder="Search university, program & country"
            type="text"
          />
          <button className="search-btn">Find University</button>
        </div>
        <div className="countries">
          <ul className="countries-list">
            <li className="country-item">United States</li>
            <li className="country-item">Australia</li>
            <li className="country-item">Canada</li>
            <li className="country-item">Ireland</li>
            <li className="country-item">Singapore</li>
            <li className="country-item">Germany</li>
            <li className="country-item">Spain</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
