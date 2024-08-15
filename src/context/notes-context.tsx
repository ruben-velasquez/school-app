/*
    Component partially extracted from:
    https://github.com/fazt/nextjs-context-crud/blob/master/src/context/TasksContext.js
*/
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext({} as NotesContextValue);

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotes must be used within a NotesProvider");
  return context;
};

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState([] as Note[]);

  const createNote = (newNote: Note) => {
    let note = {
      title: newNote.title,
      description: newNote.description,
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note, index) => index != id));
  };

  const updateNote = (id: number, newValues: Note) => {
    setNotes(
      notes.map((note, index) => {
        if (index == id) {
          return newValues;
        }
        return note;
      }),
    );
  };

  return (
    <NotesContext.Provider
      value={{ notes, createNote, updateNote, deleteNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};

type Note = {
  title: string;
  description: string;
};

type NotesContextValue = {
  notes: Note[];
  createNote: (newNote: Note) => void;
  updateNote: (id: number, newValues: Note) => void;
  deleteNote: (id: number) => void;
};
