import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import SignIn from './googleSignIn/SignIn';

const PrivateRoutes = () => {
    const [isUser, setIsUser] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem('email');  
        setIsUser(email);
    }, []);

    if (isUser === null) {
        // If the check hasn't completed yet
        return <div style={{textAlign:"center",width:'100%',height:"100%",marginTop:"250px"}}>Please signIn to access the content</div>;
    }

    return isUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
