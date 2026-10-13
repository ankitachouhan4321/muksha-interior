
import React, { useState } from "react";


const services = [
  { title: "Residential Interior", link: "/services/residential" },
  { title: "Commercial Interior", link: "/services/commercial" },
  { title: "Modular Kitchen", link: "/services/modular-kitchen" },
  { title: "Space Planning", link: "/services/space-planning" },
  { title: "Interior Renovation", link: "/services/renovation" },
];

const products = [
  { title: "Modular Furniture", link: "/products/furniture" },
  { title: "Wardrobes", link: "/products/wardrobes" },
  { title: "Kitchen Cabinets", link: "/products/kitchen-cabinets" },
  { title: "Home Decor", link: "/products/home-decor" },
  { title: "Lighting Solutions", link: "/products/lighting" },
];

const company = [
  { title: "About Us", link: "/about" },
  { title: "Our Projects", link: "/projects" },
  { title: "Our Team", link: "/team" },
  { title: "Blog", link: "/blog" },
  { title: "Contact Us", link: "/contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Connect your newsletter API here.
    console.log("Newsletter email:", email);
  };

  return (
    <footer className="main-footer">
      <div className="container">

        {/* Newsletter Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img
                src="/img/logo.png"
                alt="Company Logo"
              />
            </a>
          </div>

          <div className="footer-newsletter">
            <h2>
              Subscribe To <br /> Our Newsletter
            </h2>

            <form
              className="footer-subscribe-form"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />

              <button type="submit" className="footer-subscribe-btn">
                Subscribe Now
              </button>

              <button
                type="submit"
                className="footer-submit-arrow"
                aria-label="Subscribe to newsletter"
              >
                <i className="fa-solid fa-arrow-up-right"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="footer-middle">

          {/* Brand Description */}
          <div className="footer-about">
            <p>
              We create beautiful, functional and inspiring
              interior spaces that reflect your style.
              From design concepts to final execution,
              we bring your dream spaces to life.
            </p>

            <div className="footer-social">
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="footer-column">
            <h4>Our Services</h4>
            <ul>
              {services.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="footer-column">
            <h4>Our Products</h4>
            <ul>
              {products.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="footer-column">
            <h4>Company Info</h4>
            <ul>
              {company.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column footer-contact">
            <h4>Say Hello</h4>

            <a href="mailto:info@example.com">
              info@example.com
            </a>

            <a href="tel:+911234567890" className="footer-phone">
              +91 12345 67890
            </a>

            <p>Delhi, India</p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()}
            {" "}Your Company. All Rights Reserved.
          </p>

          <p>
            Created by{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABC
            </a>
          </p>
        </div>
      </div>

      {/* Back To Top */}
      <button
        className="footer-back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
