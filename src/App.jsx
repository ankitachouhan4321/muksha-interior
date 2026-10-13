import { useState, useEffect, useRef } from "react";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    id: 1,
    image: "/img/banner3.png",
    alt: "Banner 1",
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
    link: "/services/interior-work-plan",
  },

  {
    id: 2,
    title: "Residential Interior Design",
    description:
      "Transform your home into a comfortable and elegant living space with personalized interior designs that reflect your lifestyle, preferences, and personality.",
    image: "/img/ser-2.jpg",
    link: "/services/transforming-rooms",
  },

  {
    id: 3,
    title: "Office Interior Design",
    description:
      "Design productive and professional workspaces with smart space planning, ergonomic layouts, modern furniture, and stylish interiors that inspire your team.",
    image: "/img/ser-3.jpg",
    link: "/services/weaving-dreams",
  },

  {
    id: 4,
    title: "Kitchen Interior Design",
    description:
      "Create a beautiful and efficient kitchen with intelligent storage, practical layouts, modern finishes, and thoughtfully designed interiors for everyday cooking.",
    image: "/img/ser-4.jpg",
    link: "/services/interior-decoration",
  },

  {
    id: 5,
    title: "Retail Shop Interior Design",
    description:
      "Enhance your retail space with attractive product displays, organized layouts, stylish shelving, and inviting interiors that improve the customer shopping experience.",
    image: "/img/ser-5.jpg",
    link: "/services/modern-living",
  },

  {
    id: 6,
    title: "Washroom Interior Design",
    description:
      "Create modern and comfortable washrooms with space-saving layouts, elegant wall panels, coordinated finishes, and functional interior design solutions.",
    image: "/img/ser-6.jpg",
    link: "/services/modern-living",
  },

  {
    id: 7,
    title: "Luxury Interior Design",
    description:
      "Bring sophistication to your space with elegant design concepts, premium finishes, refined textures, statement décor, and beautifully coordinated interiors.",
    image: "/img/ser-7.jpg",
    link: "/services/modern-living",
  },

  {
    id: 8,
    title: "Wardrobe Interior Design",
    description:
      "Upgrade your bedroom with customized wardrobe designs featuring smart storage compartments, space-efficient layouts, modern finishes, and elegant styles.",
    image: "/img/ser-8.jpg",
    link: "/services/modern-living",
  },
];

const workSteps = [
  {
    id: 1,
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your ideas, lifestyle, design preferences, and requirements to create a beautiful and functional interior space.",
    image: "/images/process-1.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Planning & Design",
    description:
      "Our creative team develops detailed layouts, material selections, and design concepts that bring your vision to life.",
    image: "/images/process-2.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Project Execution",
    description:
      "Our professional team carefully manages every stage of the interior project with quality materials and expert craftsmanship.",
    image: "/images/process-3.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Smooth Delivery",
    description:
      "We ensure your project is completed with attention to every detail, delivering a comfortable and beautifully designed space.",
    image: "/images/process-4.jpg",
  },
];

// ================= APP COMPONENT =================


const App = () => {
  const swiperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(3);

  const currentStep = workSteps[activeStep];

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
                  className="d-block w-100"
                  alt={slide.alt}
                />
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

      {/* =============== ABOUT SECTION START =============== */}
      <section className="interior-about-section">
        <div className="container-lg">
          <div className="row align-items-center g-4 g-xl-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-4">
              <div className="interior-about-content">
                <div className="interior-section-subtitle">
                  <span className="subtitle-mark"></span>
                  WELCOME TO MUKSHA INTERIOR
                </div>

                <h2 className="interior-about-heading">
                  Transforming Spaces with Style & Elegance
                </h2>

                <p className="interior-about-description">
                  Muksha Interior specializes in creating beautiful, functional,
                  and modern spaces tailored to your lifestyle and needs. From
                  residential and commercial interior design to premium
                  decorative products like WPC Louvers, PVC Panels, Fluted
                  Panels, Soft Panels, Grass Mats, and Customized 3D Wallpapers,
                  we bring creativity and quality together to transform every
                  space.
                </p>

                <a href="/" className="interior-discover-btn">
                  <span className="discover-btn-text">Discover More</span>

                  <span className="discover-btn-icon">
                    <i className="fa-solid fa-arrow-up"></i>
                  </span>
                </a>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="col-lg-4">
              <div className="interior-about-image">
                <img
                  src="/img/about.png"
                  alt="Muksha Interior modern residential interior design"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="col-lg-4">
              <div className="interior-features-list">
                {features.map((feature, index) => (
                  <div className="interior-feature-item" key={index}>
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

      {/* =============== SERVICES SECTION START =============== */}

      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
      
            <div className="">
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
          {/* Section heading */}
          <div className="organization-heading">
            <span className="organization-subtitle">
              <span className="organization-subtitle-mark"></span>
              SINCE 1986
            </span>

            <h2>How organization works</h2>
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

      {/* counter start */}

      {/* Product Section Start */}
      <section id="product-sec">
        <div className="container-lg product-sec">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-img">
                  <img
                    src="/img/Warehouse-Racks/1.png"
                    alt="Warehouse Racks"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="product-content text-center">
                  <h5>Warehouse Racks</h5>
                  <a href="/products" className="btn pilco-btn px-4 py-2">
                    View Product
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Add your second product here */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Add your third product here */}
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}

      {/* Advantages Section Start */}
      <section className="advantages-section">
        <div className="container-lg">
          <div className="advantages-wrapper">
            <div className="advantages-content">
              {/* Same subtitle class as About Section */}
              <div className="interior-section-subtitle">
                <span className="subtitle-mark"></span>
                SINCE 1986
              </div>

              {/* Same heading class as About Section */}
              <h2 className="interior-about-heading">
                The advantages of <br /> our company.
              </h2>

              <p>
                We believe that every space should reflect the personality and
                lifestyle of the people who live in it. Our experienced interior
                designers create beautiful, functional, and comfortable
                interiors.
              </p>

              <p>
                From planning and design to final execution, our team focuses on
                quality craftsmanship, creative solutions, and attention to
                every detail to bring your dream space to life.
              </p>

              <img
                src="/img/signature.png"
                alt="Company Signature"
                className="advantages-signature"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Advantages Section End */}

      <Footer />
    </>
  );
};

export default App;
