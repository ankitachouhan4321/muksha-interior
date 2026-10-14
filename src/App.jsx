import React, { useState, useEffect, useRef } from "react";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

const faqs = [
  {
    question: "What interior design services does Muksha Interior offer?",
    answer:
      "Muksha Interior offers residential, commercial, office, kitchen, retail shop, washroom, luxury, and wardrobe interior design services. We focus on creating functional and stylish spaces.",
  },
  {
    question: "What types of interior products do you provide?",
    answer:
      "Our product range includes WPC Louvers, PVC Panels, Fluted Panels, Soffit Panels, Grass Mats, Wallpapers, Customized Wallpapers, and 3D Wallpapers.",
  },
  {
    question: "Do you offer customized wallpaper designs?",
    answer:
      "Yes, we offer customized wallpapers and 3D wallpapers. You can explore different patterns, textures, and design styles to complement your interiors.",
  },
  {
    question: "Can I purchase interior products separately?",
    answer:
      "Yes, Muksha Interior provides interior products as well as interior design services. You can enquire about individual products according to your requirements.",
  },
  {
    question: "Do you provide residential and commercial interior design?",
    answer:
      "Yes. We offer design solutions for homes, offices, retail shops, commercial spaces, kitchens, washrooms, and wardrobes.",
  },
  {
    question: "Can you help with material selection and installation?",
    answer:
      "Our process includes design planning, material selection, execution and installation coordination, and final finishing details.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Fill out the enquiry form with your contact details, project location, and requirements. Our team can then contact you to discuss the project.",
  },
];

const interests = [
  "Residential Interior Design",
  "Commercial Interior Design",
  "Office Interior Design",
  "Kitchen Interior Design",
  "Retail Shop Interior Design",
  "Washroom Interior Design",
  "Luxury Interior Design",
  "Wardrobe Interior Design",
  "WPC Louvers",
  "PVC Panel",
  "Fluted Panel",
  "Soffit Panel",
  "Grass Mat",
  "Wallpaper",
  "Customized Wallpaper",
  "3D Wallpaper",
  "Other Enquiry",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  city: "",
  interest: "",
  message: "",
};

const slides = [
  {
    id: 1,
    image: "/img/banner1.jpg",
    alt: "Muksha Interior Products",
    title: "Elevate Your\nSpace",
    description:
      "Explore premium WPC louvers, decorative panels, wallpapers, and modern interior finishes.",
    link: "/#product-sec",
    buttonText: "Explore Products",
  },
  {
    id: 2,
    image: "/img/banner2.jpg",
    alt: "Muksha Interior Design",
    title: "Defined\nSpaces",
    description:
      "Beautifully crafted interiors that bring together timeless style, comfort, and functionality.",
    link: "/#services-sec",
    buttonText: "More About Us",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Client Review 01",
    role: "Residential Interior Client",
    rating: 5,
    review:
      "Muksha Interior helped us explore modern interior ideas and suitable materials for our home. The combination of wall panels, colours, and finishes created a beautiful look.",
  },
  {
    id: 2,
    name: "Client Review 02",
    role: "Interior Product Customer",
    rating: 5,
    review:
      "We explored WPC louvers and decorative wall panels for our living space. The different textures and finishes helped us choose a style that matched our interiors.",
  },
  {
    id: 3,
    name: "Client Review 03",
    role: "Office Interior Client",
    rating: 5,
    review:
      "The interior planning ideas balanced functionality with modern design. The selection of materials and finishes helped us create a professional-looking office space.",
  },
  {
    id: 4,
    name: "Client Review 04",
    role: "Wallpaper Customer",
    rating: 5,
    review:
      "The wallpaper and decorative panel options gave us plenty of design inspiration. We found a combination of colours and patterns suitable for our bedroom.",
  },
  {
    id: 5,
    name: "Client Review 05",
    role: "Commercial Interior Client",
    rating: 5,
    review:
      "From selecting decorative panels to discussing layout ideas, the process was helpful. The available interior products gave us several options for our commercial space.",
  },
  {
    id: 6,
    name: "Client Review 06",
    role: "Kitchen Interior Client",
    rating: 5,
    review:
      "We wanted a kitchen design that looked elegant while remaining practical. The material suggestions and layout ideas helped us make better design decisions.",
  },
];

// ================= FEATURES DATA =================

const features = [
  {
    icon: "fa-solid fa-couch",
    title: "Creative Interior Design",
    description:
      "Beautiful residential and commercial interiors designed around your style, comfort, and requirements.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Premium Interior Products",
    description:
      "Explore WPC Louvers, PVC Panels, Fluted Panels, Soft Panels, Grass Mats, and customized wallpapers.",
  },
  {
    icon: "fa-solid fa-ruler-combined",
    title: "Customized Solutions",
    description:
      "Personalized kitchen, wardrobe, office, modular, and luxury interior solutions for every space.",
  },
];

// ================= SERVICES DATA =================

const services = [
  {
    id: 1,
    title: "Commercial Interior Design",
    description:
      "Create functional and visually appealing commercial spaces with modern layouts, stylish finishes, and customized interior solutions for your business.",
    image: "/img/ser-1.jpg",
    link: "https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20services.",
  },
  {
    id: 2,
    title: "Residential Interior Design",
    description:
      "Transform your home into a comfortable and elegant living space with personalized interior designs that reflect your lifestyle, preferences, and personality.",
    image: "/img/ser-2.jpg",
    link: "https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20services.",
  },
  {
    id: 3,
    title: "Office Interior Design",
    description:
      "Design productive and professional workspaces with smart space planning, ergonomic layouts, modern furniture, and stylish interiors that inspire your team.",
    image: "/img/ser-3.jpg",
    link: "https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20services.",
  },
  {
    id: 4,
    title: "Kitchen Interior Design",
    description:
      "Create a beautiful and efficient kitchen with intelligent storage, practical layouts, modern finishes, and thoughtfully designed interiors for everyday cooking.",
    image: "/img/ser-4.jpg",
    link: "https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20services.",
  },
  {
    id: 5,
    title: "Retail Shop Interior Design",
    description:
      "Enhance your retail space with attractive product displays, organized layouts, stylish shelving, and inviting interiors that improve the customer shopping experience.",
    image: "/img/ser-5.jpg",
    link: "https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20services.",
  },
  {
    id: 6,
    title: "Washroom Interior Design",
    description:
      "Create modern and comfortable washrooms with space-saving layouts, elegant wall panels, coordinated finishes, and functional interior design solutions.",
    image: "/img/ser-6.jpg",
    link: "https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20services.",
  },
  {
    id: 7,
    title: "Luxury Interior Design",
    description:
      "Bring sophistication to your space with elegant design concepts, premium finishes, refined textures, statement décor, and beautifully coordinated interiors.",
    image: "/img/ser-7.jpg",
    link: "https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20services.",
  },
  {
    id: 8,
    title: "Wardrobe Interior Design",
    description:
      "Upgrade your bedroom with customized wardrobe designs featuring smart storage compartments, space-efficient layouts, modern finishes, and elegant styles.",
    image: "/img/ser-8.jpg",
    link: "https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20services.",
  },
];

const workSteps = [
  {
    id: 1,
    number: "01",
    title: "Understanding Your Vision",
    description:
      "We begin by understanding your ideas, lifestyle, space requirements, design preferences, and budget to create an interior plan that reflects your vision.",
    image: "/img/prc-1.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Planning & Design",
    description:
      "Our team develops thoughtful design concepts, space layouts, colour combinations, and material selections to create a balanced and functional interior.",
    image: "/img/prc-2.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Material Selection",
    description:
      "Explore suitable interior products and finishes, including WPC louvers, PVC panels, fluted panels, soft panels, grass mats, and customized wallpapers.",
    image: "/img/prc-3.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Execution & Installation",
    description:
      "We help bring your design plans to life with carefully coordinated interior work, product installation, and attention to the details that matter.",
    image: "/img/prc-4.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Final Touches",
    description:
      "We focus on the finishing details to create a cohesive, stylish, and comfortable space that aligns with your expectations and design vision.",
    image: "/img/prc-5.jpg",
  },
];

// ================= APP COMPONENT =================

const App = () => {
  const swiperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(3);

  const currentStep = workSteps[activeStep];

  // FAQ State
  const [activeFaq, setActiveFaq] = useState(0);

  // Contact Form State
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  // Web3Forms Access Key
  const accessKey =
    import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY ||
    "beb93908-b261-4db2-8760-499ca545f573";

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formStatus.message) {
      setFormStatus({ type: "", message: "" });
    }
  };

  // Handle Contact Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid 10-digit Indian mobile number.",
      });
      return;
    }

    if (!accessKey) {
      setFormStatus({
        type: "error",
        message: "The enquiry form is not configured yet.",
      });
      return;
    }

    setLoading(true);
    setFormStatus({ type: "", message: "" });

    try {
      const payload = {
        access_key: accessKey,
        subject: "New Enquiry - Muksha Interior Website",
        from_name: "Muksha Interior Website",
        botcheck: "",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        interest: formData.interest,
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted successfully. Our team will contact you soon.",
        });

        setFormData({ ...initialForm });
      } else {
        throw new Error(result.message || "Unable to submit your enquiry.");
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 0,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      {/* hero-carousel start */}

      <section className="hero-carousel">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
          data-bs-touch="false"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={slide.image}
                  className="d-block w-100 hero-banner-image"
                  alt={slide.alt}
                />

                <div className="hero-banner-overlay"></div>

                <div className="container hero-content-container">
                  <div className="hero-content-wrapper">
                    <div className="hero-title-area">
                      <h1 className="hero-main-title">
                        {slide.title.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < slide.title.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </h1>
                    </div>

                    <div className="hero-description-area">
                      <p>{slide.description}</p>

                      <a href={slide.link} className="hero-about-btn">
                        <span>{slide.buttonText}</span>
                        <span className="hero-about-arrow">
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* hero-carousel end */}

      {/* usp-sec start */}
      <section id="usp-sec" className="py-5">
        <div className="container">
          <div className="row g-3 justify-content-center">
            {/* WPC Louvers & Panels */}
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-6"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="usp-card text-center h-100">
                <div className="usp-icon">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <h6>
                  Premium WPC
                  <br />
                  Louvers & Panels
                </h6>
              </div>
            </div>

            {/* Decorative Wall Panels */}
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-6"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="usp-card text-center h-100">
                <div className="usp-icon">
                  <i className="fa-solid fa-border-all"></i>
                </div>
                <h6>
                  Stylish Wall &
                  <br />
                  Ceiling Panels
                </h6>
              </div>
            </div>

            {/* Wallpapers */}
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="usp-card text-center h-100">
                <div className="usp-icon">
                  <i className="fa-solid fa-paint-roller"></i>
                </div>
                <h6>
                  Customized &
                  <br />
                  3D Wallpapers
                </h6>
              </div>
            </div>

            {/* Wide Product Range */}
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-6"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="usp-card text-center h-100">
                <div className="usp-icon">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>
                <h6>
                  Wide Range of
                  <br />
                  Interior Products
                </h6>
              </div>
            </div>

            {/* Interior Design Services */}
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-6"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div className="usp-card text-center h-100">
                <div className="usp-icon">
                  <i className="fa-solid fa-ruler-combined"></i>
                </div>
                <h6>
                  Creative Interior
                  <br />
                  Design Solutions
                </h6>
              </div>
            </div>

            {/* Installation Support */}
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-6"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="usp-card text-center h-100">
                <div className="usp-icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <h6>
                  Interior Product
                  <br />
                  Installation Support
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* usp-sec end */}

      {/* =============== ABOUT SECTION START =============== */}

      <section className="interior-about-section" id="about-sec">
        <div className="container-lg">
          <div className="row align-items-center g-4 g-xl-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-4">
              <div className="interior-about-content">
                <div className="interior-section-subtitle" data-aos="fade-left">
                  <span className="subtitle-mark"></span>
                  WELCOME TO MUKSHA INTERIOR & FOAM WALLPAPERS
                </div>

                <h2 className="interior-about-heading" data-aos="fade-left">
                  Beautiful Interiors, Premium Wallpapers & Modern Designs
                </h2>

                <p className="interior-about-description" data-aos="fade-left">
                  Muksha Interior & Foam Wallpapers is your destination for
                  stylish interior design solutions and quality decorative
                  products in Delhi. We offer residential, commercial, office,
                  and kitchen interior design services along with a wide
                  selection of wallpapers, foam wallpapers, WPC Louvers, PVC
                  Panels, Fluted Panels, Soft Panels, Grass Mats, and Customized
                  3D Wallpapers. Our goal is to help you create beautiful,
                  comfortable, and functional spaces that reflect your personal
                  style and requirements.
                </p>

                <a
                  href="tel:+919220192901"
                  className="interior-discover-btn"
                  data-aos="fade-left"
                >
                  <span className="discover-btn-text">Contact Now</span>

                  <span className="discover-btn-icon">
                    <i className="fa-solid fa-arrow-up"></i>
                  </span>
                </a>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="col-lg-4" data-aos="zoom-in">
              <div className="interior-about-image">
                <img
                  src="/img/about.png"
                  alt="Muksha Interior & Foam Wallpapers - Interior Design and Wallpaper Shop in Delhi"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="col-lg-4">
              <div className="interior-features-list">
                {features.map((feature, index) => (
                  <div
                    className="interior-feature-item"
                    key={index}
                    data-aos="fade-right"
                  >
                    <div
                      className={`interior-feature-icon ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      <i className={feature.icon}></i>
                    </div>

                    <div className="interior-feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== ABOUT SECTION END =============== */}
      {/* Product Section Start */}
      <section id="product-sec" className="py-lg-5 py-3">
        <div className="container-lg product-sec">
          <div className="organization-heading">
            <span className="organization-subtitle">
              <span className="organization-subtitle-mark"></span>
              OUR PRODUCTS
            </span>
            <h2>Premium Interior Products to Transform Every Space</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6" data-aos="fade-up">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/prod/1.jpg"
                    alt="WPC Louvers"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>WPC Louvers</h5>
                  <a
                    href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products"
                    className="interior-nav-quote px-4 py-2"
                  >
                    Enquire Now
                    <i className="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6" data-aos="fade-up">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/prod/2.jpg"
                    alt="PVC Panel"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>PVC Panel</h5>
                  <a
                    href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products"
                    className="interior-nav-quote px-4 py-2"
                  >
                    Enquire Now
                    <i className="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6" data-aos="fade-up">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/prod/3.jpg"
                    alt="Fluted Panel"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>Fluted Panel</h5>
                  <a
                    href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products"
                    className="interior-nav-quote px-4 py-2"
                  >
                    Enquire Now
                    <i className="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6" data-aos="fade-up">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/prod/4.jpg"
                    alt="Soffit Panel"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>Soffit Panel</h5>
                  <a
                    href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products"
                    className="interior-nav-quote px-4 py-2"
                  >
                    Enquire Now
                    <i className="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6" data-aos="fade-up">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/prod/5.jpg"
                    alt="Grass Mat"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>Grass Mat</h5>
                  <a
                    href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products"
                    className="interior-nav-quote px-4 py-2"
                  >
                    Enquire Now
                    <i className="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6" data-aos="fade-up">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/prod/6.jpg"
                    alt="Wallpaper"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>Wallpaper</h5>
                  <a
                    href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products"
                    className="interior-nav-quote px-4 py-2"
                  >
                    Enquire Now
                    <i className="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6" data-aos="fade-up">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/prod/7.jpg"
                    alt="Customized Wallpaper"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>Customized Wallpaper</h5>
                  <a
                    href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products"
                    className="interior-nav-quote px-4 py-2"
                  >
                    Enquire Now
                    <i className="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6" data-aos="fade-up">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/prod/8.jpg"
                    alt="3D Wallpaper"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>3D Wallpaper</h5>
                  <a
                    href="https://wa.me/919220192901?text=Hello%20Muksha%20Interior%2C%20I%20am%20interested%20in%20your%20interior%20products"
                    className="interior-nav-quote px-4 py-2"
                  >
                    Enquire Now
                    <i className="fa-brands fa-whatsapp "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}

      {/* =============== SERVICES SECTION START =============== */}
      <section className="services-section" id="services-sec">
        <div className="services-container">
          <div className="services-header">
            <div className="col-md-6 col-12">
              <div className="interior-section-subtitle">
                <span className="subtitle-mark"></span>
                Our Services
              </div>

              <h2 className="interior-about-heading text-start">
                Creative Interior Design Solutions for Every Space
              </h2>

              <p className="interior-about-description text-start">
                Muksha Interior offers thoughtfully designed interior solutions
                that blend modern aesthetics, comfort, and functionality. From
                elegant residential interiors and modular kitchens to stylish
                offices, commercial spaces, retail shops, and luxury interiors,
                we transform your ideas into beautiful and practical spaces
                tailored to your lifestyle, preferences, and needs.
              </p>
            </div>

            <div className="services-navigation">
              <button
                className="services-nav-btn services-prev"
                type="button"
                aria-label="Previous service"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <button
                className="services-nav-btn services-next"
                type="button"
                aria-label="Next service"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="services-slider-wrapper">
            <Swiper
              modules={[Autoplay]}
              className="services-swiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={30}
              slidesPerView={1}
              speed={850}
              loop={services.length > 3}
              grabCursor={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 36,
                },
                1500: {
                  slidesPerView: 4,
                  spaceBetween: 44,
                },
              }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="service-card">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-image img-fluid"
                      loading="lazy"
                    />

                    <div className="service-card-overlay"></div>

                    <div className="service-card-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>

                    <a
                      href={service.link}
                      className="service-card-arrow"
                      aria-label={`Explore ${service.title}`}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* =============== SERVICES SECTION END =============== */}

      {/* organization-sec start */}
      <section className="organization-section">
        <div className="container-lg">
          {/* Section Heading */}
          <div className="organization-heading">
            <span className="organization-subtitle">
              <span className="organization-subtitle-mark"></span>
              OUR PROCESS
            </span>

            <h2>How We Bring Your Interior Dreams to Life</h2>
          </div>

          {/* Main Process Card */}
          <div className="organization-main-card">
            {/* Left Content */}
            <div className="organization-left">
              <div className="organization-sketch"></div>

              <div className="organization-left-inner">
                {/* Process Step Navigation */}
                <div className="organization-steps">
                  {workSteps.map((step, index) => (
                    <button
                      key={step.id}
                      type="button"
                      className={`organization-step-btn ${
                        activeStep === index ? "active" : ""
                      }`}
                      onClick={() => setActiveStep(index)}
                      aria-label={`View step ${step.number}: ${step.title}`}
                      aria-pressed={activeStep === index}
                    >
                      {step.number}
                    </button>
                  ))}
                </div>

                {/* Dynamic Content */}
                <div className="organization-step-content" key={currentStep.id}>
                  <h3>{currentStep.title}</h3>
                  <p>{currentStep.description}</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="organization-right">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="organization-main-image"
                key={currentStep.image}
              />
            </div>
          </div>
        </div>
      </section>
      {/* organization-sec end */}

      {/* Advantages Section Start */}
      <section className="advantages-section">
        <div className="container-lg">
          <div className="advantages-wrapper" data-aos="zoom-in">
            <div className="advantages-content">
              {/* Section Subtitle */}
              <div className="interior-section-subtitle">
                <span className="subtitle-mark"></span>
                WHY CHOOSE MUKSHA INTERIOR
              </div>

              {/* Section Heading */}
              <h2 className="interior-about-heading">
                Your Trusted Partner for <br />
                Beautiful Interiors
              </h2>

              {/* Description */}
              <p>
                At Muksha Interior, we bring together creative interior design
                solutions and a wide range of decorative products to transform
                residential and commercial spaces. From modern wall panels and
                stylish wallpapers to complete interior design solutions, we
                help you create spaces that reflect your style and needs.
              </p>

              <p>
                Our approach focuses on thoughtful planning, suitable material
                selection, functional layouts, and attention to finishing
                details. Whether you're renovating your home, designing an
                office, or selecting decorative wall panels, we help bring your
                interior vision to life.
              </p>

              {/* Why Choose Us Points */}
              <ul className="advantages-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  Creative & Customized Interior Design
                </li>

                <li>
                  <i className="fa-solid fa-check"></i>
                  Wide Range of Premium Interior Products
                </li>

                <li>
                  <i className="fa-solid fa-check"></i>
                  Stylish WPC Louvers, PVC & Fluted Panels
                </li>

                <li>
                  <i className="fa-solid fa-check"></i>
                  Customized & 3D Wallpaper Options
                </li>

                <li>
                  <i className="fa-solid fa-check"></i>
                  Residential & Commercial Interior Solutions
                </li>

                <li>
                  <i className="fa-solid fa-check"></i>
                  Material Selection & Installation Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Advantages Section End */}

      <section className="muksha-testimonial-section">
        <div className="container">
          {/* Section Heading */}
          <div className="organization-heading text-center">
            <span className="organization-subtitle">
              <span className="organization-subtitle-mark"></span>
              CLIENT TESTIMONIALS
            </span>

            <h2>What Our Clients Say About Muksha Interior</h2>
          </div>

          {/* Swiper Slider */}
          <div className="muksha-testimonial-wrapper">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={25}
              slidesPerView={1}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
              }}
              className="muksha-testimonial-slider"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="muksha-testimonial-card">
                    {/* Rating and Quote */}
                    <div className="muksha-testimonial-top">
                      <div
                        className="muksha-rating"
                        aria-label={`${item.rating} out of 5 stars`}
                      >
                        <div className="muksha-stars" aria-hidden="true">
                          {Array.from({ length: item.rating }, (_, index) => (
                            <i key={index} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                        <span>({item.rating.toFixed(1)})</span>
                      </div>

                      <div className="muksha-quote-icon">
                        <i className="fa-solid fa-quote-right"></i>
                      </div>
                    </div>

                    {/* Review */}
                    <p className="muksha-testimonial-text">{item.review}</p>

                    {/* Customer Information */}
                    <div className="muksha-testimonial-author">
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="muksha-faq-contact py-5" id="faq-contact">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* LEFT SIDE - FAQ */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="muksha-faq-left">
                <div className="muksha-side-heading">
                  <span className="muksha-small-heading">
                    FREQUENTLY ASKED QUESTIONS
                  </span>

                  <h3>
                    Everything You Need
                    <br />
                    To Know
                  </h3>

                  <p>
                    Find answers about our design solutions, premium interior
                    products, material selection, and installation services.
                  </p>
                </div>

                <div className="muksha-faq-list">
                  {faqs.map((faq, index) => {
                    const isOpen = activeFaq === index;
                    const answerId = `muksha-faq-answer-${index}`;

                    return (
                      <div
                        className={`muksha-faq-item ${isOpen ? "active" : ""}`}
                        key={index}
                      >
                        <button
                          className="muksha-faq-question"
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() => setActiveFaq(isOpen ? null : index)}
                        >
                          <span>{faq.question}</span>

                          <i
                            className={
                              isOpen ? "fa-solid fa-minus" : "fa-solid fa-plus"
                            }
                            aria-hidden="true"
                          ></i>
                        </button>

                        <div
                          id={answerId}
                          className="muksha-faq-answer"
                          hidden={!isOpen}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="muksha-contact-card">
                <div className="muksha-form-heading">
                  <span className="muksha-small-heading">LET'S CONNECT</span>

                  <h3>Let's Discuss Your Project</h3>

                  <p>
                    Looking for interior design services or premium decorative
                    products? Share your requirements and our team will get in
                    touch.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Full Name */}
                    <div className="col-md-6">
                      <label htmlFor="muksha-name">
                        Full Name <span>*</span>
                      </label>

                      <div className="muksha-input-wrap">
                        <i className="fa-regular fa-user"></i>

                        <input
                          id="muksha-name"
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label htmlFor="muksha-phone">
                        Phone Number <span>*</span>
                      </label>

                      <div className="muksha-input-wrap">
                        <i className="fa-solid fa-phone"></i>

                        <input
                          id="muksha-phone"
                          type="tel"
                          name="phone"
                          placeholder="10-digit Mobile"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel-national"
                          inputMode="numeric"
                          maxLength={10}
                          pattern="[6-9][0-9]{9}"
                          title="Enter a valid 10-digit Indian mobile number"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label htmlFor="muksha-email">
                        Email Address <span>*</span>
                      </label>

                      <div className="muksha-input-wrap">
                        <i className="fa-regular fa-envelope"></i>

                        <input
                          id="muksha-email"
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>

                    {/* City */}
                    <div className="col-md-6">
                      <label htmlFor="muksha-city">
                        City / Location <span>*</span>
                      </label>

                      <div className="muksha-input-wrap">
                        <i className="fa-solid fa-location-dot"></i>

                        <input
                          id="muksha-city"
                          type="text"
                          name="city"
                          placeholder="Your City"
                          value={formData.city}
                          onChange={handleChange}
                          autoComplete="address-level2"
                          required
                        />
                      </div>
                    </div>

                    {/* Service or Product */}
                    <div className="col-12">
                      <label htmlFor="muksha-interest">
                        Interested In <span>*</span>
                      </label>

                      <div className="muksha-input-wrap">
                        <i className="fa-solid fa-layer-group"></i>

                        <select
                          id="muksha-interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Service or Product</option>

                          <optgroup label="Interior Design Services">
                            {interests.slice(0, 8).map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </optgroup>

                          <optgroup label="Interior Products">
                            {interests.slice(8, 16).map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </optgroup>

                          <option value="Other Enquiry">Other Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label htmlFor="muksha-message">
                        Your Requirements <span>*</span>
                      </label>

                      <div className="muksha-input-wrap textarea-wrap">
                        <i className="fa-regular fa-message"></i>

                        <textarea
                          id="muksha-message"
                          name="message"
                          rows="4"
                          placeholder="Tell us about your space, products, or project requirements..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Submission Status */}
                    {formStatus.message && (
                      <div className="col-12">
                        <div
                          className={`muksha-form-alert ${formStatus.type}`}
                          role="status"
                          aria-live="polite"
                        >
                          {formStatus.message}
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="muksha-form-submit"
                        disabled={loading}
                      >
                        <span>
                          {loading ? "Sending Enquiry..." : "Send Your Enquiry"}
                        </span>

                        <i
                          className={
                            loading
                              ? "fa-solid fa-spinner fa-spin"
                              : "fa-solid fa-arrow-up-right-from-square"
                          }
                        ></i>
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="muksha-form-note">
                        <i className="fa-solid fa-lock"></i>
                        Your details will be used to respond to your enquiry.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;