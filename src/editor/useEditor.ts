import { useEffect, useRef } from "react";
import { useNotes } from "./useNotes";

export const useEditor = () => {
  const { currentNote, setCurrentNoteContent, addNewNote } = useNotes();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!currentNote) return;
    if (divRef.current && divRef.current.innerHTML !== currentNote.content) {
      divRef.current.innerHTML = currentNote.content;
    }
  }, [currentNote]);

  const handleInput = () => {
    if (divRef.current) {
      if (!currentNote) {
        // Create a new note if none exists
        addNewNote();
        setCurrentNoteContent(divRef.current.innerHTML);
        return;
      }
      setCurrentNoteContent(divRef.current.innerHTML);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const text = event.clipboardData?.getData("text/plain");

    if (!currentNote) {
      // Create a new note if none exists
      addNewNote();
      // Need to wait for the next tick for currentNote to be updated
      setTimeout(() => {
        document.execCommand("insertText", false, text);
      }, 0);
      return;
    }

    document.execCommand("insertText", false, text);
  };

  const makeTitle = () => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    if (!selectedText) return;

    const parentElement = range.commonAncestorContainer.parentElement;
    if (parentElement?.tagName === "H1") {
      const textNode = document.createTextNode(parentElement.textContent || "");
      parentElement.replaceWith(textNode);
    } else {
      const h1 = document.createElement("h1");
      h1.textContent = selectedText;
      range.deleteContents();
      range.insertNode(h1);
    }

    handleInput();
  };

  const makeBold = () => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    if (!selectedText) return;

    const parentElement = range.commonAncestorContainer.parentElement;
    if (parentElement?.tagName === "STRONG") {
      const textNode = document.createTextNode(parentElement.textContent || "");
      parentElement.replaceWith(textNode);
    } else {
      const strong = document.createElement("strong");
      strong.textContent = selectedText;
      range.deleteContents();
      range.insertNode(strong);
    }

    handleInput();
  };

  const makeItalic = () => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    if (!selectedText) return;

    const parentElement = range.commonAncestorContainer.parentElement;
    if (parentElement?.tagName === "EM") {
      const textNode = document.createTextNode(parentElement.textContent || "");
      parentElement.replaceWith(textNode);
    } else {
      const em = document.createElement("em");
      em.textContent = selectedText;
      range.deleteContents();
      range.insertNode(em);
    }

    handleInput();
  };

  const makeNormal = () => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    if (!selectedText) return;

    const parentElement = range.commonAncestorContainer.parentElement;
    if (
      parentElement &&
      ["H1", "STRONG", "EM"].includes(parentElement.tagName)
    ) {
      const textNode = document.createTextNode(parentElement.textContent || "");
      parentElement.replaceWith(textNode);
    } else {
      // If text is not already formatted, just ensure it's plain text
      const textNode = document.createTextNode(selectedText);
      range.deleteContents();
      range.insertNode(textNode);
    }

    handleInput(); // Moved outside the if condition
  };

  return {
    handlePaste,
    handleInput,
    divRef,
    currentNote,
    setCurrentNoteContent,
    makeTitle,
    makeBold,
    makeItalic,
    makeNormal,
  };
};
