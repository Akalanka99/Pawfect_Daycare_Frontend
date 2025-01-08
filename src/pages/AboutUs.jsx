import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
}from "@fortawesome/free-brands-svg-icons"; 
import ServicesImage from "../assets/AboutUs/Services.jpg";
import Gallery_1 from "../assets/AboutUs/Gallery_1.jpg";
import Gallery_2 from "../assets/AboutUs/Gallery_2.jpg";
import Gallery_3 from "../assets/AboutUs/Gallery_3.jpg";
import Gallery_4 from "../assets/AboutUs/Gallery_4.jpg";

function AboutUs() {
  return (
    <div className="section-container bg-gradient-to-r from-[#FFE5C9] to-[#F2EFDE] flex flex-col items-center min-h-screen py-16 px-6 md:px-20 lg:px-40">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold"
          style={{ color: "#C97F05", fontFamily: "Lora" }}
        >
          About Us
        </h1>
        <p className="text-xl text-[#000000] mt-4 font-thin font-serif">
          At Pawfect Daycare, we are passionate about providing a second home
          for your pets where they receive top-quality care and affection.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#C97F05" }}>
          Our Mission & Vision
        </h2>
        <p className="text-lg text-[#000000] mt-2 font-serif">
          Our mission is to create a safe, nurturing environment for pets where
          they feel loved and cared for while their owners are away. Our vision
          is to become the most trusted pet daycare, driven by a commitment to
          pet wellness and customer satisfaction.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#C97F05" }}>
          Meet Our Team
        </h2>
        <p className="text-lg text-[#000000] mt-2 font-serif">
          Our dedicated team of pet lovers and professionals is here to provide
          the best care for your pets. Each team member is trained in animal
          care and first aid, ensuring your pets are in safe hands.
        </p>

        {/* Team Members */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="flex flex-col items-center bg-[#FFF7EA] shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Jane Doe</h3>
            <p className="text-center mt-2">Founder & Pet Care Specialist</p>
          </div>
          <div className="flex flex-col items-center bg-[#FFF7EA] shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold">John Smith</h3>
            <p className="text-center mt-2">Grooming Expert & Trainer</p>
          </div>
          <div className="flex flex-col items-center bg-[#FFF7EA] shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Emma Brown</h3>
            <p className="text-center mt-2">Veterinary Technician</p>
          </div>
        </div>
      </div>

      {/* Facility Tour Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#C97F05" }}>
          Facility Tour
        </h2>
        <p className="text-lg text-[#000000] mt-2 font-serif">
          Take a look at our state-of-the-art facility, equipped with safe play
          areas, comfortable rest zones, and grooming stations.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={ServicesImage}
            alt="Facility Tour"
            className="w-60 h-60 mt-4 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Core Services Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#C97F05" }}>
          Our Services
        </h2>
        <ul className="list-disc pl-8 text-lg text-[#000000] mt-4 font-serif">
          <li>Daycare services with personalized attention</li>
          <li>Professional grooming tailored to your pet&quot;s needs</li>
          <li>Health and activity tracking to monitor your pet&quot;s wellness</li>
          <li>Emergency care with on-call veterinarians</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#C97F05" }}>
          What Our Clients Say
        </h2>
        <p className="text-lg text-[#000000] mt-4 font-serif">
        &quot;Pawfect Daycare is amazing! My dog absolutely loves it here.&quot; - Alex
          P.<br></br>&quot;I&#39;m so thankful for the loving staff and the great care they
          provide.&quot; - Maria R.
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#C97F05" }}>
          Pet Photo Gallery
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <img
            src={Gallery_1}
            alt="Facility Tour"
            className="w-60 h-60 mt-4 rounded-lg shadow-lg"
          />
          <img
            src={Gallery_2}
            alt="Facility Tour"
            className="w-60 h-60 mt-4 rounded-lg shadow-lg"
          />
          <img
            src={Gallery_3}
            alt="Facility Tour"
            className="w-60 h-60 mt-4 rounded-lg shadow-lg"
          />
          <img
            src={Gallery_4}
            alt="Facility Tour"
            className="w-60 h-60 mt-4 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#C97F05" }}>
          Frequently Asked Questions
        </h2>
        <ul className="list-disc pl-8 text-lg text-[#000000] mt-4 font-serif">
          <li>What do I need to bring for my pet?</li>
          <li>How are emergencies handled?</li>
          <li>Are vaccinations required?</li>
        </ul>
      </div>

      {/* Contact & Social Media Links */}
      <div className="text-center mt-12 max-w-2xl">
        <h2 className="text-2xl font-semibold" style={{ color: "#C97F05" }}>
          Connect With Us
        </h2>
        <p className="text-lg text-[#000000] mt-2 font-serif">
          Follow us on social media for updates, events, and more!
        </p>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-[#1877F2]"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-[#E4405F]"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-[#1DA1F2]"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;