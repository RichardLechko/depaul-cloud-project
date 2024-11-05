"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut, selectIsSignedIn } from "@/store/userSlice";
import Button from "@/components/ui/Button";

interface HeaderProps {
  openSignInModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openSignInModal }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignOutClick = () => {
    dispatch(signOut());
  };

  const handleRedirect = (path: string) => {
    if (!isSignedIn) {
      openSignInModal();
    } else {
      router.push(path);
    }
  };

  const linkStyle =
    "relative flex items-center px-4 py-2 text-white rounded-md border-2 border-transparent transition duration-300";

  const buttonStyle =
    "relative flex items-center px-4 py-2 text-white rounded-md transition duration-300";

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isSignedIn) {
      event.currentTarget.classList.add("cursor-not-allowed");
      const tooltip = document.createElement("div");
      tooltip.innerText = "Please sign in to access this feature!";
      tooltip.className =
        "absolute bg-red-600 text-white text-xs rounded-md py-2 px-3 w-40 text-center left-1/2 transform -translate-x-1/2 mt-[5rem] opacity-100 z-10";
      event.currentTarget.appendChild(tooltip);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.remove("cursor-not-allowed");
    const tooltip = event.currentTarget.querySelector("div");
    if (tooltip) event.currentTarget.removeChild(tooltip);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">
          <Link
            href="/"
            className="hover:text-gray-200 transition duration-300"
          >
            International Student Advisor
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/testimonials"
                className={`${linkStyle} hover:border-gray-200`}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Button
                onClick={() => handleRedirect("/contact")}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${buttonStyle} ${
                  isSignedIn
                    ? "border-2 border-transparent"
                    : "border-none text-gray-500 cursor-not-allowed"
                }`}
              >
                Contact Us
              </Button>
            </li>
            <li>
              <Link
                href="/about"
                className={`${linkStyle} hover:border-gray-200`}
              >
                About Us
              </Link>
            </li>
            <li>
              {isSignedIn ? (
                <Button onClick={handleSignOutClick} className={buttonStyle}>
                  Log Out
                </Button>
              ) : (
                <Button onClick={openSignInModal} className={buttonStyle}>
                  Sign Up
                </Button>
              )}
            </li>
            <li>
              <Button
                onClick={() => handleRedirect("/community")}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${buttonStyle} ${
                  isSignedIn
                    ? "border-2 border-transparent"
                    : "border-none text-gray-500 cursor-not-allowed"
                }`}
              >
                Join Community
              </Button>
            </li>
            <li>
              <Button
                onClick={() => handleRedirect("/search")}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${buttonStyle} ${
                  isSignedIn
                    ? "border-2 border-transparent"
                    : "border-none text-gray-500 cursor-not-allowed"
                }`}
              >
                Search Universities
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
