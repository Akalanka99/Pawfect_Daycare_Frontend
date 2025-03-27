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
<<<<<<< HEAD
    cageId: "",
=======
    cageId:"",
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
    additionalDetails: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("reservationData"));
    if (storedData) {
<<<<<<< HEAD
      setFormData((prevState) => ({
        ...prevState,
        ...storedData,
      }));

      setFormData((prevState) => ({
        ...prevState,
        cageId: storedData.cages[0].cageId, // Replace with your updated value
      }));
      if (storedData.bookingDetails.multipleDay) {
        setFormData((prevState) => ({
          ...prevState,
          daycareDuration: "Multiple Day", // Replace with your updated value
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          daycareDuration: "Single Day", // Replace with your updated value
        }));
      }
    }
=======
      setFormData(prevState => ({
        ...prevState,
        ...storedData
      }));

      setFormData(prevState => ({
        ...prevState,
        cageId:storedData.cages[0].cageId // Replace with your updated value
      }));
      if(storedData.bookingDetails.multipleDay){
        setFormData(prevState => ({
          ...prevState,
          daycareDuration:"Multiple Day" // Replace with your updated value
        }));
      }else{
        setFormData(prevState => ({
          ...prevState,
          daycareDuration:"Single Day" // Replace with your updated value
        }));

      }
}
 
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
<<<<<<< HEAD

    setFormData((prevState) => {
      const updatedData = { ...prevState, [name]: value };

      // Auto-update Daycare Duration based on Stay Duration

      return updatedData;
    });
  };
=======
    
    setFormData((prevState) => {
      const updatedData = { ...prevState, [name]: value };
  
      // Auto-update Daycare Duration based on Stay Duration
  
  
      return updatedData;
    });
  };
  
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: checked
<<<<<<< HEAD
        ? [...(prevState[name] || []), value] // Ensure iterable
=======
         ? [...(prevState[name] || []), value] // Ensure iterable
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
        : prevState[name]?.filter((item) => item !== value) || [], // Filter if it's an array
    }));
  };

  const handleFileUpload = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      vaccinationRecords: e.target.files[0],
    }));
  };

  const navigate = useNavigate();

<<<<<<< HEAD
=======

>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the transformed data for API
    const transformedData = {
      ownerName: formData.ownerName,
      email: formData.email,
      homeaddress: formData.homeaddress,
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
<<<<<<< HEAD
      cageBookings: formData.cages.map((cage) => ({
=======
      cageBookings: formData.cages.map(cage => ({
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
        cageId: parseInt(cage.cageId),
        morning: cage.morning,
        afternoon: cage.afternoon,
      })),

      additionalDetails: formData.additionalDetails,
    };

    try {
<<<<<<< HEAD
      await axios.post(
        "http://localhost:8080/api/reservations",
        transformedData
      );

      console.log("Transformed Data:", transformedData);
      // Clear localStorage after successful submission
      localStorage.removeItem("reservationData");
      navigate("/");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert(
        "There was an error submitting your reservation. Please try again."
      );
=======
      await axios.post("http://localhost:8080/api/reservations", transformedData);
      
      console.log("Transformed Data:", transformedData);
       // Clear localStorage after successful submission
      localStorage.removeItem("reservationData");
      navigate("/");

    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("There was an error submitting your reservation. Please try again.");
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
    }
  };

  return (
<<<<<<< HEAD
=======
   
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
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
          value={formData.homeaddress}
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
              value={formData.petName}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Dog's Breed"
              name="dogBreed"
              type="text"
              value={formData.petBreed}
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
              value={formData.petName}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Cat's Breed"
              name="catBreed"
              type="text"
              value={formData.petBreed}
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
<<<<<<< HEAD
              label="Daycare Duration"
              name="daycareDuration"
              type="text"
              value={formData.daycareDuration}
              onChange={handleInputChange}
              readOnly
=======
               label="Daycare Duration"
               name="daycareDuration"
               type="text"
               value={formData.daycareDuration}
               onChange={handleInputChange}
               readOnly
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
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

<<<<<<< HEAD
=======
        

>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
        <InputField
          label="Cage Number"
          name="cageNo"
          type="number"
          value={formData.cageId}
          onChange={handleInputChange}
          required
        />

        {/* Optional Grooming Services */}
        {/* <div className="mb-4 flex justify-between items-center">
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
        </div> */}

        {/* File Upload */}
<<<<<<< HEAD

=======
        
>>>>>>> bce6f7b9dabf9c0d8418b554041e94d1310f4a36
        {/* <div className="mb-4 flex justify-between items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Vaccination Records
          </label>
          <input
            type="file"
            name="vaccinationRecords"
            className="w-2/3"
            onChange={handleFileUpload}
          />
        </div> */}

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
