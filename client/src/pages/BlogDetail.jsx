import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api.js";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/blogs/${slug}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!blog) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl mb-4 text-primary-dark">{blog.title}</h1>

      <div className="flex gap-3 mb-4 flex-wrap">
        {blog.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-secondary text-white px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rendering as HTML */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <p className="mt-6 text-sm text-gray-500">👁 {blog.views} views</p>
    </div>
  );
}

export default BlogDetail;