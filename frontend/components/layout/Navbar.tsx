import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const simpleBar = document.querySelector(".simplebar-content-wrapper");
      if (simpleBar) {
        const topOffset = element.offsetTop - 100;
        simpleBar.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <div className="navbar-list">
            <div className="navbar-logo">
              <a onClick={() => scrollToSection("home")}>EDUVERSE</a>
            </div>

            {!isMobile && (
              <div className="navbar-links">
                <div onClick={() => scrollToSection("home")}>Home</div>
                <div onClick={() => scrollToSection("explore")}>Explore</div>
                <div onClick={() => scrollToSection("resources")}>
                  Resources
                </div>
                <div onClick={() => scrollToSection("community")}>
                  Community
                </div>
                <div onClick={() => scrollToSection("contact")}>Contact Us</div>
              </div>
            )}
            <div className="login-and-hamburger">
              <div className="navbar-login">Login</div>

              {isMobile && (
                <button
                  className={`hamburger ${isOpen ? "active" : ""}`}
                  onClick={toggleMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <div onClick={() => scrollToSection("home")}>Home</div>
          <div onClick={() => scrollToSection("explore")}>Explore</div>
          <div onClick={() => scrollToSection("resources")}>Resources</div>
          <div onClick={() => scrollToSection("community")}>Community</div>
          <div onClick={() => scrollToSection("contact")}>Contact Us</div>
        </div>
      </div>

      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
