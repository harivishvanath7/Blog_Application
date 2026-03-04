import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center mt-20">
      <form className="bg-white p-6 shadow-md w-80">
        <h2 className="text-2xl font-bold md-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-600 text-white w-full p-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
