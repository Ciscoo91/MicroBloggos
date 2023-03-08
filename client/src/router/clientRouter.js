import {createBrowserRouter} from "react-router-dom"

import Users from '../components/users/Users'
import Feed from '../components/tweet/Feed';
import LogoutPage from '../components/auth/LogoutPage';
import PrivateRoute from '../components/auth/PrivateRoute';
import Profile from '../components/profile/Profile';
import LoginForm from '../components/auth/LoginForm';
import RegisterUser from '../components/auth/RegisterUser';
import Home from '../components/layout/Home';
import MyHashtag from '../components/tweet/MyHashtag';
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/login",
                element: <LoginForm/>
            },
            {
                path: "/logout",
                element: <LogoutPage/>
            },
            {
                path: "/register",
                element: <RegisterUser/>
            },
            {
                path: "/users",
                element: <PrivateRoute><Users/></PrivateRoute>
            },
            {
                path: "/feed",
                element: <PrivateRoute><Feed/></PrivateRoute>
            },
            {
                path: "/myhashtag",
                element: <PrivateRoute><MyHashtag/></PrivateRoute>
            },
            {
                path: "/profile/:id",
                element: <PrivateRoute><Profile/></PrivateRoute>
            },
        ]
    },
    
])

