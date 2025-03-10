import { EditorComponent } from "./editor/Editor";

export default function App() {
  return <EditorComponent />;
}

// import { useRef } from "react";

// export function Editor() {
//   const editorRef = useRef(null);

//   const wrapSelectionWithH2 = () => {
//     const selection = window.getSelection();
//     if (!selection?.rangeCount) return;

//     const range = selection?.getRangeAt(0);
//     const selectedText = range?.toString().trim();

//     if (!selectedText) return;

//     // Проверяем, находится ли выделенный текст уже внутри <h2>
//     const parentElement = range.commonAncestorContainer.parentElement;
//     if (parentElement?.tagName === "H2") {
//       // Если уже <h2>, просто разворачиваем обратно в текст
//       const textNode = document.createTextNode(parentElement.textContent || "");
//       parentElement.replaceWith(textNode);
//       return;
//     }

//     // Если текст не в <h2>, оборачиваем в <h2>
//     const h2 = document.createElement("h2");
//     h2.textContent = selectedText;

//     range.deleteContents(); // Удаляем старый текст
//     range.insertNode(h2); // Вставляем новый узел

//     // Перемещаем курсор за h2
//     const newRange = document.createRange();
//     newRange.setStartAfter(h2);
//     newRange.collapse(true);
//     selection?.removeAllRanges();
//     selection?.addRange(newRange);
//   };

//   const wrapSelectionWithStrong = () => {
//     const selection = window.getSelection();
//     if (!selection?.rangeCount) return;

//     const range = selection?.getRangeAt(0);
//     const selectedText = range?.toString().trim();

//     if (!selectedText) return;

//     // Проверяем, находится ли выделенный текст уже внутри <h2>
//     const parentElement = range.commonAncestorContainer.parentElement;

//     if (parentElement?.tagName === "STRONG") {
//       // Если уже <h2>, просто разворачиваем обратно в текст
//       const textNode = document.createTextNode(parentElement.textContent || "");
//       parentElement.replaceWith(textNode);
//       return;
//     }

//     // Если текст не в <h2>, оборачиваем в <h2>
//     const h2 = document.createElement("strong");
//     h2.textContent = selectedText;

//     range.deleteContents(); // Удаляем старый текст
//     range.insertNode(h2); // Вставляем новый узел

//     // Перемещаем курсор за h2
//     const newRange = document.createRange();
//     newRange.setStartAfter(h2);
//     newRange.collapse(true);
//     selection?.removeAllRanges();
//     selection?.addRange(newRange);
//   };

//   return (
//     <div>
//       <button onClick={wrapSelectionWithH2}>H2</button>
//       <button onClick={wrapSelectionWithStrong}>Strong</button>
//       <div
//         ref={editorRef}
//         contentEditable
//         style={{
//           border: "1px solid black",
//           padding: "10px",
//           minHeight: "100px",
//         }}
//       >
//         Выделите текст и нажмите H2
//       </div>
//     </div>
//   );
// }
