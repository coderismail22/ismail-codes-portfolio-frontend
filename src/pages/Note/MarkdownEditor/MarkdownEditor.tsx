import React, { useState } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/agate.css"; // For code block styling
import "github-markdown-css/github-markdown.css"; // For markdown-body styling

const MarkdownEditor = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const handleEditorChange = ({ text }: { text: string }) => {
    setMarkdownContent(text);
  };

  const saveToDatabase = async () => {
    const note = {
      title: "Mongoose Notes",
      author: "Jane Doe",
      image: "https://example.com/images/react-guide.jpg",
      body: markdownContent,
      category: ["Web Development", "React", "JavaScript"],
    };
    console.log(note);
    try {
      const response = await fetch("http://localhost:5000/api/v1/note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ markdown: markdownContent }),
        body: JSON.stringify(note),
      });
      const result = await response.json();
      console.log("Saved to DB", result);
    } catch (error) {
      console.error("Error saving to database", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Markdown Editor</h2>

      {/* Markdown Editor */}
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

      {/* Button to Save Markdown to Database */}
      <button
        onClick={saveToDatabase}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save to Database
      </button>

      <h2 className="text-2xl font-bold mt-8 mb-4">Markdown Preview</h2>

      {/* Markdown Preview */}
      <div className="markdown-body  markdown-preview border p-4 mb-4 rounded shadow bg-slate-200">
        <ReactMarkdown
          children={markdownContent}
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
    </div>
  );
};

export default MarkdownEditor;
