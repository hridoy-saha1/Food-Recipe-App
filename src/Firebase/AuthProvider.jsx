import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchAndStoreJWT = async (email) => {
    try {
      const res = await fetch('https://food-request.vercel.app/jwt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
    } catch (error) {
      console.error('JWT fetch error:', error);
    }
  };

  // ✅ Create new user
  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await fetchAndStoreJWT(result.user.email); // Get token right after signup
    return result;
  };

  // ✅ Log in existing user
  const LogIn = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    await fetchAndStoreJWT(result.user.email); // Get token right after login
    return result;
  };

  // ✅ Log out user
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem('token');
    return signOut(auth);
  };

  // ✅ Observe auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        fetchAndStoreJWT(currentUser.email);
      } else {
        localStorage.removeItem('token');
      }
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    createUser,
    LogIn,
    logOut,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
