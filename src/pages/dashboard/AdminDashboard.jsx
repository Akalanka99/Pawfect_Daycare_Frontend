import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import {
  FaEdit,
  FaPlusCircle,
  FaQuestionCircle,
  FaRegUser,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../../components/context/Authprovider";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/">
        <MdDashboard /> Home
      </Link>
    </li>
    <li>
      <Link to="/shop">
        <FaCartShopping /> Shop
      </Link>
    </li>
    {/* <li>
      <Link to="/customer-support">
        <FaQuestionCircle /> Customer Support
      </Link>
    </li> */}
  </>
);

const AdminDashboard = () => {
  const { loading, logOut } = useAuth();
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="drawer sm:drawer-open bg-white">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col sm:items-start sm:justify-start ">
            <div className=" w-full">
              {/* <div className="flex items-start  mx-4">
                <label
                  htmlFor="my-drawer-2"
                  className="btn bg-blue2 text-white drawer-button lg:hidden"
                >
                  <MdDashboardCustomize />
                </label>
                <button
                  className="btn rounded-full px-6 bg-blue2 flex items-center gap-2 text-white sm:hidden"
                  onClick={handleLogout}
                >
                  <FaRegUser /> Logout
                </button>
              </div> */}
              <div className="w-full justify-start items-start  ">
                <Outlet />
              </div>
            </div>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-blue1 text-black">
              <li>
                <Link to="/admin-dashboard" className="flex justify-start mb-3">
                  <img src="/logo.jpg" alt="Logo" className="w-20" />
                  <span className="badge bg-black text-white">admin</span>
                </Link>
              </li>
              <hr />
              <li className="mt-3">
                <Link to="/admin-dashboard">
                  <MdDashboard /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin-dashboard/manage-bookings">
                  <FaShoppingBag /> Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/admin-dashboard/add-shop">
                  {" "}
                  {/* FIXED */}
                  <FaPlusCircle /> Add Product
                </Link>
              </li>
              <li>
                <Link to="/admin-dashboard/manage-product">
                  {" "}
                  {/* FIXED */}
                  <FaEdit /> Manage Products
                </Link>
              </li>
              <li>
                <Link to="/admin-dashboard/manage-pets">
                  {" "}
                  {/* Ensure this route exists */}
                  <FaEdit /> Manage Pets
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/admin-dashboard/users">
                  {" "}
                  {/* FIXED PATH */}
                  <FaUser /> All Users
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/admin-dashboard/customer-support">
                  {" "}
                  {/* FIXED PATH */}
                  <FaUser /> Customer Support
                </Link>
              </li>
              <hr />
              {sharedLinks}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
