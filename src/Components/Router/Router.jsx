import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Home from "../Pages/Home";
import Register from "../Login/Register";

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
        },
        {   
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
  ]);

  export default router