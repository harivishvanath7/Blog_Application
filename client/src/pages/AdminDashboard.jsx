import { useEffect, useState } from "react";
import API from "../api/api.js";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 🗑 DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //  EDIT
  const handleEdit = (id) => {
    console.log(id)
    navigate(`/admin/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={() => navigate("/admin/create")}
          className="bg-black text-white px-4 py-2 rounded-xl"
        >
          + New Blog
        </button>
      </div>

      {/* BLOG LIST */}
      <div className="grid gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold text-lg">{blog.title}</h2>
              <p className="text-gray-500 text-sm">
                {blog.content.slice(0, 80)}...
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(blog._id)}
                className="px-4 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(blog._id)}
                className="px-4 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AdminDashboard;