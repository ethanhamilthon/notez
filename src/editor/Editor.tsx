import { useEffect, useRef, useState } from "react";
import { styled } from "../style";
import { Settings2, X } from "lucide-react";

const EditorContainer = styled("div", {
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

const Editor = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  padding: "$medium",
  fontSize: "$medium",
  "&[contenteditable]:focus": {
    outline: "none",
  },
});

const SettingsLayout = styled("button", {
  all: "unset",
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
  zIndex: 1,
});

const SettingsMenu = styled("div", {
  position: "absolute",
  width: "300px",
  height: "calc(100dvh - 8px * 2)",
  backgroundColor: "$baseBack",
  top: "$small",
  right: "$small",
  padding: "$medium",
  transition: "0.2s ease-out",
  borderRadius: "8px",
  "&.hidden": {
    right: "-400px",
  },
  "& div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& div .x-icon": {
    cursor: "pointer",
  },
  zIndex: 2,
});

export const EditorComponent = () => {
  const [text, setText] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <SettingsMenu className={isMenuOpen ? "" : "hidden"}>
        <div>
          <span>Settings</span>
          <X
            className="x-icon"
            size={16}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </SettingsMenu>
      <SettingsLayout onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Settings2 size={16} fill="$back" />
      </SettingsLayout>
    </EditorContainer>
  );
};
