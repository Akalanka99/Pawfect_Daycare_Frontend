import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import PawFectReservationForm from "../pages/Reseverstion/PawFectReservationForm";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },{
          path:"/book",
          element:<PawFectReservationForm/>
        }
      ]
    },
  ]);
  export default router;