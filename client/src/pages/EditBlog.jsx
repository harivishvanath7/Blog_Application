import { useEffect, useState } from "react";
import API from "../api/api.js";
import { useParams, useNavigate } from "react-router-dom";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Loading...</p>",
  });

  //  Fetch existing blog
  useEffect(() => {
    if (!editor) return;

    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/id/${id}`);

        setTitle(res.data.title);
        setTags(res.data.tags.join(","));

        //  SET CONTENT INTO TIPTAP
        editor.commands.setContent(res.data.content);

      } catch (err) {
        console.error(err);
      }
    };

    fetchBlog();
  }, [editor, id]);

  //  Update blog
  const handleUpdate = async () => {
    try {
      if (!editor) return;

      await API.put(
        `/blogs/${id}`,
        {
          title,
          content: editor.getHTML(),
          tags: tags.split(","),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Blog updated!");
      navigate("/admin/dashboard");

    } catch (err) {
      console.error(err);
      alert("Update failed!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl mb-4">Edit Blog</h1>

      <input
        className="w-full mb-3 p-2 border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="mb-4 border rounded p-3 bg-white">
        <EditorContent editor={editor} />
      </div>

      <input
        className="w-full mb-3 p-2 border"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
}

export default EditBlog;