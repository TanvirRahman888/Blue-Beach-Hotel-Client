import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {   
            path:'/',
            element:<Home></Home>
        },
        {   
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router