import { styled } from "../style";
import { SettingComponent } from "./Settings";
import { useEditor } from "./useEditor";
import { EditorControls } from "./EditorControls";
import { useSetting } from "./useSetting";
import { useEffect, useState } from "react";

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
  fontSize: "$normal",
  fontFamily: "$normal",
  "&[contenteditable]:focus": {
    outline: "none",
  },
  "& strong": {
    fontWeight: "bold",
  },
  "& em": {
    fontStyle: "italic",
  },
  "& h1": {
    fontSize: "$title",
    fontWeight: "bold",
  },
});

export const EditorComponent = () => {
  const {
    handlePaste,
    handleInput,
    divRef,
    makeTitle,
    makeBold,
    makeItalic,
    makeNormal,
  } = useEditor();
  const { showControls, toggleControls } = useSetting();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showControls) {
      // Small delay to ensure DOM is ready for animation
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showControls]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "e") {
        e.preventDefault();
        toggleControls();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleControls]);
  return (
    <EditorContainer>
      <Editor
        ref={divRef}
        onPaste={handlePaste}
        contentEditable={true}
        onInput={handleInput}
        suppressContentEditableWarning={true}
      />
      {showControls && (
        <EditorControls
          onMakeTitle={makeTitle}
          onMakeBold={makeBold}
          onMakeItalic={makeItalic}
          onMakeNormal={makeNormal}
          className={isVisible ? "visible" : ""}
        />
      )}
      <SettingComponent />
    </EditorContainer>
  );
};
