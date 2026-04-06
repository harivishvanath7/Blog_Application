import { Link } from "react-router-dom";
import { getPreview } from "../utils/text";

function BlogCard({ blog }) {

  return (
    <Link to={`/blog/${blog.slug}`}>
      <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
        <h2 className="text-xl mb-2 text-primary">{blog.title}</h2>

        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {getPreview(blog.content)}
        </p>

        <div className="flex flex-wrap gap-2">
          {blog.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
