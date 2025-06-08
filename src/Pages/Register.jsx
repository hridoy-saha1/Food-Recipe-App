import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    console.log(createUser)
  const [error, setError] = useState('');

 const handleRegister = (e) => {
  e.preventDefault();
  setError(''); // clear old error

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photo = form.photo.value;
  const userInfo={
    name,
    photo,email
  }
  console.log(userInfo)

  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

  if (password.length < 6) {
    setError("❌ Password must be at least 6 characters long.");
    return;
  }

  if (!uppercaseRegex.test(password)) {
    setError("❌ Password must contain at least one uppercase letter.");
    return;
  }

  if (!lowercaseRegex.test(password)) {
    setError("❌ Password must contain at least one lowercase letter.");
    return;
  }

  

  // TODO: Firebase registration logic here
  createUser(email,password)
   .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
     fetch('http://localhost:3000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(data=>{
           
            if(data.insertedId){
               Swal.fire({
            title: "Registration Successfully!",
            icon: "success",
            draggable: true
            });
             form.reset()
            }
        })
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });



};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-emerald-200 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">📝 Create Your Account</h2>
        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="url"
              name="photo"
              placeholder="https://your-photo-link.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-xl hover:bg-emerald-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-emerald-700 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
