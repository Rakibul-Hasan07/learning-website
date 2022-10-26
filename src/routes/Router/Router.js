import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Root from "../../layout/Root/Root";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses/Courses";
import DetailsCard from "../../pages/Courses/DetailsCard/DetailsCard";
import PremiumCourses from "../../pages/Courses/PremiumCourses/PremiumCourses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/courses', element: <Main></Main>, children: [
                    {
                        path: '/courses', element: <Courses></Courses>,
                        loader: () => {
                            return fetch('http://localhost:5000/course')
                        }
                    },
                    {
                        path: '/courses/:id', element: <DetailsCard></DetailsCard>,
                        loader: ({ params }) => {
                            return fetch(`http://localhost:5000/course/${params.id}`)
                        }
                    },
                    {
                        path: '/courses/premium/:id', element: <PremiumCourses></PremiumCourses>,
                        loader: ({ params }) => {
                            return fetch(`http://localhost:5000/course/${params.id}`)
                        }
                    }
                ]
            },


            { path: '/faq', element: <FAQ></FAQ> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> }
        ]
    }
])