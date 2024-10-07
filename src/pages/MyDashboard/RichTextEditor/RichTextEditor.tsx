import { useRef } from "react";
import JoditEditor, { Jodit } from "jodit-react";

const RichTextEditor = ({ content, onChangeContent }) => {
  const editor = useRef(null);
  {
    console.log("richtexteditor", content);
  }

  return (
    <JoditEditor
      // config={config}
      ref={editor}
      value={content}
      tabIndex={1} // tabIndex of textarea
      onChange={(newContent) => onChangeContent(newContent)}
    />
  );
};

export default RichTextEditor;
