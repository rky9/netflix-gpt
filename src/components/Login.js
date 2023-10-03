import React, { useState } from "react";
import Header from "./Header";
import BackgroundBaner from "./BackgroundBaner";
import RememberMe from "./RememberMe";
import {
  ErrorMessageEmail,
  ErrorMessageEmailPhone,
} from "./LoginLelperText/ErrorMessage";
const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <BackgroundBaner />
      </div>
      <form className="absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 top-0 w-4/12 p-16">
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 w-full bg-[#333]"
        />
        <ErrorMessageEmail />
        <ErrorMessageEmailPhone />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#333]"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <RememberMe />
        <p onClick={toggleSigninForm} className="cursor-pointer">
          {isSigninForm
            ? "New to Netflix? Sign up now."
            : "Allready registered? Sign In Now"}
        </p>
        <p className="text-white text-xs mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a className="text-blue-700 mx-1" href="#">
            Learn More
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
