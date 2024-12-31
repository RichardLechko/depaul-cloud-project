import Link from "next/link";

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const simpleBar = document.querySelector('.simplebar-content-wrapper');
      if (simpleBar) {
        const topOffset = element.offsetTop - 100;
        simpleBar.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="navbar-list">
          <div className="navbar-logo">
          <a onClick={() => scrollToSection('home')}>EDUVERSE</a>
            
          </div>
          <div className="navbar-links">
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('explore')}>Explore</a>
            <a onClick={() => scrollToSection('resources')}>Resources</a>
            <a onClick={() => scrollToSection('community')}>Community</a>
            
            <a onClick={() => scrollToSection('contact')}>Contact Us</a>
          </div>
          <Link href="#home" className="navbar-login">
            Login
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
