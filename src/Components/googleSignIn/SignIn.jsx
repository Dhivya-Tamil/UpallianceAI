import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './config';
import LogoutPage from '../../pages/LogoutPage';

const SignIn = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already authenticated
        const email = localStorage.getItem('email');
        if (email) {
            setIsAuthenticated(true);
            
            navigate('/counter');  
        }
    }, [navigate]);

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            localStorage.setItem("email", data.user.email);
            setIsAuthenticated(true);
            window.location.reload();
            navigate('/counter');  
        }).catch(error => {
            console.error('Error signing in:', error);
            alert('Failed to sign in. Please try again.');
        });
    };

    return (
        <div className='signIn'>
            {!isAuthenticated ? (
                <button onClick={handleClick} style={{marginLeft:'600px',width:'15%',height:"12%",marginTop:"250px"}}>Sign in with Google</button>
            ): (
                <LogoutPage />
            )}
        </div>
    );
}

export default SignIn;
