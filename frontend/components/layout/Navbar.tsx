import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Possible auth states
type AuthState = 'signup' | 'login' | 'logout';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [authState, setAuthState] = useState<AuthState>('signup');
  const router = useRouter();

  // Check auth state more frequently
  useEffect(() => {
    checkAuthState(); // Check immediately on mount
    
    // Set up an interval to check auth state every second
    const authCheckInterval = setInterval(checkAuthState, 1000);

    const handleAuthChange = () => {
      checkAuthState();
    };
    
    // Also check on storage events (when localStorage changes)
    const handleStorageChange = () => {
      checkAuthState();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Regular UI setup
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
      clearInterval(authCheckInterval);
      window.removeEventListener('authChange', handleAuthChange);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkAuthState = () => {
    // Check if user is currently logged in
    const currentUser = localStorage.getItem('user');
    
    if (currentUser) {
      setAuthState('logout');
      return;
    }
    
    // Check if user has previously registered (has account)
    const hasAccount = localStorage.getItem('hasAccount');
    
    if (hasAccount === 'true') {
      setAuthState('login');
    } else {
      setAuthState('signup');
    }
  };

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

  const handleAuthClick = () => {
    switch (authState) {
      case 'signup':
        router.push('/auth/register');
        break;
      case 'login':
        router.push('/auth/login');
        break;
      case 'logout':
        // Clear user data but remember they had an account
        localStorage.removeItem('user');
        localStorage.setItem('hasAccount', 'true');
        setAuthState('login');
        router.push('/');
        break;
    }
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
              <div className="navbar-login" onClick={handleAuthClick}>
                {authState === 'signup' ? 'Sign Up' : 
                 authState === 'login' ? 'Login' : 'Logout'}
              </div>

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
          <div onClick={handleAuthClick}>
            {authState === 'signup' ? 'Sign Up' : 
             authState === 'login' ? 'Login' : 'Logout'}
          </div>
          
          {authState !== 'logout' && (
            <div onClick={() => {
              if (authState === 'signup') {
                router.push('/auth/login');
              } else {
                router.push('/auth/register');
              }
            }}>
              {authState === 'signup' ? 'Already have an account? Login' : 
                                        'Need an account? Sign Up'}
            </div>
          )}
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