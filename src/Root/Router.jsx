import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Roots from "./Roots";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddRecipe from "../Pages/AddRecipe";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllRecipe from "../Pages/AllRecipe";
import RecipeDetails from "../Pages/RecipeDetails";
import PrivateRoute from "../Firebase/PrivateRoute";
import MyRecipes from "../Pages/MyRecipes";
import FoodRequest from "../Pages/FoodRequest";
import MixyMainContent from "../Pages/MixyMainContent";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <Error></Error>,
        children: [{
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch('https://food-request.vercel.app/top-Food')
        },
        {
            path: "addFood",
            element: (<PrivateRoute><AddRecipe></AddRecipe> </PrivateRoute>)
        },
        {
            path: "login",
            Component: Login
        },
        {
            path: "register",
            Component: Register
        },
        {
            path: "availableFood",
            Component: AllRecipe,
            loader: () => fetch('https://food-request.vercel.app/Food')
        },
        {
            path: "recipeDetails/:id",
            element: <RecipeDetails />,
            loader: ({ params }) => fetch(`https://food-request.vercel.app/Food/${params.id}`)
        },
        {
            path: "/my-recipes",
            element: <PrivateRoute><MyRecipes /></PrivateRoute>,
        }
        ,
        {
            path:"/food-request",
            element:<PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>
        }
        ,
        {
            path:"/menuContent",
            Component:MixyMainContent
        }




        ]
    },
]);
