import React from "react";
import Header from "./Header";
import BackgroundBaner from "./BackgroundBaner";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      Header
      <div>
        <BackgroundBaner />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 top-0">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
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
        <button className="p-4 my-6 bg-red-700 w-full ">Sign in</button>
        <p>
          New to Netflix? <a href="#">Sign up now.</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
