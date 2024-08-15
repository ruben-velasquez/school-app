"use client";
import Button from "@/components/button";
import NoteCard from "@/components/note-card";
import Sidebar from "@/components/sidebar";
import TextArea from "@/components/text-area";
import TextInput from "@/components/text-input";
import { FormEventHandler, useState } from "react";
import { BiArrowBack, BiNote, BiPlus } from "react-icons/bi";

export default function NotesPage() {
  let initialNotes = [
    {
      title: "My note title",
      description: "My note description."
    },
    {
      title: "My note title",
      description: "My note description."
    },
    {
      title: "My note title",
      description: "My note description."
    },
  ]

  const [notes, setNotes] = useState(initialNotes);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const openAddNoteModal = () => {
    let $addModal = document.getElementById("add-modal") as HTMLDialogElement;
    
    if(!$addModal) return;

    $addModal.showModal();
  }

  const closeModal = () => {
    let $modal = document.querySelector("dialog[open]") as HTMLDialogElement;

    if(!$modal) return

    $modal.close();
  }

  const addNoteHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let note = {
      title: title,
      description: description
    }

    setTitle("");
    setDescription("");

    setNotes([...notes, note]);

    closeModal();
  }

  const deleteNoteHandler = (id: number) => {
    setNotes(notes.filter((note, index) => index != id));
  }

  return (
    <>
      <Sidebar />
      <main className="bg-background w-4/5 flex flex-col py-5 px-10 gap-5">
        <header className="w-full">
          <h2 className="text-3xl font-headings tracking-wider">Notes</h2>
        </header>
        <Button isButton href="#" onclick={openAddNoteModal}><BiPlus /> Add note</Button>
        <div className="grid grid-cols-3 grid-rows-3 flex-grow gap-4">
          {
            notes.map((note, index) => {
              return (
                <NoteCard title={note.title} description={note.description} key={index} onDelete={() => deleteNoteHandler(index)}/>
              )
            })
          }
        </div>

        <dialog className="border border-box-border bg-background rounded-lg m-auto px-8 py-5 w-[500px] max-w-[90%] h-[90%] shadow-2xl shadow-white/10 open:flex flex-col gap-4" id="add-modal">
          <h2 className="text-3xl font-headings tracking-wider">Add note</h2>
          <form onSubmit={addNoteHandler} className="flex flex-col flex-grow justify-between">
            <main className="flex flex-col gap-2">
              <p className="text-gray-300">Title*</p>
              <TextInput name="title" placeholder="My new note" required value={title}
        onChange={e => setTitle(e.target.value)} />
              <p className="text-gray-300">Description*</p>
              <TextArea name="description" placeholder="The description of my new note." required value={description}
        onChange={e => setDescription(e.target.value)} />
            </main>

            <footer className="flex items-center justify-end gap-2">
              <Button isButton onclick={closeModal}><BiArrowBack /> Cancel</Button>
              <Button isButton><BiNote /> Add note</Button>
            </footer>
          </form>
        </dialog>
      </main>
    </>
  )
}