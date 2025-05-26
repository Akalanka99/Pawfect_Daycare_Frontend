import React, { useEffect, useState } from "react";
const API_URL=process.env.VITE_API_URL;

const Shop = () => {
  const [shop, setShop] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Load data from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/product`); // Adjust the URL based on your backend setup
        const data = await response.json();
        setShop(data);
        setFilteredItems(data);
        console.log("Fetched Shop Data:", data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Filter items based on category
  const filterItems = (category) => {
    setSelectedCategory(category);
    console.log("Filtering by category:", category);

    if (category === "all") {
      setFilteredItems(shop);
    } else {
      const filtered = shop.filter((item) => item.category.toLowerCase() === category);
      console.log("Filtered items:", filtered);
      setFilteredItems(filtered);
    }
  };

  return (
    <div>
      {/* Welcome Section with Blurred Background */}
      <div className="relative flex flex-col md:flex-row-reverse justify-between items-center gap-8 p-10 min-h-[50vh]">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/Petshop.jpg')" }}
        ></div>

        {/* Content Section */}
        <div className="flex items-center justify-center h-screen px-4">
          <div className="relative md:w-3/4 md:text-left space-y-7 px-4">
            <h2 className="text-3xl font-bold text-center text-[#1B4A7B] drop-shadow-lg">
              Welcome to Our Pet Shop
            </h2>
            <p className="text-xl text-black leading-relaxed drop-shadow-lg">
              Providing a nurturing environment where your pets are pampered, loved,
              and cared for as our own, ensuring they thrive, play, and feel right
              at home every day.
            </p>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <div className="p-10 mt-12">
        {/* Filtering Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          {["all", "food", "toys", "accessories", "grooming"].map((category) => (
            <button
              key={category}
              onClick={() => filterItems(category)}
              className={`px-6 py-2 rounded-full font-semibold ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {category.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>

        {/* Display Filtered Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-12 py-10 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
                {/* Product Image */}
                <img
                  src={item.image} // Assuming 'image' is part of your product object
                  alt={item.name}
                  className="w-full h-72 object-cover rounded-md"
                  onError={(e) => (e.target.src = "/images/default.jpg")}
                />
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-blue-500 font-bold mt-2">Rs.{item.price}</p>
              </div>
            ))
          ) : (
            <p className="text-black text-center col-span-3">No items found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
