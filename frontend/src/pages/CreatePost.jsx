import React from "react";

const CreatePost = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-blog mb-4">Create Blog Post</h2>

      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-3"
      />

      <textarea placeholder="Content" className="border p-2 w-full h-20 mb-3" />

      <button className="bg-blue-600 text-white px-4 py-2">Publish</button>
    </div>
  );
};

export default CreatePost;
