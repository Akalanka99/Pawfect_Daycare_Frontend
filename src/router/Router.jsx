import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
import Profile from "../components/Profile";
import RegisterForm from "../components/RegisterForm";
import AboutUs from "../pages/AboutUs";
import BookingModal from "../pages/Reseverstion/BookingModal";
import BookingSlot from "../pages/Reseverstion/BookingSlot";
import ProfilePage from "../pages/profile/ProfilePage";
import PetInfo from "../pages/profile/PetInfo";
import BookingHistory from "../pages/profile/BookingHistory";
import ViewPayment from "../pages/Payment/ViewPayment";
import PaymentPage from "../pages/Payment/PaymentPage";
import Services from "../pages/Services";
import SignInModal from "../components/Modal";
import UpdatedReservationForm from "../pages/Reseverstion/UpdatedReservatioForm";
import Shop from "../pages/Shop/Shop";

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
        path: "/booking-dog",
        element: <BookingModal animalType="dog" onClose={() => {}} />, // Pass "dog" as animalType
      },
      {
        path: "/booking-cat",
        element: <BookingModal animalType="cat" onClose={() => {}} />, // Pass "cat" as animalType
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
]);
export default router;
