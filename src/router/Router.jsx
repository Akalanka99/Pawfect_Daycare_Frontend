import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
import Profile from "../pages/profile";
import RegisterForm from "../components/RegisterForm";
import SignIn from "../components/SignIn";
import AboutUs from "../pages/AboutUs";


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
          path:"/bookingnow",
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
          path:"/aboutus",
          element:<AboutUs/>
        },
       
        {
          path:"/profile",
          element:<Profile/>
        },
        

      ]
    },
  ]);
  export default router;