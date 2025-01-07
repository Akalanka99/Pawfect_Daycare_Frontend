import React, { useState } from "react";

const InputField = ({ label, name, value, onChange, ...props }) => (
  <div className="mb-4 flex justify-between items-center">
    <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label>
    <input
      className="w-2/3 p-2 border border-gray-300 rounded"
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);

const UpdatedReservationForm = () => {
  const [petCategory, setPetCategory] = useState("");
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    address: "",
    phoneNumber: "",
    emergencyContact: "",
    petCategory: "",
    dogName: "",
    dogBreed: "",
    catName: "",
    catBreed: "",
    age: "",
    daycareDuration: "",
    daycareDate: "",
    serviceDuration: [],
    stayDuration: [],
    cageNo: "",
    groomingServices: [],
    vaccinationRecords: null,
    additionalDetails: "",
  });
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked
        ? [...prevState[name], value]
        : prevState[name].filter((item) => item !== value),
    }));
  };

  const handleFileUpload = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      vaccinationRecords: e.target.files[0],
    }));
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
      <form>
        <InputField
          label="Owner's Name"
          name="ownerName"
          type="text"
          value={formData.ownerName}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="E-mail Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Home Address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Emergency Contact"
          name="emergencyContact"
          type="text"
          value={formData.emergencyContact}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Pet Category"
          name="petCategory"
          type="text"
          value={formData.petCategory}
          onChange={handleInputChange}
          placeholder="Enter 'Dog' or 'Cat'"
          required
        />

        {/* Pet Details */}
        {formData.petCategory.toLowerCase() === "dog" && (
          <>
            <InputField
              label="Dog's Name"
              name="dogName"
              type="text"
              value={formData.dogName}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Dog's Breed"
              name="dogBreed"
              type="text"
              value={formData.dogBreed}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        {formData.petCategory.toLowerCase() === "cat" && (
          <>
            <InputField
              label="Cat's Name"
              name="catName"
              type="text"
              value={formData.catName}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Cat's Breed"
              name="catBreed"
              type="text"
              value={formData.catBreed}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        <InputField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleInputChange}
          required
        />

        <InputField
          label="Daycare Duration"
          name="daycareDuration"
          type="text"
          value={formData.daycareDuration}
          onChange={handleInputChange}
          placeholder="Enter 'Single Day' or 'Multiple Day'"
          required
        />

        {/* Duration Details */}
        {formData.daycareDuration === "Single Day" && (
          <>
            <InputField
              label="Daycare Date"
              name="daycareDate"
              type="date"
              value={formData.daycareDate}
              onChange={handleInputChange}
              required
            />
            {/* Service Duration */}
            <div className="mb-4 flex justify-between items-center">
              <label className="w-1/3 text-sm font-medium text-gray-700">
                Service Duration
              </label>
              <div className="w-2/3">
                {["Full Time", "Morning", "Afternoon"].map((duration) => (
                  <div key={duration}>
                    <label>
                      <input
                        type="checkbox"
                        name="serviceDuration"
                        value={duration}
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-2">{duration}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {formData.daycareDuration === "Multiple Day" && (
          <div className="mb-4 flex justify-between items-center">
            <label className="w-1/3 text-sm font-medium text-gray-700">
              Stay Duration:
            </label>
            <div className="flex items-center space-x-12 w-2/3">
              {/* From Date */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-600">From:</label>
                <input
                  type="date"
                  name="stayDuration"
                  value={formData.stayDuration}
                  onChange={handleInputChange}
                  className="p-2 border rounded-lg"
                />
              </div>

              {/* To Date */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-600">To:</label>
                <input
                  type="date"
                  name="stayDuration"
                  value={formData.stayDuration}
                  onChange={handleInputChange}
                  className="p-2 border rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        <InputField
          label="Cage Number"
          name="cageNo"
          type="number"
          value={formData.cageNo}
          onChange={handleInputChange}
          required
        />

        {/* Optional Grooming Services */}
        <div className="mb-4 flex justify-between items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Optional Grooming Services
          </label>
          <div className="w-2/3">
            {["Nail Trim", "Bath", "Hair Trim", "Health check-ups"].map(
              (service) => (
                <div key={service}>
                  <label>
                    <input
                      type="checkbox"
                      name="groomingServices"
                      value={service}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2">{service}</span>
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-4 flex justify-between items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Vaccination Records
          </label>
          <input
            type="file"
            name="vaccinationRecords"
            className="w-2/3"
            onChange={handleFileUpload}
          />
        </div>

        <InputField
          label="Additional Care Details"
          name="additionalDetails"
          type="text"
          value={formData.additionalDetails}
          onChange={handleInputChange}
          placeholder="Share any dietary needs or special care instructions."
        />

        <div className="mb-4">
          <label className="text-sm text-gray-700">
            <input type="checkbox" required className="mr-2" />I acknowledge and
            agree to the terms and conditions of the daycare service.
          </label>
        </div>

        <button
          type="button"
          className="w-full bg-[#1B4A7B] text-white py-2 px-4 rounded hover:bg-[#58B5C6] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatedReservationForm;
