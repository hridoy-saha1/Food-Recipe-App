import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
   const {user,loading}=use(AuthContext);
   const location=useLocation();

   if(loading){
    return <div className="max-h-screen flex justify-center " >
            <span className="loading loading-bars loading-xl"></span>
        </div>
   }


   
    if(user && user?.email){
        return children;
    
    }
    return <Navigate state={location.pathname}   to="/login" ></Navigate>
};

export default PrivateRoute;