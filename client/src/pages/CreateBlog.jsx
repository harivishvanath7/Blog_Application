import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../services/blogService";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (!editor) return;

      const htmlContent = editor.getHTML();

      await createBlog({
        title,
        content: htmlContent,
        tags: tags.split(","),
      });

      alert("Blog created!");

      navigate("/admin/dashboard");
      
    } catch (error) {
        console.error(error);
        alert("Failed to create Blog!!.");
    }
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing...</p>",
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl mb-4">Create Blog</h1>

      <input
        className="w-full mb-3 p-2 border"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="mb-4 border rounded p-3 bg-white">
        <EditorContent editor={editor} />
      </div>

      <input
        className="w-full mb-3 p-2 border"
        placeholder="Tags (comma separated)"
        onChange={(e) => setTags(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={!editor || !title}
        className="bg-primary text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Publish
      </button>
    </div>
  );
}

export default CreateBlog;


