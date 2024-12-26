import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <a href="#landing">
          <img id="logo" src="./img/logo_big.svg" alt="logo" />
        </a>
      </div>
      <a
        className={`navbar__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>{" "}
        <span className="nav__hamburger__line"></span>{" "}
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projects"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="work"
              className="navbar--content"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="about"
              className="navbar--content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="footer"
              className="navbar--content"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/16yFsUQvs4Y1cB9JLFMRFAt6TGadpXbbn/view?usp=sharing" // Replace with your actual Google Drive shareable link
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practices for external links
              className="btn btn-outline-primary"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
