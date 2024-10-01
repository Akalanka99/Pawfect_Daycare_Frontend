import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const InputField = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input className="w-full p-2 border border-gray-300 rounded" {...props} />
  </div>
);

const PawFectReservationForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="bg-navy-900 py-4 -mx-6 -mt-6 mb-6 text-center">
        <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center">
          <span className="text-navy-900 text-2xl font-bold">PR</span>
        </div>
        <h1 className="text-2xl font-bold text-white mt-2">PawFect Reservation</h1>
      </div>
      <p className="text-sm text-gray-600 mb-6 text-center">Fill in your pet's details, and we'll make sure they have a paw-some stay!</p>
      <form onSubmit={handleSubmit}>
        <InputField label="Owner's Name" type="text" required />
        <InputField label="E-mail Address" type="email" required />
        <InputField label="Home Address" type="text" required />
        <InputField label="Phone Number" type="tel" required />
        <InputField label="Emergency Contact" type="text" required />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Pet Category</label>
          <select className="w-full p-2 border border-gray-300 rounded" required>
            <option>Select category</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Other</option>
          </select>
        </div>
        <InputField label="Dog's Name" type="text" />
        <InputField label="Dog's Breed" type="text" />
        <InputField label="Cat's Name" type="text" />
        <InputField label="Cat's Breed" type="text" />
        <InputField label="Age" type="number" />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Vaccination Records</label>
          <div className="flex items-center">
            <input type="radio" id="yes" name="vaccination" className="mr-2" />
            <label htmlFor="yes" className="mr-4">Yes</label>
            <input type="radio" id="no" name="vaccination" className="mr-2" />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Note</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="3"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Duration</label>
          <div className="flex items-center">
            <Calendar className="mr-2 text-gray-500" />
            <input type="date" className="p-2 border border-gray-300 rounded mr-2" />
            <input type="time" className="p-2 border border-gray-300 rounded" />
          </div>
        </div>
        <InputField label="Dropoff Date" type="date" />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Optional Grooming Services</label>
          <div className="flex flex-wrap">
            <div className="w-1/2 mb-2">
              <input type="checkbox" id="nail-trim" className="mr-2" />
              <label htmlFor="nail-trim">Nail Trim</label>
            </div>
            <div className="w-1/2 mb-2">
              <input type="checkbox" id="bath" className="mr-2" />
              <label htmlFor="bath">Bath</label>
            </div>
            <div className="w-1/2">
              <input type="checkbox" id="haircut" className="mr-2" />
              <label htmlFor="haircut">Haircut</label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Care Details</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="3"></textarea>
        </div>
        <div className="mb-6">
          <input
            type="checkbox"
            id="agree-terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="agree-terms" className="text-sm text-gray-700">
            I acknowledge that I have read and agree to the terms and conditions of this daycare.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          disabled={!agreeTerms}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PawFectReservationForm;