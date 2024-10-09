import { useState } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/agate.css"; // For code block styling
import "github-markdown-css/github-markdown.css"; // For markdown-body styling
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Select from "react-select";
import ImageUpload from "../ImageUpload/ImageUpload";
import axios from "axios";

const categoriesOptions = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "react", label: "React" },
  { value: "javascript", label: "JavaScript" },
  // Add more categories as needed
];

const MyMarkdownEditor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle content change for markdown
  const handleEditorChange = ({ text }: { text: string }) => {
    setMarkdownContent(text);
  };

  // Handle category change
  const handleCategoriesChange = (selectedOptions: any) => {
    setSelectedCategories(selectedOptions);
  };
  const onSubmit = async (data) => {
    const postData = {
      ...data,
      markdownContent,
      imgUrl: uploadedImageUrl,
      categories: selectedCategories.map((cat) => cat.value), // Convert categories to array of values
    };
    console.log("postData", postData);
    try {
      // TODO: Add Server Url
      const res = await axios.post(
        "https://fsdg-latest-v2.vercel.app/api/change-url-posts",
        postData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Post created:", res.data);
      reset(); // Reset the form after submission
      setContent(""); // Clear the content editor
      setUploadedImageUrl(""); // Clear the uploaded image URL
      setSelectedCategories([]); // Clear the selected categories
      Swal.fire("Success!", "Posted successfully.", "success");
    } catch (err) {
      Swal.fire("Error!", "Failed to post.", "error");
      console.error("Error creating post:", err);
    }
  };

  return (
    <div className="mx-4 my-8 border p-2">
      <h1 className="text-2xl font-semibold mb-6 mt-5 text-center">
        Publish a New Note
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Categories */}
        <div>
          <label className="block font-medium">Category</label>
          <Select
            options={categoriesOptions}
            isMulti
            value={selectedCategories}
            onChange={handleCategoriesChange}
          />
          {selectedCategories.length === 0 && (
            <p className="text-red-500 text-sm">
              Please select at least one category
            </p>
          )}
        </div>

        {/* Image Upload Section */}
        <div className="mt-5">
          <label className="block font-medium ">Upload Cover Image</label>
          <ImageUpload setUploadedImageUrl={setUploadedImageUrl} />
          {uploadedImageUrl === "" && (
            <p className="text-red-500 text-sm">Image is required</p>
          )}
        </div>

        {/* Markdown Editor */}
        <h1 className="text-left uppercase font-semibold mt-5">
          Make Markdown Note :
        </h1>
        <MdEditor
          className="bg-red-500"
          value={markdownContent}
          style={{ height: "500px" }}
          renderHTML={(text) => (
            <ReactMarkdown
              children={text}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            />
          )}
          onChange={handleEditorChange}
        />

        {/* Make Publish Post Button Conditional */}
        <div className="flex justify-center items-center mt-5">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
          >
            Publish Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyMarkdownEditor;