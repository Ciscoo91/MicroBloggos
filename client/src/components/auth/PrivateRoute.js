import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children}) => {

    const { user } = useContext(AuthContext);

    if(!user.isLoggedIn){
        return <Navigate to="/" />
    }

    return children
    
}

export default PrivateRoute;