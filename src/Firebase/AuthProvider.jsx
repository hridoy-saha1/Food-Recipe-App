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

  // 🔐 Get JWT token from backend
  const fetchAndStoreJWT = async (email) => {
    try {
      const res = await fetch('https://food-request.vercel.app/jwt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token); // store JWT
      }
    } catch (error) {
      console.error('JWT fetch error:', error);
    }
  };

  // ✅ Create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then((res) => {
    //   return fetchAndStoreJWT(email).then(() => res);
    });
  };

  // ✅ Log in existing user
  const LogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then((res) => {
    //   return fetchAndStoreJWT(email).then(() => res);
    });
  };

  // ✅ Log out user
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem('token'); // Remove token on logout
    return signOut(auth);
  };

  // ✅ Auth state observer
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

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
