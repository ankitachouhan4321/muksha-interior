
import React, { useState, useEffect } from "react";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/#about-sec" },
  {
    title: "Services",
    link: "/#services-sec",
    dropdown: [
      { title: "Commercial Interior", link: "/#services-sec" },
      { title: "Residential Interior", link: "/#services-sec" },
      { title: "Office Kitchen", link: "/#services-sec" },
      { title: "Kitchen Planning", link: "/#services-sec" },
      { title: "Retail Shop Interior", link: "/#services-sec" },
      { title: "Washroom Interior", link: "/#services-sec" },
      { title: "Luxury Kitchen", link: "/#services-sec" },
      { title: "Wardrobe Planning", link: "/#services-sec" },
    ],
  },
  {
    title: "Products",
    link: "/products",
    dropdown: [
      { title: "WPC Louvers", link: "/products/furniture" },
      { title: "PVC Panel", link: "/products/wardrobes" },
      { title: "Fluted Panel", link: "/products/kitchen-cabinets" },
      { title: "Soffit Panel", link: "/products/home-decor" },
      { title: "Grass Mat", link: "/products/furniture" },
      { title: "Wallpaper", link: "/products/wardrobes" },
      { title: "Customized Wallpaper", link: "/products/kitchen-cabinets" },
      { title: "3D Wallpaper", link: "/products/home-decor" },
    ],
  },
  { title: "FAQs", link: "/#faq-contact" },
  { title: "Contact Us", link: "/#faq-contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY >= 100);    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`interior-navbar ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container-lg">
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
                          setOpenDropdown(openDropdown === index ? null : index)
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
            <a
              href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products%20and%20services."
              className="interior-nav-quote"
            >
              <span>Get a Quote</span>
              <span className="interior-quote-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className={`interior-menu-toggle ${menuOpen ? "active" : ""}`}
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
