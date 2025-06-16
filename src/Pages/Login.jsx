import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router'; 
import { AuthContext } from '../Firebase/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const Login = () => {
    
    const { LogIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
   
    const provider = new GoogleAuthProvider();

    // ✅ Email/Password Login
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        LogIn(email, password)
            .then(() => {
                Swal.fire({
                    title: "Login Successful!",
                    icon: "success",
                    confirmButtonColor: "#10B981",
                });
                navigate(location.state ? location.state : '/');
            })
            .catch(() => {
                setError("Invalid email or password");
            });
    };

    // Google Login
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                Swal.fire({
                    title: "Google Login Successful!",
                    icon: "success",
                    confirmButtonColor: "#10B981",
                });
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error.message);
                setError("Google login failed");
            });
    };

    return (
        <>
        <title>LogIn</title>
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-100 to-green-200 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">🔐 Login to RecipeBook</h2>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-xl hover:bg-emerald-700 transition"
                    >
                        Login
                    </button>
                </form>

                <button
                    onClick={handleGoogleLogin} 
                    className="w-full border border-gray-300 flex items-center mt-5 justify-center gap-2 text-gray-700 font-medium py-2 rounded-xl hover:bg-gray-100 transition"
                >
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-emerald-700 font-medium hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
        </>
       
    );
};

export default Login;
