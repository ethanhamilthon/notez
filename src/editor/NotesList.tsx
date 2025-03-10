import { Check, Pencil, Plus } from "lucide-react";
import { styled } from "../style";
import { Flex } from "../shared/Flex";
import { useNotes } from "./useNotes";

const AddNewNote = styled(Flex, {
  width: "100%",
  textDecoration: "underline",
  cursor: "pointer",
});

const ThemeContainer = styled("div", {
  display: "flex",
  gap: "$small",
  flexWrap: "wrap",
});

const NoteItem = styled("span", {
  color: "$text",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  variants: {
    active: {
      true: {
        color: "$text",
      },
      false: {
        color: "$text",
        opacity: 0.5,
      },
    },
  },
});

const NoteTitleInput = styled("input", {
  all: "unset",
  width: "100%",
  borderRadius: "4px",
  padding: "4px",
  border: "1px solid $back",
  color: "black",
});

const EditButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  color: "$text",
  transition: "0.2s ease-out",
  "&:hover": {
    color: "$text",
    opacity: 0.5,
  },
});

// Move other styled components here...

export const NotesList = () => {
  const {
    notes,
    changeCurrentNote,
    setNoteTitle,
    currentNote,
    addNewNote,
    editingId,
    setEditingId,
  } = useNotes();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditingId(null);
    }
  };

  return (
    <ThemeContainer
      css={{
        flexWrap: "nowrap",
        flexDirection: "column",
        alignContent: "flex-start",
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        borderRadius: "4px",
      }}
    >
      <AddNewNote onClick={addNewNote}>
        <span>New note</span>
        <Plus size={16} />
      </AddNewNote>
      {notes?.map((note) => {
        if (editingId === note.id) {
          return (
            <Flex key={note.id} css={{ justifyContent: "space-between" }}>
              <NoteTitleInput
                value={note.title}
                onChange={(e) => setNoteTitle(e.target.value, note.id)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <EditButton onClick={() => setEditingId(null)}>
                <Check size={16} />
              </EditButton>
            </Flex>
          );
        } else {
          return (
            <Flex key={note.id} css={{ justifyContent: "space-between" }}>
              <NoteItem
                active={note.id === currentNote?.id}
                onClick={() => changeCurrentNote(note.id)}
              >
                {note.title}
              </NoteItem>
              <EditButton onClick={() => setEditingId(note.id)}>
                <Pencil size={16} />
              </EditButton>
            </Flex>
          );
        }
      })}
    </ThemeContainer>
  );
};
