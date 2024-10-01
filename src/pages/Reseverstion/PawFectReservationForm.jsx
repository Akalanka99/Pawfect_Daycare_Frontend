import React, { useState } from "react";
import { Calendar } from "lucide-react";

const InputField = ({ label, ...props }) => (
  <div className="mb-4 flex justify-between items-center">
    <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label>
    <input className="w-2/3 p-2 border border-gray-300 rounded" {...props} />
  </div>
);

const PawFectReservationForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [petCategory, setPetCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-center font-sans font-bold text-2xl mb-4">
        PawFect Reservation
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Fill in your pet's details, and we'll make sure they have a paw-some
        stay!
      </p>
      <form onSubmit={handleSubmit}>
        <InputField label="Owner's Name" type="text" required />
        <InputField label="E-mail Address" type="email" required />
        <InputField label="Home Address" type="text" required />
        <InputField label="Phone Number" type="tel" required />
        <div className="mb-4 flex justify-between items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Emergency Contact
          </label>
          <div className="w-2/3">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              required
            />
            <p className="text-xs text-gray-500 mt-2 text-center">
              (Provide name and contact number in case of emergency)
            </p>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Pet Category
          </label>
          <select
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
            value={petCategory}
            onChange={(e) => setPetCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        {petCategory === "dog" && (
          <>
            <InputField label="Dog's Name" type="text" required />
            <InputField label="Dog's Breed" type="text" required />
          </>
        )}

        {petCategory === "cat" && (
          <>
            <InputField label="Cat's Name" type="text" required />
            <InputField label="Cat's Breed" type="text" required />
          </>
        )}

        <InputField label="Age" type="number" />

        <div className="mb-4 flex justify-between items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Vaccination Records
          </label>
          <div className="w-2/3 flex items-center">
            <input
              type="file"
              className="p-2 border border-gray-300 rounded mr-2"
              accept=".pdf, .jpg, .jpeg, .png"
              required
            />
            <button className="bg-[#EBB206] text-white py-1 px-3 rounded hover:bg-[#012142] transition duration-300">
              Upload
            </button>
          </div>
        </div>

        <InputField label="DayCare Date" type="date" required />

        <div className="mb-4 flex items-start">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Service Duration
          </label>
          <div className="w-2/3">
            <div className="flex items-center mb-2 text-sm">
              <input
                type="radio"
                id="full-time"
                name="duration"
                className="mr-2"
                required
              />
              <label htmlFor="full-time">
                Full Time (8:00 A.M. - 6:00 P.M.)
              </label>
            </div>
            <div className="flex items-center text-sm">
              <input
                type="radio"
                id="half-time"
                name="duration"
                className="mr-2"
              />
              <label htmlFor="half-time">
                Half Time (8:00 A.M. - 12:00 P.M. or 1:00 P.M. - 6:00 P.M.)
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-start">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Daycare Duration
          </label>
          <div className="w-2/3 flex">
            <div className="flex flex-col mr-12">
              {" "}
              <label className="text-sm font-medium text-gray-600 mb-1">
                From:
              </label>
              <input
                type="date"
                className="p-2 border border-gray-300 rounded"
                placeholder="From"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                To:
              </label>
              <input
                type="date"
                className="p-2 border border-gray-300 rounded"
                placeholder="To"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-start">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Optional Grooming Services
          </label>
          <div className="w-2/3 flex flex-wrap">
            <div className="w-1/2 mb-2 text-sm">
              <input type="checkbox" id="nail-trim" className="mr-2" />
              <label htmlFor="nail-trim">Nail Trim</label>
            </div>
            <div className="w-1/2 mb-2 text-sm">
              <input type="checkbox" id="bath" className="mr-2" />
              <label htmlFor="bath">Bath</label>
            </div>
            <div className="w-1/2 mb-2 text-sm">
              <input type="checkbox" id="hair-trim" className="mr-2" />
              <label htmlFor="hair-trim">Hair Trim</label>
            </div>
            <div className="w-1/2 mb-2 text-sm">
              <input type="checkbox" id="health-check" className="mr-2" />
              <label htmlFor="health-check">Health check-ups</label>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-start">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Additional Care Details
          </label>
          <textarea
            className="w-2/3 p-2 border border-gray-300 rounded"
            rows="3"
            placeholder="Share any dietary needs, health concerns, or special care instructions for your pet"
          ></textarea>
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="agree-terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="agree-terms" className="text-sm text-gray-700 ">
            I acknowledge that I have read and agree to the terms and conditions
            of the daycare service, and I confirm that all information provided
            is accurate to the best of my knowledge.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF5722] text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          disabled={!agreeTerms}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PawFectReservationForm;