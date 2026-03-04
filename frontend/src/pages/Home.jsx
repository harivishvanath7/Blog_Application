import React from "react";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>

      <div className="border p-4 mb-4">
        <h2 className="text-xl font-bold">Sample Blog title</h2>
        <p className="text-gray-600 mt-2">
          This is sample blog content preview...
        </p>
      </div>

      <div className="border p-4">
        <h2 className="text-xl font-bold">Another Blog</h2>
        <p className="text-gray-600">Another Blog preview content...</p>
      </div>
    </div>
  );
};

export default Home;
