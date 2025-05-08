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
    serviceDuration: [],
    selectedCageNumbers: [],
    bookingDetails: {
      startDate: "",
      endDate: "",
      singleDay: false,
      multipleDay: false,
    },
    additionalDetails: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("reservationData")) || {};
    if (storedData) {
      const selectedCages = storedData.cages || [];
      const serviceDuration = selectedCages.map((cage) =>
        cage.fullDay
          ? "Full Day"
          : cage.morning
          ? "Morning"
          : cage.afternoon
          ? "Afternoon"
          : ""
      );

      setFormData({
        ...formData,
        ...storedData,
        daycareDuration: storedData.bookingDetails?.multipleDay
          ? "Multiple Day"
          : "Single Day",
        serviceDuration,
        selectedCageNumbers: selectedCages.map((cage) => cage.cageId),
      });
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

  const calculateTotalCost = () => {
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
    return numberOfCages * costPerCagePerDay * totalDays;
  };

  const validateForm = () => {
    const requiredFields = [
      "ownerName",
      "email",
      "address",
      "phoneNumber",
      "emergencyContact",
      "petCategory",
      "age",
      "daycareDuration",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field} field.`);
        return false;
      }
    }
    if (!formData.selectedCageNumbers.length) {
      alert("Please select at least one cage.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const totalCost = calculateTotalCost();

    const transformedData = {
      ownerName: formData.ownerName,
      email: formData.email,
      address: formData.address, // Corrected field name
      phoneNumber: formData.phoneNumber,
      emergencyContact: formData.emergencyContact,
      petCategory: formData.petCategory,
      petName: formData.petName,
      petBreed: formData.petBreed,
      age: formData.age,
      bookingDetails: {
        startDate: formData.bookingDetails.startDate,
        endDate: formData.bookingDetails.endDate,
        singleDay: formData.daycareDuration === "Single Day",
        multipleDay: formData.daycareDuration === "Multiple Day",
      },
      cageBookings: formData.selectedCageNumbers.map((cageId) => ({
        cageId: parseInt(cageId),
      })),
      additionalDetails: formData.additionalDetails,
      totalCost,
    };

    try {
      await axios.post(
        "http://localhost:8080/api/reservations",
        transformedData
      );
      alert("Reservation submitted successfully!");
      localStorage.removeItem("reservationData");
      navigate("/payment", {
        state: { totalCost, bookingDetails: transformedData },
      });
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
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Fill in your pet's details, and we'll make sure they have a paw-some
        stay!
      </p>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Owner's Name"
          name="ownerName"
          type="text"
          value={formData.ownerName}
          onChange={handleInputChange}
          required
        />
        {/* Other input fields */}
        <button
          type="submit"
          className="w-full bg-[#1B4A7B] text-white py-2 px-4 rounded hover:bg-[#58B5C6] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatedReservationForm;
