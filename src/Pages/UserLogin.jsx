import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  // useState
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[userData, setUserData] = useState();  // For storing user data
  
  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    });
    // console.log(userData);
    setEmail('');
    setPassword(''); 
  }

  return (
    // Main Div
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) =>{
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) =>{
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        {/*  Linke tag*/}
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>

      {/* Button */}
      <div>
        <Link to='/captain-login' 
         className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
