import React, { useState } from "react";
import Header from "./Header";
import BackgroundBaner from "./BackgroundBaner";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div className="relative">
      <Header />
      Header
      <div>
        <BackgroundBaner />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 top-0">
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
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSigninForm} className="cursor-pointer">
          {isSigninForm
            ? "New to Netflix? Sign up now."
            : "Allready registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
