import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlug } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const API_URL = process.env.VITE_API_URL;

const UpdateProduct = () => {
  const loadedItem = useLoaderData(); // Load product data
  const [item, setItem] = useState(null);
  const [previewImage, setPreviewImage] = useState();

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (loadedItem) {
      console.log(loadedItem);

      setItem(loadedItem);
      reset(loadedItem); // Populate form with existing data
    }
  }, [loadedItem, reset]);

  if (!item) {
    return <p>Loading product data...</p>; // Show loading state
  }

  // Image Hosting API Key
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(data.image.length);

    try {
      let imageUrl = item.image; // Keep existing image by default

      // Check if new image is selected
      if (data.image !== item.image) {
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
          imageUrl = imgUploadResponse.data.data.display_url;
        } else {
          throw new Error("Image upload failed");
        }
      }

      // Prepare product data for backend
      const updatedProduct = {
        id: item.id, // Ensure we pass the correct ID
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        description: data.description,
        image: imageUrl,
      };

      // Send update request to backend
      const response = await axios.put(
        `http://localhost:8080/api/product/${item.id}`,
        updatedProduct
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Product Updated!",
          text: "Your product has been updated successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/Admin-dashboard/manage-product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">Update Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name*</span>
          </label>
          <input
            type="text"
            defaultValue={item.name}
            {...register("name", { required: true })}
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
              defaultValue={item.category}
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
              defaultValue={item.price}
              {...register("price", { required: true })}
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
            defaultValue={item.description}
            className="textarea textarea-bordered h-24"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Upload Image*</span>
          </label>

          {/* Show preview: Initially the item's image, then the new uploaded image */}
          <div className="mb-4">
            <img
              src={previewImage || item.image}
              alt="Product Preview"
              className="w-32 h-32 object-cover rounded-md border border-gray-300"
            />
          </div>

          {/* File Input */}
          <input
            {...register("image")}
            type="file"
            className="file-input w-full max-w-xs"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file); // Generate temporary preview URL
                setPreviewImage(imageUrl);
              }
            }}
          />
        </div>

        {/* Submit Button */}
        <button className="btn bg-blue-500 text-white px-6">
          Update Product <FaPlug />
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
