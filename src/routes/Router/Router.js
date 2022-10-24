import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
    {path:'/', element: <Root></Root>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/courses', element:<Courses></Courses>},
        {path:'/faq', element:<FAQ></FAQ>},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>}
    ]}
  ])