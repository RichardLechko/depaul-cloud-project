"use client";

import React from "react";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "@/store/userSlice";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

interface FooterProps {
  openSignInModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openSignInModal }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const router = useRouter();

  const handleRedirect = (path: string) => {
    if (!isSignedIn) {
      openSignInModal();
    } else {
      router.push(path);
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isSignedIn) {
      event.currentTarget.classList.add("cursor-not-allowed");
      const tooltip = document.createElement("div");
      tooltip.innerText = "Please sign in to access this feature!";
      tooltip.className =
        "absolute bg-red-600 text-white text-xs rounded-md py-2 px-3 w-40 text-center left-1/2 transform -translate-x-1/2 opacity-100 z-10 -bottom-full";
      event.currentTarget.parentElement!.appendChild(tooltip);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.remove("cursor-not-allowed");
    const tooltip = event.currentTarget.parentElement?.querySelector("div");
    if (tooltip) event.currentTarget.parentElement!.removeChild(tooltip);
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 relative">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">International Student Advisor</h2>
          <p className="mt-2 text-gray-400">
            Your journey to success starts here.
          </p>
        </div>
        <nav className="flex flex-col md:flex-row md:space-x-8">
          <Button
            onClick={() => router.push("/testimonials")}
            className="flex items-center text-white rounded-md border-2 border-transparent transition duration-300 hover:text-blue-500"
          >
            Testimonials
          </Button>
          <Button
            onClick={() => router.push("/about")}
            className="flex items-center text-white rounded-md border-2 border-transparent transition duration-300 hover:text-blue-500"
          >
            About Us
          </Button>
          <div className="relative">
            <Button
              onClick={() => handleRedirect("/contact")}
              isDisabled={!isSignedIn}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center text-white rounded-md border-2 border-transparent transition duration-300 ${
                !isSignedIn
                  ? "cursor-not-allowed text-gray-500"
                  : "hover:text-blue-500"
              }`}
            >
              Contact Us
            </Button>
          </div>
          <div className="relative">
            <Button
              onClick={() => handleRedirect("/community")}
              isDisabled={!isSignedIn}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center text-white rounded-md border-2 border-transparent transition duration-300 ${
                !isSignedIn
                  ? "cursor-not-allowed text-gray-500"
                  : "hover:text-blue-500"
              }`}
            >
              Join Community
            </Button>
          </div>
          <div className="relative">
            <Button
              onClick={() => handleRedirect("/search")}
              isDisabled={!isSignedIn}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center text-white rounded-md border-2 border-transparent transition duration-300 ${
                !isSignedIn
                  ? "cursor-not-allowed text-gray-500"
                  : "hover:text-blue-500"
              }`}
            >
              Search Universities
            </Button>
          </div>
        </nav>
      </div>
      <div className="border-t border-gray-800 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} International Student Advisor. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
