import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
import ProfilePage from "../pages/profile/ProfilePage";
import PetInfo from "../pages/profile/PetInfo";
import ViewPayment from "../pages/payment/viewPayment";
import PaymentPage from "../pages/payment/Payment";
import BookingHistory from "../pages/profile/BookingHistory";
import RegisterForm from "../components/RegisterForm";
import SignIn from "../components/SignIn";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
          path:"/booknow",
          element:<PawFectReservationForm/>
        },
        {
           path:"/signin",
          element:<SignIn/>
        },
        {
          path:"/registerform",
          element:<RegisterForm/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/petinfo",
          element:<PetInfo/>
        },
        {
          path:"/bookinghistory",
          element:<BookingHistory/>
        },
        {
          path:"/payment",
          element:<PaymentPage/>
        },
        {
          path:"/viewpayment",
          element:<ViewPayment/>
        },
        

      ]
    },
  ]);
  export default router;