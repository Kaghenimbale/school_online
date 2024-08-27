"use client";

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { TiLockClosed } from "react-icons/ti";

const SignIn = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const handleChange = (e: any) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    console.log(inputValue);
    e.preventDefault();
    setInputValue({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-fit">
        <div className="flex -mb-3 z-10 justify-center">
          <FaUserCircle className="flex text-8xl text-slate-400" />
        </div>
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col justify-center px-12 py-8 rounded-2xl gap-5 bg-slate-300"
        >
          <div className="flex justify-center w-full">
            <h2 className="font-semibold text-center text-white text-3xl">
              LOGIN
            </h2>
          </div>
          <label htmlFor="email" className="flex items-center">
            <div className="px-[0.57rem] h-[50px] flex items-center justify-center bg-white">
              <BiSolidUser className="text-3xl text-slate-400" />
            </div>
            <input
              onChange={handleChange}
              value={inputValue.email}
              type="email"
              name="email"
              placeholder="Email"
              className="flex h-[50px] px-4 w-[18rem] outline-none"
            />
          </label>
          <label htmlFor="password" className="flex items-center">
            <div className="px-[0.57rem] h-[50px] flex items-center justify-center bg-white">
              <TiLockClosed className="text-3xl text-slate-400" />
            </div>
            <input
              onChange={handleChange}
              value={inputValue.password}
              type="password"
              name="password"
              placeholder="PassWord"
              className="flex h-[50px] px-4 w-[18rem] outline-none"
            />
          </label>
          <label htmlFor="checkbox" className="flex justify-start gap-1">
            <input type="checkbox" placeholder="remember me" name="checkbox" />
            Remember me
          </label>
          <button
            className="flex text-white w-fit shadow-blue-700 shadow bg-blue-600 py-2 px-6 rounded-full"
            type="submit"
          >
            LOGIN
          </button>
          <p className="text-white text-center">Forgot Username / Password ?</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
