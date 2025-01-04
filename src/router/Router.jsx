import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
import Profile from "../pages/profile";
import RegisterForm from "../components/RegisterForm";
import SignIn from "../components/SignIn";
import AboutUs from "../pages/AboutUs";
import BookingModal from "../pages/Reseverstion/BookingModal";
import BookingSlot from "../pages/Reseverstion/BookingSlot";

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
        path: "/signin",
        element: <SignIn />,
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
        path: "/profile",
        element: <Profile />,
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
    ],
  },
]);
export default router;
