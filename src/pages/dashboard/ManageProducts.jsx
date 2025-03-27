import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useProducts from "../hooks/useProducts";
import useAxiosPublic from "../hooks/useAxiosPublic";

const ManageProducts = () => {
  const [product, loading, refetch] = useProducts();
  const axiosSecure = useAxiosPublic();
  

  // Handle product deletion
  const handleDeleteProduct = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/api/product/${productId}`);
          if (res) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "The product has been removed.",
              icon: "success",
            });
          }
      }
    });
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Manage <span className="text-black">Products</span>
      </h2>
      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Ensure products is an array */}
            {Array.isArray(product) && product.length > 0 ? (
              product.map((product, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.image} alt="Product" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.name}</td>
                  <td>Rs.{product.price}</td>
                  <td>
                    <Link to={`/admin-dashboard/update-product/${product.id}`}>
                      <button className="btn btn-ghost btn-xs bg-blue1 text-white">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="btn btn-ghost btn-xs text-red"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">  
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
