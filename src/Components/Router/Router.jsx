import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Home from "../Pages/Home";
import Register from "../Login/Register";
import UpdateProfile from "../Login/UpdateProfile";
import RoomDetails from "../Pages/FeatureRooms/RoomDetails";
import BookRoom from "../Pages/FeatureRooms/BookRoom";


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
        {   
            path:'/updateprofile',
            element:<UpdateProfile></UpdateProfile>
        },
        {   
            path:'/roomdetails/:id',
            element:<RoomDetails></RoomDetails>,
            loader:({params})=>fetch(`${import.meta.env.VITE_DOMAIN}/featurerooms/${params.id}`)
        },
        {   
            path:'/bookroom',
            element:<BookRoom></BookRoom>
        },
      ]
    },
  ]);

  export default router