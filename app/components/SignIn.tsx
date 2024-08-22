"use client";

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const SignIn = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const handleChange = (e: any) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-fit">
        <div className="flex -mb-3 z-10 justify-center">
          <FaUserCircle className="flex text-8xl text-slate-300" />
        </div>
        <form
          action=""
          method="post"
          className="flex flex-col items-start px-12 py-8 rounded-2xl gap-5 bg-slate-300"
        >
          <div className="flex justify-center w-full">
            <h2 className="font-semibold text-center text-white text-3xl">
              LOGIN
            </h2>
          </div>
          <input
            onChange={handleChange}
            value={inputValue.email}
            type="email"
            name="email"
            placeholder="Email"
            className="flex py-3 px-4 w-[350px]"
          />
          <input
            onChange={handleChange}
            value={inputValue.password}
            type="password"
            name="password"
            placeholder="PassWord"
            className="flex py-3 px-4 w-[350px]"
          />
          <label htmlFor="checkbox" className="flex items-center gap-1">
            <input type="checkbox" placeholder="remember me" name="checkbox" />
            remember me
          </label>
          <button
            className="flex text-white bg-blue-600 py-2 px-6 rounded-full"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
