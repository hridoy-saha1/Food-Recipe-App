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

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <Error></Error>,
        children: [{
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch('https://recipe-database-server.vercel.app/top-recipes')
        },
        {
            path: "addrecipe",
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
            path: "allRecipe",
            Component: AllRecipe,
            loader: () => fetch('https://recipe-database-server.vercel.app/recipes')
        },
        {
            path: "recipeDetails/:id",
            element: <PrivateRoute><RecipeDetails /></PrivateRoute>,
            loader: ({ params }) => fetch(`https://recipe-database-server.vercel.app/recipes/${params.id}`)
        },
        {
            path: "/my-recipes",
            element: <PrivateRoute><MyRecipes /></PrivateRoute>,
        }




        ]
    },
]);
