import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    stayDuration: { from: "", to: "" },
    cages: [],
    cageId: "",
    additionalDetails: "",
    selectedCageNumbers: [], // Initialize selectedCageNumbers
    bookingDetails: {
      startDate: "",
      endDate: "",
      singleDay: false,
      multipleDay: false,
    },
  });

  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("reservationData")) || {};

    if (storedData) {
      const selectedCages = storedData.cages || [];
      const serviceDuration = [];

      selectedCages.forEach((cage) => {
        if (cage.fullDay) {
          serviceDuration.push("Full Day");
        } else {
          if (cage.morning) serviceDuration.push("Morning");
          if (cage.afternoon) serviceDuration.push("Afternoon");
        }
      });

      setFormData((prevState) => ({
        ...prevState,
        ownerName: storedData.ownerName || "",
        email: storedData.email || "",
        address: storedData.address || "",
        phoneNumber: storedData.phoneNumber || "",
        emergencyContact: storedData.emergencyContact || "",
        petCategory: storedData.petCategory || "",
        petName: storedData.petName || "",
        petBreed: storedData.petBreed || "",
        catName: storedData.catName || "",
        catBreed: storedData.catBreed || "",
        age: storedData.age || "",
        daycareDuration: storedData.bookingDetails?.multipleDay
          ? "Multiple Day"
          : "Single Day",
        serviceDuration,
        selectedCageNumbers: selectedCages.map((cage) => cage.cageId) || [],
        additionalDetails: storedData.additionalDetails || "",
        bookingDetails: {
          startDate: storedData.bookingDetails?.startDate || "",
          endDate: storedData.bookingDetails?.endDate || "",
          singleDay: storedData.bookingDetails?.singleDay || false,
          multipleDay: storedData.bookingDetails?.multipleDay || false,
        },
        cages: storedData.cages || [],
        cageId: storedData.cageId || "",
      }));
    }
  }, []);

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
        ? [...(prevState[name] || []), value]
        : prevState[name]?.filter((item) => item !== value) || [],
    }));
  };

  const handleFileUpload = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      vaccinationRecords: e.target.files[0],
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Calculate total cost
      const numberOfCages = formData.selectedCageNumbers.length;
      const isMultipleDay = formData.daycareDuration === "Multiple Day";
      const costPerCagePerDay = 100; // Example cost per cage per day
      const totalDays = isMultipleDay
        ? Math.ceil(
            (new Date(formData.bookingDetails.endDate) -
              new Date(formData.bookingDetails.startDate)) /
              (1000 * 60 * 60 * 24)
          ) + 1
        : 1;
      const totalCost = numberOfCages * costPerCagePerDay * totalDays;

      // Create the transformed data for API
      const transformedData = {
        ownerName: formData.ownerName,
        email: formData.email,
        homeaddress: formData.address,
        phoneNumber: formData.phoneNumber,
        emergencyContact: formData.emergencyContact,
        petCategory: formData.petCategory,
        petName: formData.petName || formData.dogName || formData.catName || "", // Handle different pet names
        petBreed:
          formData.petBreed || formData.dogBreed || formData.catBreed || "", // Handle different pet breeds
        age: formData.age,
        bookingDetails: {
          startDate: formData.bookingDetails.startDate,
          endDate: formData.bookingDetails.endDate,
          singleDay: formData.daycareDuration === "Single Day",
          multipleDay: formData.daycareDuration === "Multiple Day",
        },
        cageBookings: formData.cages.map((cage) => ({
          cageId: parseInt(cage.cageId),
          morning: cage.morning,
          afternoon: cage.afternoon,
        })),
        additionalDetails: formData.additionalDetails,
        totalCost,
      };

      await axios.post(
        "http://localhost:8080/api/reservations",
        transformedData
      );
      alert("Reservation submitted successfully!");

      // Navigate to the PaymentPage with the required data
      navigate("/payment", {
        state: { totalCost, bookingDetails: transformedData },
      });

      // Clear localStorage after successful submission
      localStorage.removeItem("reservationData");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert(
        "There was an error submitting your reservation. Please try again."
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-center font-sans font-bold text-2xl mb-4">
        PawFect Reservation
        {console.log(formData)}
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
        {formData.petCategory?.toLowerCase() === "dog" && (
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

        {formData.petCategory?.toLowerCase() === "cat" && (
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
              label="Daycare Duration"
              name="daycareDuration"
              type="text"
              value={formData.daycareDuration}
              onChange={handleInputChange}
              readOnly
            />
            {/* Service Duration */}
            <div className="mb-4 flex justify-between items-center">
              <label className="w-1/3 text-sm font-medium text-gray-700">
                Service Duration
              </label>
              <div className="w-2/3">
                {["Full Day", "Morning", "Afternoon"].map((duration) => (
                  <div key={duration}>
                    <label>
                      <input
                        type="checkbox"
                        name="serviceDuration"
                        value={duration}
                        checked={formData.serviceDuration?.includes(duration)}
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Selected Cage Numbers
          </label>
          <div className="mt-1">
            {formData.selectedCageNumbers &&
            formData.selectedCageNumbers.length > 0 ? (
              <ul>
                {formData.selectedCageNumbers.map((cageNumber) => (
                  <li key={cageNumber}>Cage {cageNumber}</li>
                ))}
              </ul>
            ) : (
              <p>No cages selected.</p>
            )}
          </div>
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
          onClick={handleSubmit}
          className="w-full bg-[#1B4A7B] text-white py-2 px-4 rounded hover:bg-[#58B5C6] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatedReservationForm;
