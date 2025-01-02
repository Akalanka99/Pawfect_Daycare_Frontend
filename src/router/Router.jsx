import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
import Profile from "../pages/profile";
import RegisterForm from "../components/RegisterForm";
import SignIn from "../components/SignIn";
import Logout from "../components/Logout";

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
          element:<Profile/>
        },
        {
          path:"/logout",
          element:<Logout/>
        },

      ]
    },
  ]);
  export default router;