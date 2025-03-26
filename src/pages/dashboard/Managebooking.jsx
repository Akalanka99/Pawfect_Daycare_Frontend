import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useBookings from "../hooks/useBookings"; // Custom hook for fetching bookings
import useAxiosPublic from "../hooks/useAxiosPublic";

const ManageBooking = () => {
  const [bookings, loading, refetch] = useBookings(); // Fetch booking data
  const axiosSecure = useAxiosPublic();

  // Handle booking deletion
  const handleDeleteBooking = (bookingId) => {
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
        const res = await axiosSecure.delete(`/api/bookings/${bookingId}`);
        if (res) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "The booking has been removed.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Manage <span className="text-black">Bookings</span>
      </h2>
      {/* Booking Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Cage ID</th>
              <th>Time</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Ensure bookings is an array */}
            {Array.isArray(bookings) && bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{booking.date}</td>
                  <td>{booking.cageId}</td>
                  <td>{booking.time}</td>
                  <td>
                    <Link to={`/admin-dashboard/update-booking/${booking.id}`}>
                      <button className="btn btn-ghost btn-xs bg-blue1 text-white">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteBooking(booking.id)}
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
                  No bookings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
