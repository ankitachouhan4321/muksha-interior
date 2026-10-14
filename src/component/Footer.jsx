import React from "react";

const services = [
  {
    title: "Commercial Interior Design",
    link: "/services/commercial-interior-design",
  },
  {
    title: "Residential Interior Design",
    link: "/services/residential-interior-design",
  },
  { title: "Office Interior Design", link: "/services/office-interior-design" },
  {
    title: "Kitchen Interior Design",
    link: "/services/kitchen-interior-design",
  },
  {
    title: "Retail Shop Interior Design",
    link: "/services/retail-shop-interior-design",
  },
  {
    title: "Washroom Interior Design",
    link: "/services/washroom-interior-design",
  },
  { title: "Luxury Interior Design", link: "/services/luxury-interior-design" },
  {
    title: "Wardrobe Interior Design",
    link: "/services/wardrobe-interior-design",
  },
];

const products = [
  { title: "WPC Louvers", link: "/products/wpc-louvers" },
  { title: "PVC Panel", link: "/products/pvc-panel" },
  { title: "Fluted Panel", link: "/products/fluted-panel" },
  { title: "Soffit Panel", link: "/products/soffit-panel" },
  { title: "Grass Mat", link: "/products/grass-mat" },
  { title: "Wallpaper", link: "/products/wallpaper" },
  { title: "Customized Wallpaper", link: "/products/customized-wallpaper" },
  { title: "3D Wallpaper", link: "/products/3d-wallpaper" },
];

const company = [
  { title: "About Us", link: "/about" },
  { title: "Our Projects", link: "/projects" },
  { title: "Our Team", link: "/team" },
  { title: "Blog", link: "/blog" },
  { title: "Contact Us", link: "/contact" },
];

// Replace these links with actual company profiles.
const socialLinks = [
  {
    name: "Facebook",
    icon: "fa-facebook-f",
    url: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: "fa-instagram",
    url: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: "fa-linkedin-in",
    url: "https://www.linkedin.com/",
  },
  {
    name: "YouTube",
    icon: "fa-youtube",
    url: "https://www.youtube.com/",
  },
];

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        {/* Top Section: Logo & Social Media */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img src="/img/logo.jpg" alt="Muksha Interior Logo" />
            </a>
          </div>

          <div className="footer-newsletter">
            <h2>Follow Us Stay Connected</h2>

            <div className="footer-social footer-top-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="footer-middle">
          {/* Our Services */}
          <div className="footer-column">
            <h4>Our Services</h4>
            <ul>
              {services.map((item) => (
                <li key={item.link}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="footer-column">
            <h4>Our Products</h4>
            <ul>
              {products.map((item) => (
                <li key={item.link}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              {company.map((item) => (
                <li key={item.link}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column footer-contact">
            <h4>Company Info</h4>

            <a href="mailto:abc@gmail.com">abc@gmail.com</a>

            <a href="tel:+919220192901" className="footer-phone">
              +91 92201 92901
            </a>

            <p>Budh Vihar, Delhi, India</p>
          </div>

          {/* Google Maps instead of company description */}
          <div className="footer-about footer-map-column">
            <h4>Find Us Here</h4>

            <div className="footer-map">
              <iframe
                title="Muksha Interior Location Map"
                src="https://www.google.com/maps?q=Delhi%2C%20India&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} Muksha Interior. All Rights
            Reserved.
          </p>

          <p>
            Created by{" "}
            <a
              href="https://viraladsmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viral Ads Media
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
