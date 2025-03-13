import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // Image Hosting API Key (from .env file)
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    try {
      // Check if an image is selected
      if (!data.image || data.image.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "No Image Selected",
          text: "Please select an image to upload.",
        });
        return;
      }

      const imageFile = data.image[0];

      // Validate if the file is an image
      if (!imageFile.type.startsWith("image/")) {
        Swal.fire({
          icon: "error",
          title: "Invalid File Type",
          text: "Please upload a valid image file (JPG, PNG, etc.).",
        });
        return;
      }

      // Upload Image to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgUploadResponse = await axios.post(image_hosting_api, formData);

      if (imgUploadResponse.data.success) {
        // Prepare product data for backend
        const newProduct = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          description: data.description,
          image: imgUploadResponse.data.data.display_url, // Image URL from ImgBB
        };

        // Send product data to backend
        const response = await axios.post(
          "http://localhost:8080/api/product",
          newProduct
        );

        if (response.status === 200) {
          reset(); // Reset form
          Swal.fire({
            icon: "success",
            title: "Product Added!",
            text: "Your product has been added successfully.",
            timer: 1500,
            showConfirmButton: false,
          });
          navigate("/Admin-dashboard/add-shop");
        }
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">Add New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter product name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category & Price */}
        <div className="flex items-center gap-4">
          {/* Category */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
              defaultValue="default"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="food">Food</option>
              <option value="toys">Toys</option>
              <option value="accessories">Accessories</option>
              <option value="grooming">Grooming</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Enter price"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description*</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Upload Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        {/* Submit Button */}
        <button className="btn bg-blue-500 text-white px-6">
          Add Product <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
