<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
import ProfilePage from "../pages/profile/ProfilePage";
import RegisterForm from "../components/RegisterForm";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import BookingModal from "../pages/Reseverstion/BookingModal";
import BookingSlot from "../pages/Reseverstion/BookingSlot";
import PetInfo from "../pages/profile/PetInfo";
import BookingHistory from "../pages/profile/BookingHistory";
import ViewPayment from "../pages/Payment/ViewPayment";
import PaymentPage from "../pages/Payment/PaymentPage";
import Services from "../pages/Services";
import SignInModal from "../components/Modal";
import UpdatedReservationForm from "../pages/Reseverstion/UpdatedReservatioForm";
import Shop from "../pages/Shop/Shop";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import Dashboard from "../pages/dashboard/Dashboard";
import AddProduct from "../pages/dashboard/AddProduct";
import ManageProducts from "../pages/dashboard/ManageProducts";
import UpdateProduct from "../pages/dashboard/UpdateProduct";
import Users from "../pages/dashboard/Users";
import Managebooking from "../pages/dashboard/Managebooking";
import CustomerSupport from "../pages/dashboard/CustomerSupport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookingnow",
        element: <PawFectReservationForm />,
      },
      {
        path: "/modal",
        element: <SignInModal />,
      },
      {
        path: "/registerform",
        element: <RegisterForm />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/booking-dog",
        element: <BookingModal animalType="dog" onClose={() => {}} />,
      },
      {
        path: "/booking-cat",
        element: <BookingModal animalType="cat" onClose={() => {}} />,
      },
      {
        path: "/booking-slot",
        element: <BookingSlot />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/petinfo",
        element: <PetInfo />,
      },
      {
        path: "/bookinghistory",
        element: <BookingHistory />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/updated-reservation",
        element: <UpdatedReservationForm />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/viewpayment",
        element: <ViewPayment />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },

  // Admin Routes
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-shop",
        element: <AddProduct />,
      },
      {
        path: "manage-product",
        element: <ManageProducts />,
      },
      {
        path: "manage-bookings",
        element: <Managebooking />,
      },
      {
        path: "update-product/:id",
        element: <UpdateProduct />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:8080/api/product/${params.id}`);
        },
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "customer-support", // Remove the duplicate route and keep this one
        element: <CustomerSupport />,
      },
    ],
  },
]);

export default router;
=======
>>>>>>> c47f72e19e3452586051eda09fae7e95e331cb50
