import React from "react";
import { useNavigate } from "react-router-dom";
import ServicesImage from "../assets/AboutUs/Services.jpg";
import Gallery_1 from "../assets/AboutUs/Gallery_1.jpg";
import Gallery_2 from "../assets/AboutUs/Gallery_2.jpg";
import Gallery_3 from "../assets/AboutUs/Gallery_3.jpg";
import Gallery_4 from "../assets/AboutUs/Gallery_4.jpg";
import JaneDoe from "../assets/AboutUs/Jane Doe.jpg";
import JohnSmith from "../assets/AboutUs/John Smith.jpg";
import EmmaBrown from "../assets/AboutUs/Emma Brown.jpg";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-sans">
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#1d889d]  opacity-70"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center z-10">
          <h1 className="text-5xl font-bold text-[#16385e] mb-6">
            About Pawfect Daycare
          </h1>
          <div className="w-24 h-1 mx-auto mb-8"></div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            At Pawfect Daycare, we are passionate about providing a second home
            for your pets where they receive top-quality care and affection.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section - Two Column Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1b4a7b] text-center mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to create a safe, nurturing environment for pets
                where they feel loved and cared for while their owners are away.
                We strive to provide exceptional care that addresses the unique
                needs of each pet, ensuring their physical and emotional
                wellbeing.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1b4a7b] text-center mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to become the most trusted pet daycare, driven by
                a commitment to pet wellness and customer satisfaction. We aim
                to set the industry standard for quality pet care by
                continuously improving our services and facilities while
                maintaining the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b4a7b] mb-4">
              Meet Our Expert Team
            </h2>
            <div className="w-24 h-1 bg-[#1d889d] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our dedicated team of pet lovers and professionals is here to
              provide the best care for your pets. Each team member is trained
              in animal care and first aid, ensuring your pets are in safe
              hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={JaneDoe}
                alt="Jane Doe"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1b4a7b] mb-2">
                  Jane Doe
                </h3>
                <p className="text-gray-500 mb-4">
                  Founder & Pet Care Specialist
                </p>
                <p className="text-gray-700">
                  With over 15 years of experience in animal care, Jane ensures
                  that every pet receives exceptional attention and care.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={JohnSmith}
                alt="John Smith"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1b4a7b] mb-2">
                  John Smith
                </h3>
                <p className="text-gray-500 mb-4">Grooming Expert & Trainer</p>
                <p className="text-gray-700">
                  John's gentle approach and expertise in pet grooming and
                  training makes him a favorite among our four-legged clients.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={EmmaBrown}
                alt="Emma Brown"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1b4a7b] mb-2">
                  Emma Brown
                </h3>
                <p className="text-gray-500 mb-4">Veterinary Technician</p>
                <p className="text-gray-700">
                  Emma's medical background ensures all pets receive proper
                  healthcare monitoring and immediate attention when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Tour Section with Full-width Image */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b4a7b] mb-4">
              Our State-of-the-Art Facility
            </h2>
            <div className="w-24 h-1 bg-[#1d889d] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={ServicesImage}
                alt="Facility Tour"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1b4a7b] mb-4">
                Designed with Pets in Mind
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our facility features safe play areas, comfortable rest zones,
                and professional grooming stations. We've designed every inch of
                our space to ensure your pets feel at home while providing all
                the amenities needed for their comfort and enjoyment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We maintain rigorous cleanliness standards with regular
                sanitization, giving you complete peace of mind while your pets
                are in our care.
              </p>
              <button
                onClick={() => navigate("/services")}
                className="mt-8 bg-[#1b4a7b] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Icons */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b4a7b] mb-4">
              Comprehensive Pet Services
            </h2>
            <div className="w-24 h-1 bg-[#728386] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a range of professional services designed to keep your
              pets happy, healthy, and thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                {/* Replace with actual icon component */}
                <div className="w-8 h-8 bg-[#1b4a7b] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1b4a7b] mb-3">
                  Personalized Daycare
                </h3>
                <p className="text-gray-700">
                  We provide daycare services with personalized attention to
                  each pet, ensuring they receive care tailored to their unique
                  needs and preferences throughout their stay with us.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                {/* Replace with actual icon component */}
                <div className="w-8 h-8 bg-[#1b4a7b] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1b4a7b] mb-3">
                  Professional Grooming
                </h3>
                <p className="text-gray-700">
                  Our professional grooming services are tailored to your pet's
                  needs, using premium products and techniques to keep them
                  looking and feeling their best.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                {/* Replace with actual icon component */}
                <div className="w-8 h-8 bg-[#1b4a7b] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1b4a7b] mb-3">
                  Health & Activity Tracking
                </h3>
                <p className="text-gray-700">
                  We closely monitor your pet's health and activities, providing
                  you with regular updates and ensuring their wellbeing during
                  their time with us.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                {/* Replace with actual icon component */}
                <div className="w-8 h-8 bg-[#1b4a7b] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1b4a7b] mb-3">
                  Emergency Care
                </h3>
                <p className="text-gray-700">
                  For your peace of mind, we have emergency care protocols in
                  place with on-call veterinarians available to provide
                  immediate assistance if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Stylish Design */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b4a7b] mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-[#1d889d] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="text-6xl text-blue-200 absolute top-4 left-4">
                "
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-6">
                Pawfect Daycare is amazing! My dog absolutely loves it here. The
                staff treats him like family, and I can always see how happy he
                is when I pick him up at the end of the day.
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-[#1b4a7b]">Alex P.</p>
                  <p className="text-gray-500 text-sm">Dog Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="text-6xl text-blue-200 absolute top-4 left-4">
                "
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-6">
                I'm so thankful for the loving staff and the great care they
                provide. My cat is usually shy around strangers, but she warmed
                up to the team quickly. I can tell she feels safe and
                comfortable there.
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-[#1b4a7b]">Maria R.</p>
                  <p className="text-gray-500 text-sm">Cat Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery with Improved Layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b4a7b] mb-4">
              Pet Photo Gallery
            </h2>
            <div className="w-24 h-1 bg-[#1d889d] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Take a peek at some of our happy furry friends enjoying their time
              at Pawfect Daycare.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={Gallery_1}
                alt="Pet at our daycare"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={Gallery_2}
                alt="Pet playing at our facility"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={Gallery_3}
                alt="Pet relaxing in our care"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={Gallery_4}
                alt="Pet enjoying our daycare"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion Style */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b4a7b] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#1d889d] mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1b4a7b] mb-3">
                What do I need to bring for my pet?
              </h3>
              <p className="text-gray-700">
                We recommend bringing your pet's favorite toy or blanket, their
                regular food, any medications they may need, and their
                vaccination records for their first visit. This helps us ensure
                they feel comfortable and receive proper care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1b4a7b] mb-3">
                How are emergencies handled?
              </h3>
              <p className="text-gray-700">
                In case of an emergency, our staff is trained in pet first aid.
                We also have partnerships with local veterinarians who are on
                call for immediate assistance. We will contact you right away if
                any issues arise with your pet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1b4a7b] mb-3">
                Are vaccinations required?
              </h3>
              <p className="text-gray-700">
                Yes, we require all pets to be up-to-date on their vaccinations
                to ensure the safety of all animals in our care. Please bring
                your pet's vaccination records on your first visit or email them
                to us beforehand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
