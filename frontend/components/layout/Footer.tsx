"use client";
import React from "react";
import { FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoVenmo } from "react-icons/io5";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const simpleBar = document.querySelector('.simplebar-content-wrapper');
      if (simpleBar) {
        const topOffset = element.offsetTop - 100; // Adjust 100 based on your navbar height
        simpleBar.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer>
      <div className="newsletter-container">
        <div className="newsletter-card">
          <h2 className="newsletter-title">Subscribe Newsletters</h2>
          <div className="newsletter-form">
            <div className="input-container">
              <Input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <Button className="newsletter-button">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-nav-wrapper">
          <nav className="footer-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a onClick={() => scrollToSection('home')}>Home</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollToSection('explore')}>Explore</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollToSection('resources')}>Resources</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollToSection('community')}>Community</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollToSection('contact')}>Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className="social-icons">
            <Link href="https://youtube.com" className="social-link" target="_blank">
              <FaYoutube className="social-icon" />
            </Link>
            <Link href="https://facebook.com" className="social-link" target="_blank">
              <FaFacebookSquare className="social-icon" />
            </Link>
            <Link href="https://twitter.com" className="social-link" target="_blank">
              <FaXTwitter className="social-icon" />
            </Link>
            <Link href="https://venmo.com" className="social-link" target="_blank">
              <IoLogoVenmo className="social-icon" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2024 ABC. All Rights Reserved</p>
          <p className="brand-name">Eduverse</p>
          <div className="legal-links">
            <Link href="#home" className="legal-link">
              Terms of Service
            </Link>
            <Link href="#home" className="legal-link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
