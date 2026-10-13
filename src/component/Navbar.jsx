
import React, { useState, useEffect } from "react";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  {
    title: "Services",
    link: "/services",
    dropdown: [
      { title: "Residential Interior", link: "/services/residential" },
      { title: "Commercial Interior", link: "/services/commercial" },
      { title: "Modular Kitchen", link: "/services/modular-kitchen" },
      { title: "Space Planning", link: "/services/space-planning" },
    ],
  },
  {
    title: "Products",
    link: "/products",
    dropdown: [
      { title: "Modular Furniture", link: "/products/furniture" },
      { title: "Wardrobes", link: "/products/wardrobes" },
      { title: "Kitchen Cabinets", link: "/products/kitchen-cabinets" },
      { title: "Home Decor", link: "/products/home-decor" },
    ],
  },
  { title: "Projects", link: "/projects" },
  { title: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`interior-navbar ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container">
        <div className="interior-nav-inner">

          {/* Logo */}
          <a href="/" className="interior-nav-logo" onClick={closeMenu}>
            <img src="/img/logo.jpg" alt="Company Logo" />
          </a>

          {/* Desktop & Mobile Menu */}
          <nav
            id="interior-navigation"
            className={`interior-nav-menu ${menuOpen ? "menu-open" : ""}`}
            aria-label="Main navigation"
          >
            <ul className="interior-nav-links">
              {navLinks.map((item, index) => (
                <li
                  key={item.title}
                  className={`interior-nav-item ${
                    item.dropdown ? "has-dropdown" : ""
                  }`}
                >
                  <div className="interior-nav-link-row">
                    <a href={item.link} onClick={closeMenu}>
                      {item.title}
                    </a>

                    {item.dropdown && (
                      <button
                        type="button"
                        className="interior-dropdown-toggle"
                        aria-label={`Toggle ${item.title} menu`}
                        aria-expanded={openDropdown === index}
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === index ? null : index
                          )
                        }
                      >
                        <i className="fa-solid fa-chevron-down"></i>
                      </button>
                    )}
                  </div>

                  {item.dropdown && (
                    <ul
                      className={`interior-dropdown ${
                        openDropdown === index ? "dropdown-open" : ""
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.title}>
                          <a href={subItem.link} onClick={closeMenu}>
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="interior-mobile-quote"
              onClick={closeMenu}
            >
              Get a Quote
              <i className="fa-solid fa-arrow-up-right"></i>
            </a>
          </nav>

          {/* Right Side CTA */}
          <div className="interior-nav-actions">
            <a href="/contact" className="interior-nav-quote">
              <span>Get a Quote</span>
              <span className="interior-quote-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className={`interior-menu-toggle ${
                menuOpen ? "active" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="interior-navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
