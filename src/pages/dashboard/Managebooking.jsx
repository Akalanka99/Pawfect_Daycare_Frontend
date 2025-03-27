import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useBookings from "../hooks/useBookings"; // Fetch bookings
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

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
        const res = await axiosSecure.delete(`/api/cage-bookings/${id}`);
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

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Booking Date</th>
              <th>Cage ID</th>
              <th>Morning</th>
              <th>Afternoon</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(bookings) && bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.cageId}</td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.morning ? "Yes" : "No"}</td>
                  <td>{booking.afternoon ? "Yes" : "No"}</td>
                  <td>
                    {/* <Link to={`/admin-dashboard/update-booking/${booking.id}`}>
                      <button className="btn btn-ghost btn-xs bg-blue1 text-white">
                        <FaEdit />
                      </button>
                    </Link> */}
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
                <td colSpan="7" className="text-center">
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
