import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ServicesImage from "../assets/AboutUs/Services.jpg";
import Gallery_1 from "../assets/AboutUs/Gallery_1.jpg";
import Gallery_2 from "../assets/AboutUs/Gallery_2.jpg";
import Gallery_3 from "../assets/AboutUs/Gallery_3.jpg";
import Gallery_4 from "../assets/AboutUs/Gallery_4.jpg";

function AboutUs() {
  return (
    <div className="mt-8 section-container flex flex-col items-center min-h-screen relative mb-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="text-[#1b4a7b] text-5xl mt-6 mb-6 font-bold font-['Inter'] text-center ">
          About Us
        </div>
        <p className="text-black text-2xl font-normal font-['Inter']">
          At Pawfect Daycare, we are passionate about providing a second home
          for your pets where they receive top-quality care and affection.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mb-12 text-center max-w-2xl">
        <div className="text-[#1b4a7b] text-xl mb-4 font-bold font-['Inter'] text-center ">
          MISSION & VISION
        </div>
        <p className="text-black text-xl font-normal font-['Inter']">
          Our mission is to create a safe, nurturing environment for pets where
          they feel loved and cared for while their owners are away. Our vision
          is to become the most trusted pet daycare, driven by a commitment to
          pet wellness and customer satisfaction.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12 text-center max-w-2xl">
        <div className="text-[#1b4a7b] text-xl mb-4 font-bold font-['Inter'] text-center ">
          MEET OUR TEAM
        </div>
        <p className="text-black text-xl font-normal font-['Inter']">
          Our dedicated team of pet lovers and professionals is here to provide
          the best care for your pets. Each team member is trained in animal
          care and first aid, ensuring your pets are in safe hands.
        </p>

        {/* Team Members */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 ">
          <div className="flex flex-col items-center  bg-[#d4edf2] shadow-lg p-6 rounded-lg">
            <h3 className="text-black text-xl font-['Inter'] font-semibold">
              Jane Doe
            </h3>
            <p className="text-black text-lg font-['Inter'] font-normal mt-2">
              Founder & Pet Care Specialist
            </p>
          </div>
          <div className="flex flex-col items-center  bg-[#d4edf2] shadow-lg p-6 rounded-lg">
            <h3 className="text-black text-xl font-['Inter'] font-semibold">
              John Smith
            </h3>
            <p className="text-black text-lg font-['Inter'] font-normal mt-2">
              Grooming Expert & Trainer
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#d4edf2] shadow-lg p-6 rounded-lg">
            <h3 className="text-black text-xl font-['Inter'] font-semibold">
              Emma Brown
            </h3>
            <p className="text-black text-lg font-['Inter'] font-normal mt-2">
              Veterinary Technician
            </p>
          </div>
        </div>
      </div>

      {/* Facility Tour Section */}
      <div className="mb-12 text-center max-w-2xl">
        <div className="text-[#1b4a7b] text-xl mb-4 font-bold font-['Inter'] text-center ">
          FACILITY TOUR
        </div>
        <p className="text-black text-xl font-normal font-['Inter']">
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
        <div className="text-[#1b4a7b] text-xl mb-4 font-bold font-['Inter'] text-center ">
          OUR SERVICES
        </div>
        <ul className="text-black text-xl font-normal font-['Inter']">
          <li>Daycare services with personalized attention</li>
          <li>Professional grooming tailored to your pet's needs</li>
          <li>Health and activity tracking to monitor your pet’s wellness</li>
          <li>Emergency care with on-call veterinarians</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12 text-center max-w-2xl">
        <div className="text-[#1b4a7b] text-xl mb-4 font-bold font-['Inter'] text-center ">
          WHAT OUR CLIENT SAY
        </div>
        <p className="text-black text-xl font-normal font-['Inter']">
          "Pawfect Daycare is amazing! My dog absolutely loves it here." - Alex
          P. "I’m so thankful for the loving staff and the great care they
          provide." - Maria R.
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="mb-12 text-center max-w-2xl">
        <div className="text-[#1b4a7b] text-xl mb-4 font-bold font-['Inter'] text-center ">
          PET PHOTO GALLERY
        </div>
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
        <div className="text-[#1b4a7b] text-xl mb-4 font-bold font-['Inter'] text-center ">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <ul className="text-black text-xl font-normal font-['Inter']">
          <li>What do I need to bring for my pet?</li>
          <li>How are emergencies handled?</li>
          <li>Are vaccinations required?</li>
        </ul>
      </div>

      {/* Contact & Social Media Links */}
      <div className="text-center mt-12 max-w-2xl">
        <div className="text-[#1b4a7b] text-2xl mb-4 font-bold font-['Inter'] text-center ">
          Connect With Us
        </div>
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
