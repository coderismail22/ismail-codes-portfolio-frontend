import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { TNote } from "../Notes/note.type"; // Assuming you've defined the TNote type
import { FaImage } from "react-icons/fa";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/agate.css"; // For code block styling
import "github-markdown-css/github-markdown.css"; // For markdown-body styling

const FullNote = () => {
  const { id } = useParams<{ id: string }>(); // Get the note ID from the URL
  const [note, setNote] = useState<TNote | null>(null); // TNote or null
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const fetchNoteDetail = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/note/${id}`
      ); // Fetch note by ID
      setNote(data.data); // Access data properly from the response
      setLoading(false);
    } catch (error) {
      console.error("Error fetching note detail:", error);
      setError("Something went wrong while fetching the note.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchNoteDetail();
  }, [id]); // Fetch the note when component mounts

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <RotatingLines
          visible={true}
          height="46"
          width="46"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }

  // Error Message
  if (error) {
    return (
      <p className="text-red-500 text-xl text-center font-bold py-10 border-2 border-red-500 rounded-md m-5">
        {error}
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {note ? (
        <div
          key={note._id}
          className="p-4 border border-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-gray-300 bg-[#2D2E2F]  "
        >
          {/* Title */}
          <div className="text-lg md:text-xl font-semibold text-white  mb-3">
            {note.title}
          </div>
          {/* Image */}
          <div>
            {imgError ? (
              <div className="my-2 w-full h-full flex flex-col items-center justify-center bg-gray-200 border border-dashed border-gray-400 rounded-lg shadow-md">
                <FaImage className="size-8 md:size-10 lg:size-20 mt-10" />
                <p className="text-2xl text-gray-500 text-center font-medium p-10 ">
                  Image Not Available
                </p>
              </div>
            ) : (
              <img
                className="w-full h-80 object-cover mb-4 rounded-md"
                src={note.image}
                alt="Note Cover Image"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          {/* Full Note Markdown Preview */}

          <div className="markdown-body  markdown-preview border p-4 mb-4 rounded shadow bg-slate-200">
            <ReactMarkdown
              children={note.body}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                ul: ({ children }) => (
                  <ul className="list-disc pl-6">{children}</ul>
                ), // Ensures bullet points show up
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6">{children}</ol>
                ), // For ordered lists
              }}
            />
          </div>
          {/* Author */}
          <p className="text-white text-sm">
            <span className="font-bold">Author:</span> {note.author}
          </p>
          {/* Published */}
          <p className="text-white text-sm">
            <span className="font-bold">Published:</span>{" "}
            {moment(note.createdAt).format("YYYY-MM-DD")}
          </p>
        </div>
      ) : (
        <p>Note not found.</p>
      )}
    </div>
  );
};

export default FullNote;
