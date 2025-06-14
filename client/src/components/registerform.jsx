import { useState } from "react";
import { useNavigate } from "react-router";
import {toast} from "react-toastify";
import axios from "axios";
const RegisterForm = () => {
  const [userData,setUserData]=useState({
    username:"",
    email:"",
    password:""
  });
  const navigate=useNavigate();
  function handleSuccess() {
    toast.success(`Welcome back!! ${userData.username}`);
  }
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setUserData((currData) => {
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    await axios.post('/user/register',userData);
    handleSuccess();
    navigate('/cropsuggest');

    console.log(userData)
  }
  return (
    <div className="max-w-[350px] bg-zinc-900 text-white p-6 rounded-2xl border border-zinc-700 space-y-4 relative">
      {/* Title with pulsing dot */}
      <div className="relative flex items-center pl-8 text-2xl font-semibold text-cyan-400">
        Register
        <span className="absolute left-0 h-4 w-4 bg-cyan-400 rounded-full" />
        <span className="absolute left-0 h-4 w-4 bg-cyan-400 rounded-full animate-ping" />
      </div>

      <p className="text-sm text-white/70">
        Signup now and get full access to our app.
      </p>

      <form className="space-y-5">
        {/* Username Field */}
        <div className="relative">
          <input
            type="text"
            required
            placeholder=" "
            value={userData.username}
            name="username"
            onChange={handleChange}
            className="peer w-full bg-zinc-800 text-white px-3 pt-5 pb-2 rounded-md border border-zinc-600 outline-none focus:border-cyan-400"
          />
          <span className="absolute left-3 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
            Username
          </span>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            required
            placeholder=" "
            value={userData.email}
            name="email"
            onChange={handleChange}
            className="peer w-full bg-zinc-800 text-white px-3 pt-5 pb-2 rounded-md border border-zinc-600 outline-none focus:border-cyan-400"
          />
          <span className="absolute left-3 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
            Email
          </span>
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type="password"
            required
            placeholder=" "
            value={userData.password}
            name="password"
            onChange={handleChange}
            className="peer w-full bg-zinc-800 text-white px-3 pt-5 pb-2 rounded-md border border-zinc-600 outline-none focus:border-cyan-400"
          />
          <span className="absolute left-3 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
            Password
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyan-400 text-white py-2 rounded-md hover:bg-cyan-500 transition"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <p className="text-sm text-center text-white/70">
        Already have an account?{" "}
        <a href="/login" className="text-cyan-400 hover:underline">
          Signin
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
