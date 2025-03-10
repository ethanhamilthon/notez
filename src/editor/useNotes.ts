import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 } from "uuid";

type Note = {
  id: string;
  title: string;
  content: string;
};

type NotesState = {
  notes: Note[];
  currentNote: Note | null;
  editingId: string | null;
  setCurrentNote: (note: Note) => void;
  setNotes: (notes: Note[]) => void;
  setCurrentNoteContent: (content: string) => void;
  changeCurrentNote: (id: string) => void;
  addNewNote: () => void;
  setNoteTitle: (title: string, id: string) => void;
  setEditingId: (id: string | null) => void;
};

export const useNotesStore = create<NotesState>()(
  persist(
    (set, get) => ({
      notes: [],
      currentNote: null,
      editingId: null,

      setCurrentNote: (note) => set({ currentNote: note }),
      setNotes: (notes) => set({ notes }),

      setCurrentNoteContent: (content) => {
        const { currentNote } = get();
        if (!currentNote) return;
        set({ currentNote: { ...currentNote, content } });
      },

      changeCurrentNote: (id) => {
        const { notes, currentNote } = get();
        if (!notes || !currentNote) return;
        const nextNote = notes.find((note) => note.id === id);
        const nextNotes = notes.map((note) =>
          note.id === currentNote.id ? currentNote : note
        );
        if (nextNote) {
          set({
            currentNote: nextNote,
            notes: nextNotes,
            editingId: null,
          });
        }
      },

      addNewNote: () => {
        const { notes } = get();
        if (!notes) return;
        const newNote = {
          id: v4(),
          title: new Date().toLocaleString(),
          content: "",
        };
        set({
          notes: [...notes, newNote],
          currentNote: newNote,
        });
        return newNote;
      },

      setNoteTitle: (title, id) => {
        const { notes, currentNote } = get();
        if (!notes) return;
        const nextNotes = notes.map((note) =>
          note.id === id ? { ...note, title } : note
        );
        set({
          notes: nextNotes,
          currentNote:
            currentNote?.id === id ? { ...currentNote, title } : currentNote,
        });
      },

      setEditingId: (id) => set({ editingId: id }),
    }),
    {
      name: "notes-storage",
    }
  )
);

// Simple hook to access the store
export const useNotes = () => useNotesStore();
