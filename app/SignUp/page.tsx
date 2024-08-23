"use client";

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { TiLockClosed } from "react-icons/ti";
import Link from "next/link";

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const handleChange = (e: any) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-fit">
        <form
          action=""
          method="post"
          className="flex flex-col justify-center px-12 py-8 rounded-2xl gap-5 bg-slate-300"
        >
          <div className="flex justify-center w-full">
            <h2 className="font-semibold text-center text-white text-3xl">
              SIGN UP
            </h2>
          </div>
          <label htmlFor="email" className="flex items-center">
            <div className="px-[0.57rem] h-[50px] flex items-center justify-center bg-white">
              <BiSolidUser className="text-3xl text-slate-400" />
            </div>
            <input
              onChange={handleChange}
              value={inputValue.username}
              type="text"
              name="username"
              placeholder="Username"
              className="flex h-[50px] px-4 w-[18rem] outline-none"
            />
          </label>
          <label htmlFor="email" className="flex items-center">
            <div className="px-[0.57rem] h-[50px] flex items-center justify-center bg-white">
              <MdEmail className="text-3xl text-slate-400" />
            </div>
            <input
              onChange={handleChange}
              value={inputValue.email}
              type="email"
              name="email"
              placeholder="E-mail"
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
          <label htmlFor="password" className="flex items-center">
            <div className="px-[0.57rem] h-[50px] flex items-center justify-center bg-white">
              <TiLockClosed className="text-3xl text-slate-400" />
            </div>
            <input
              onChange={handleChange}
              value={inputValue.passwordConfirmation}
              type="password"
              name="passwordConfirmation"
              placeholder="PassWord Confirmation"
              className="flex h-[50px] px-4 w-[18rem] outline-none"
            />
          </label>
          <button
            className="flex text-white w-fit shadow-blue-700 shadow-md bg-blue-600 py-2 px-6 rounded-full"
            type="submit"
          >
            CREATE ACCOUNT
          </button>
          <p className="text-white text-center">
            Already have an account ? <Link href="/SignIn">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
