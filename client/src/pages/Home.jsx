import { useEffect, useState } from "react";
import API from "../api/api.js";
import BlogCard from "../components/BlogCard.jsx";
import Subscribe from "../components/Subscribe.jsx";


function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        API.get("/blogs")
            .then((res) => setBlogs(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {/* Hero */}
            <h1 className="text-4xl mb-8 text-primary-dark">
                My Blog 
            </h1>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>

            <Subscribe />
            
        </div>
    )

}

export default Home;