"use client";
import Button from "@/components/button";
import NoteCard from "@/components/note-card";
import NoteForm from "@/components/note-form";
import Sidebar from "@/components/sidebar";
import { useNotes } from "@/context/notes-context";
import { closeModal, openModal } from "@/utils/modal";
import { FormEventHandler, useState } from "react";
import { BiPlus } from "react-icons/bi";

export default function NotesPage() {
  const { notes, createNote, updateNote, deleteNote } = useNotes();

  const [selectedNote, setSelectedNote] = useState(0);

  const AddNoteModal = {
    titleState: useState(""),
    descriptionState: useState(""),
  };

  const editNoteModal = {
    titleState: useState(""),
    descriptionState: useState(""),
  };

  const openEditModal = (noteId: number) => {
    openModal("edit-modal");

    setSelectedNote(noteId);
    editNoteModal.titleState[1](notes[noteId].title);
    editNoteModal.descriptionState[1](notes[noteId].description);
  };

  const addNoteHandler: FormEventHandler<HTMLFormElement> = () => {
    let newNote = {
      title: AddNoteModal.titleState[0],
      description: AddNoteModal.descriptionState[0],
    };

    createNote(newNote);

    closeModal();
  };

  const deleteNoteHandler = (id: number) => {
    deleteNote(id);
  };

  const editNoteHandler = () => {
    let updatedNote = {
      title: editNoteModal.titleState[0],
      description: editNoteModal.descriptionState[0],
    };

    updateNote(selectedNote, updatedNote);

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
          titleState={AddNoteModal.titleState}
          descriptionState={AddNoteModal.descriptionState}
        />

        <NoteForm
          action="Edit"
          onSubmit={editNoteHandler}
          closeModal={closeModal}
          id="edit-modal"
          titleState={editNoteModal.titleState}
          descriptionState={editNoteModal.descriptionState}
        />
      </main>
    </>
  );
}
