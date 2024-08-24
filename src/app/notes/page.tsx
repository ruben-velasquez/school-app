"use client";
import React, { useEffect } from "react";
import Button from "@/components/button";
import NoteCard from "@/components/note-card";
import NoteForm from "@/components/note-form";
import Sidebar from "@/components/sidebar";
import { closeModal, openModal } from "@/utils/modal";
import { FormEventHandler, Suspense, useState } from "react";
import { BiPlus } from "react-icons/bi";
import NotesSkeleton from "@/components/notes-skeleton";
import {
  clearAddNotesForm,
  fillEditNoteForm,
  getAddNotes,
  getEditNotes,
} from "@/utils/notes-actions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  createNote,
  deleteNote,
  Note,
  setNotes,
  updateNote,
} from "@/redux/features/notesSlice";
import { localStorageForRedux } from "@/hooks/useLocalStorage";

export default function NotesPage() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.value);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const _notes = localStorageForRedux("notes", [] as Note[]);
    dispatch(setNotes(_notes));
    setIsLoading(false);
  }, [dispatch]);

  const [selectedNote, setSelectedNote] = useState(0);

  const openEditModal = (noteId: number) => {
    openModal("edit-modal");

    setSelectedNote(noteId);

    fillEditNoteForm(notes[noteId]);
  };

  const addNoteHandler: FormEventHandler<HTMLFormElement> = () => {
    const newNote = getAddNotes();

    dispatch(createNote(newNote));

    clearAddNotesForm();

    closeModal();
  };

  const deleteNoteHandler = (id: number) => {
    dispatch(deleteNote(id));
  };

  const editNoteHandler = () => {
    const updatedNote = getEditNotes(selectedNote, notes);

    dispatch(updateNote({ index: selectedNote, updatedNote }));

    closeModal();
  };

  return (
    <>
      <Sidebar />
      <main className="bg-background w-4/5 flex flex-col py-5 px-10 gap-5">
        <header className="w-full">
          <h2 className="text-3xl font-headings tracking-wider">Notes</h2>
        </header>
        <Button isButton href="#" onclick={() => openModal("add-modal")}>
          <BiPlus /> Add note
        </Button>
        <div className="grid grid-cols-3 grid-rows-3 flex-grow gap-4">
          {isLoading ? <NotesSkeleton /> : ""}
          {notes.map((note, index) => {
            return (
              <NoteCard
                title={note.title}
                description={note.description}
                key={index}
                onDelete={() => deleteNoteHandler(index)}
                onEdit={() => openEditModal(index)}
              />
            );
          })}
        </div>
        <NoteForm
          action="Add"
          onSubmit={addNoteHandler}
          closeModal={closeModal}
          id="add-modal"
        />

        <NoteForm
          action="Edit"
          onSubmit={editNoteHandler}
          closeModal={closeModal}
          id="edit-modal"
        />
      </main>
    </>
  );
}
