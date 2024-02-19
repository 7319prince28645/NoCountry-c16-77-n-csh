import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
function Login({ handClickState, onClose }) {
  return (
    <>
      <span
        className="absolute top-1 right-2 text-gray-500 cursor-pointer z-40 p-2 font-semibold hover:text-neutral-300 text-xl"
        onClick={onClose}
      >
        ×
      </span>
      <h2 className="text-2xl font-semibold absolute top-1 left-1 p-2 border-b w-[98%]">
        Login
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="w-full border py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            className="w-full border py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
        <div
          className=" text-sm text-center text-blue-500 hover:underline cursor-pointer"
          onClick={() => handClickState(2)}
        >
          Forgot password
        </div>
        <div
          className="text-center text-blue-500 hover:underline cursor-pointer"
          onClick={() => handClickState(1)}
        >
          Create an account
        </div>
      </form>
    </>
  );
}

export default Login;
