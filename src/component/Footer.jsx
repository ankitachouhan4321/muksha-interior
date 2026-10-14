import React from "react";

const services = [
  {
    title: "Commercial Interior Design",
    link: "/#product-sec",
  },
  {
    title: "Residential Interior Design",
    link: "/#product-sec",
  },
  { title: "Office Interior Design", link: "/services/office-interior-design" },
  {
    title: "Kitchen Interior Design",
    link: "/#product-sec",
  },
  {
    title: "Retail Shop Interior Design",
    link: "/#product-sec",
  },
  {
    title: "Washroom Interior Design",
    link: "/#product-sec",
  },
  { title: "Luxury Interior Design", link: "/services/luxury-interior-design" },
  {
    title: "Wardrobe Interior Design",
    link: "/#product-sec",
  },
];

const products = [
  { title: "WPC Louvers", link: "/#product-sec" },
  { title: "PVC Panel", link: "/#product-sec" },
  { title: "Fluted Panel", link: "/#product-sec" },
  { title: "Soffit Panel", link: "/#product-sec" },
  { title: "Grass Mat", link: "/#product-sec" },
  { title: "Wallpaper", link: "/#product-sec" },
  { title: "Customized Wallpaper", link: "/#product-sec" },
  { title: "3D Wallpaper", link: "/#product-sec" },
];

const company = [
  { title: "About Us", link: "/#about-sec" },

  { title: "Contact Us", link: "/#contact-sec" },
];

// Replace these links with actual company profiles.
const socialLinks = [
  {
    name: "Facebook",
    icon: "fa-facebook-f",
    url: "https://www.facebook.com/people/Muksha-Interior-BudhVihar/61594165963054/?rdid=rB0kIwIb0x3RywY2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RJn7nkDtH%2F",
  },
  {
    name: "Instagram",
    icon: "fa-instagram",
    url: "https://www.instagram.com/mukshainteriorfoam01?cplk=MjB4aDlzd3U0Y216",
  },
  // {
  //   name: "LinkedIn",
  //   icon: "fa-linkedin-in",
  //   url: "https://www.linkedin.com/",
  // },
  // {
  //   name: "YouTube",
  //   icon: "fa-youtube",
  //   url: "https://www.youtube.com/",
  // },
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

            <a href="mailto:mukshainterior@gmail.com">
              <i className="fa-regular fa-envelope"></i>
              <span> mukshainterior@gmail.com</span>
            </a>

            <a href="tel:+919220192901">
              <i className="fa-solid fa-phone"></i>
              <span> +91 92201 92901</span>
            </a>

            <p>
              <i className="fa-solid fa-location-dot"></i>
              <span> F-27, Budh Vihar Phase I, Budh Vihar, Delhi, 110085</span>
            </p>
          </div>

          {/* Google Maps instead of company description */}
          <div className="footer-about footer-map-column">
            <h4>Find Us Here</h4>

            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.4546532076206!2d77.0843081119424!3d28.705955680639434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07aaa23b8577%3A0x277bddc93ed9371e!2sMuksha%20interior%20%26%20Foam%20wallpapers!5e0!3m2!1sen!2sin!4v1791971246250!5m2!1sen!2sin"
                title="Muksha Interior Location"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
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
