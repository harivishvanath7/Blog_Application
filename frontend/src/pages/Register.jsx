import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center mt-20">
      <form className="bg-white p-6 shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-3"
        />
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

        <button className="bg-green-600 text-white w-full p-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
