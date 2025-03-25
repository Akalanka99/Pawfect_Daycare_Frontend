import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const [testimonialData, setTestimonialData] = useState({
    name: "",
    pet: "",
    quote: "",
    rating: 0,
  });

  const [testimonials, setTestimonials] = useState([
    {
      name: "Sarah Johnson",
      pet: "Max, Golden Retriever",
      quote:
        "Pawfect Daycare is amazing! Max loves it here, and I feel completely at ease knowing he's in such caring hands.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      pet: "Whiskers, Tabby Cat",
      quote:
        "The staff is incredibly attentive and loving. Whiskers gets personalized care, and the daily updates are a great touch.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      pet: "Bella, Poodle",
      quote:
        "I was nervous about leaving Bella, but Pawfect Daycare has been wonderful. The facility is clean, and the team is professional.",
      rating: 4,
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all fields",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a valid email address",
      });
      return;
    }

    // Handle form submission (replace with actual API call)
    console.log("Form submitted:", formData);

    // Show success message
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleTestimonialChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setTestimonialData((prevData) => ({
      ...prevData,
      rating: rating,
    }));
  };

  const handleTestimonialSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !testimonialData.name ||
      !testimonialData.pet ||
      !testimonialData.quote ||
      testimonialData.rating === 0
    ) {
      alert("Please fill in all fields and select a rating");
      return;
    }

    // Add new testimonial to the beginning of the list
    setTestimonials([
      {
        name: testimonialData.name,
        pet: testimonialData.pet,
        quote: testimonialData.quote,
        rating: testimonialData.rating,
      },
      ...testimonials,
    ]);

    // Reset form
    setTestimonialData({
      name: "",
      pet: "",
      quote: "",
      rating: 0,
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`text-xl cursor-pointer ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  const renderInteractiveStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        onClick={() => handleRatingChange(index + 1)}
        className={`text-xl cursor-pointer ${
          index < testimonialData.rating ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#1d889d] opacity-70"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center z-10">
          <h1 className="text-5xl font-bold text-[#16385e] mb-6">
            Contact Pawfect Daycare
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions and help you find the perfect
            care for your furry friend.
          </p>
        </div>
      </div>

      {/* Contact Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-['Inter'] text-[#1b4a7b] mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-[#1b4a7b] text-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1b4a7b]">
                      Address
                    </h3>
                    <p className="text-gray-700 text-base">
                      123 Pawfect Street, New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-[#1b4a7b] text-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1b4a7b]">
                      Phone
                    </h3>
                    <p className="text-gray-700 text-base">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[#1b4a7b] text-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1b4a7b]">
                      Email
                    </h3>
                    <p className="text-gray-700 text-base">
                      info@pawfectdaycare.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-[#1b4a7b] text-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1b4a7b]">
                      Hours
                    </h3>
                    <p className="text-gray-700 text-base">
                      Mon-Fri: 7:00 AM - 7:00 PM
                      <br />
                      Sat: 8:00 AM - 5:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-[#1b4a7b] mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://facebook.com"
                    className="text-2xl text-[#1877F2] hover:text-blue-700 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="text-2xl text-[#E4405F] hover:text-pink-700 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-2xl text-[#1DA1F2] hover:text-blue-600 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 bg-[#f1fcfd] p-8 rounded-lg shadow-2xl border-8">
              <h2 className="text-2xl font-bold font-['Inter'] mb-6 text-[#ffa500] hover:[#ff8c00]">
                Let's Connect with PawFect Care!
              </h2>

              {formStatus.submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {formStatus.message}
                </div>
              )}

              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-black font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:border-[#1d889d] focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-black font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:border-[#1d889d] focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-black font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full p-3 border border-gray-300 rounded focus:border-[#1d889d] focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B4A7B] text-white py-3 px-6 rounded-lg hover:bg-[#163c66]  transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b4a7b] mb-4">
              Find Our Location
            </h2>
            <div className="w-24 h-1 bg-[#1d889d] mx-auto mb-8"></div>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.982135354657!2d-73.98325232343172!3d40.74844197138729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689881198651!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1b4a7b] mb-4">
              What Our Pet Parents Say
            </h2>
            <div className="w-24 h-1 bg-[#1d889d] mx-auto mb-8"></div>
          </div>

          {/* Horizontally Scrollable Testimonials */}
          <div className="w-full overflow-x-auto">
            <div className="flex space-x-6 pb-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 italic mb-4 h-24 overflow-y-auto">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-semibold text-[#1b4a7b]">
                    {testimonial.name}
                    <span className="block text-sm text-gray-500">
                      Pet: {testimonial.pet}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Testimonial Submission Form */}
          <div className="bg-white p-8 rounded-lg shadow-md mt-12">
            <h3 className="text-2xl font-bold text-center text-[#1b4a7b] mb-6">
              Share Your Experience
            </h3>
            <form
              onSubmit={handleTestimonialSubmit}
              className="max-w-lg mx-auto"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={testimonialData.name}
                  onChange={handleTestimonialChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="pet" className="block text-gray-700 mb-2">
                  Your Pet's Name and Breed
                </label>
                <input
                  type="text"
                  id="pet"
                  name="pet"
                  value={testimonialData.pet}
                  onChange={handleTestimonialChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Rating</label>
                <div className="flex justify-center mb-4">
                  {renderInteractiveStars()}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="quote" className="block text-gray-700 mb-2">
                  Your Experience
                </label>
                <textarea
                  id="quote"
                  name="quote"
                  value={testimonialData.quote}
                  onChange={handleTestimonialChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1B4A7B] text-white py-3 rounded hover:bg-[#163c66] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
