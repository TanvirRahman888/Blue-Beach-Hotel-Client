import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Home from "../Pages/Home";
import Register from "../Login/Register";
import UpdateProfile from "../Login/UpdateProfile";
import RoomDetails from "../Pages/FeatureRooms/RoomDetails";
import BookRoom from "../Pages/FeatureRooms/BookRoom";
import AllRooms from "../Pages/AllRooms/AllRooms";
import MyBooking from "../Pages/MyBooking/MyBooking";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {   
            path:'/allrooms',
            element:<AllRooms></AllRooms>,
            loader:()=>fetch(`${import.meta.env.VITE_DOMAIN}/allrooms`)
        },
        {   
            path:'/roomdetails/:id',
            element:<RoomDetails></RoomDetails>,
            loader:({params})=>fetch(`${import.meta.env.VITE_DOMAIN}/allrooms/${params.id}`)
        },
        {   
            path:'/bookroom/:id',
            element:<BookRoom></BookRoom>,
            loader:({params})=>fetch(`${import.meta.env.VITE_DOMAIN}/bookroom/${params.id}`)
        },
        {   
            path:'/mybooking/:email',
            element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
            loader:({params})=>fetch(`${import.meta.env.VITE_DOMAIN}/bookings/${params.email}`)
        },
      ]
    },
  ]);

  export default router