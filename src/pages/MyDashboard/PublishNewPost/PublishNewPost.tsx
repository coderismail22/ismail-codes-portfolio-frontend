import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import RichTextEditor from "../RichTextEditor/RichTextEditor.tsx";
import ImageUpload from "../ImageUpload/ImageUpload.tsx"; // Assuming ImageUpload is in the ImageUpload folder
import Swal from "sweetalert2";
import Select from "react-select";

const categoriesOptions = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "mongoose", label: "Mongoose" },
  { value: "react", label: "React" },
  { value: "javascript", label: "JavaScript" },
  // Add more categories here as needed
];

const PublishNewPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const title = watch("title", "");
  const [content, setContent] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  console.log(selectedCategories);

  // Handle Category Change
  const handleCategoriesChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions || []); // Ensure it's an empty array when no categories are selected
  };

  // Handle content change
  const handleContentChange = (newContent) => {
    setContent(newContent); // Update the state in the parent
  };

  const onSubmit = async (data) => {
    const postData = {
      ...data,
      content,
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
    <div className="mx-10 my-8 ">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Publish New Post
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-2">
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

        {/* Category Selection */}
        <div>
          <label className="block font-medium">Category</label>
          <Select
            isMulti
            options={categoriesOptions}
            value={selectedCategories}
            onChange={handleCategoriesChange}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select Categories"
          />
          {selectedCategories.length === 0 && (
            <p className="text-red-500 text-sm">
              At least one category is required
            </p>
          )}
        </div>

        {/* Image Upload Section */}
        <div>
          <label className="block font-medium">Upload Cover Image</label>
          <ImageUpload setUploadedImageUrl={setUploadedImageUrl} />
          {uploadedImageUrl === "" && (
            <p className="text-red-500 text-sm">Image is required</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Content</label>
          <RichTextEditor
            content={content}
            onChangeContent={handleContentChange}
          />
        </div>

        {/* Make Publish Post Button Conditional */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
          >
            Publish Post
          </button>
        </div>
      </form>

      {/* Preview Section */}
      {content && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Preview Content</h2>
          <div className="border border-gray-300 p-4 md:p-8 rounded w-full max-w-full overflow-hidden">
            {title ? (
              <h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 break-words">
                {title}
              </h1>
            ) : null}

            {uploadedImageUrl ? (
              <img
                src={uploadedImageUrl}
                alt="Uploaded Preview"
                className="w-full max-w-full h-auto object-cover mb-4 rounded"
              />
            ) : null}

            <div
              className="text-gray-700 break-words"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishNewPost;
