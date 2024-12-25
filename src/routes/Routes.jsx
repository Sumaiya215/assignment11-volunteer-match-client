import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPosts from "../pages/AllPosts";
import AddPost from "../pages/AddPost";
import MyPosts from "../pages/MyPosts";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/posts',
            element:<AllPosts></AllPosts>
        },
        {
            path:'/add-post',
            element:<PrivateRoute><AddPost></AddPost></PrivateRoute>
        },
        {
            path:'/my-posts',
            element:<PrivateRoute><MyPosts></MyPosts></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;