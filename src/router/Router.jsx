import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
import Profile from "../pages/profile";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },{
          path:"/booknow",
          element:<PawFectReservationForm/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }

      ]
    },
  ]);
  export default router;