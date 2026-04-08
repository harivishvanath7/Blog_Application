import { useEffect, useState } from "react";
import API from "../api/api.js";
import BlogCard from "../components/BlogCard.jsx";
import Subscribe from "../components/Subscribe.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const scrollToBlogs = () => {
    document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSubscribe = () => {
    document
      .getElementById("subscribe")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}{" "}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-white">
        <div className="max-w-2xl">
          <p className="text-sm text-gray-500 mb-4">
            Personal Blog • Insights • Learning Journey
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Thoughts, Code & Ideas
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            I write about development, problem solving, and everything I learn
            along the way. Follow my journey and grow with me.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToBlogs}
              className="px-8 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition duration-300"
            >
              Read Blogs
            </button>
            <button
              onClick={scrollToSubscribe}
              className="px-8 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition duration-300"
            >
              Subscribe
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Written by Hari Vishvanath S • Updated weekly thrice.
          </p>
        </div>
      </section>
      {/* BLOG SECTION */}
      <section id="blogs" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Latest Articles
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-400">
            No blogs yet. Stay tuned 🚀
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </section>
      {/* NEWSLETTER SECTION */}
      <section
        id="subscribe"
        className="py-20 bg-linear-to-r from-black to-gray-900 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Join the Community 📬</h2>

        <p className="text-gray-400 mb-8">No spam. Just quality content.</p>

        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
          <Subscribe />
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
