import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
import Profile from "../components/Profile";
import RegisterForm from "../components/RegisterForm";
import SignIn from "../components/SignIn";
import AboutUs from "../pages/AboutUs";
import SingleDayDogModal from "../pages/Reseverstion/ModelsforPopUps/Dog/SingleDayDogModal";
import SingleDayCatModal from "../pages/Reseverstion/ModelsforPopUps/Cat/SingleDayCatModal";
import BookingSlotSingleDay from "../pages/Reseverstion/BookingSlots/BookingSlotSingleDay";
import BookingSlotMultipleDay from "../pages/Reseverstion/BookingSlots/BookingSlotMultipleDay";

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
        element: <RegisterForm/>,
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
        path: "/single-day-dog",
        element: <SingleDayDogModal />,
      },
      {
        path: "/single-day-cat",
        element: <SingleDayCatModal />,
      },
      {
        path: "/single-schedule",
        element: <BookingSlotSingleDay />,
      },
      {
        path: "/multiple-schedule",
        element: <BookingSlotMultipleDay />,
      },
    ],
  },
]);
export default router;
