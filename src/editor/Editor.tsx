import { useEffect, useRef, useState } from "react";
import { styled } from "../style";
import { Settings2 } from "lucide-react";

const EditorContainer = styled("div", {
  position: "relative",
});

const Editor = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  padding: "$medium",
  fontSize: "$large",
  "&[contenteditable]:focus": {
    outline: "none",
  },
});

const SettingsLayout = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  top: "$small",
  right: "$small",
  padding: "$small",
  backgroundColor: "$baseBack",
  color: "$text",
  fontSize: "$small",
  //   border: "1px solid $text",
  borderRadius: "4px",
});

export const EditorComponent = () => {
  const [text, setText] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current && divRef.current.innerHTML !== text) {
      divRef.current.innerHTML = text;
    }
  }, [text]);

  useEffect(() => {
    const savedText = localStorage.getItem("text");
    if (savedText) {
      setText(savedText);
    } else {
      setText("Write right here");
    }
  }, []);

  const handleInput = () => {
    if (divRef.current) {
      setText(divRef.current.innerHTML);
      localStorage.setItem("text", divRef.current.innerHTML); // Обновляем состояние
    }
  };
  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const text = event.clipboardData?.getData("text/plain");
    document.execCommand("insertText", false, text);
  };
  return (
    <EditorContainer>
      <Editor
        ref={divRef}
        onPaste={handlePaste}
        contentEditable={true}
        onInput={handleInput}
        suppressContentEditableWarning={true}
      ></Editor>
      <SettingsLayout>
        <Settings2 size={16} fill="$back" />
      </SettingsLayout>
    </EditorContainer>
  );
};
