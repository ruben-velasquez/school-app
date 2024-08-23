import { BiArrowBack, BiNote } from "react-icons/bi";
import Button from "./button";
import TextArea from "./text-area";
import TextInput from "./text-input";
import {
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";

export default function NoteForm({
  action,
  onSubmit,
  closeModal,
  id,
}: NoteFormProps) {
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit(e);
  };

  return (
    <dialog
      className="border border-box-border bg-background rounded-lg m-auto px-8 py-5 w-[500px] max-w-[90%] h-[90%] shadow-2xl shadow-white/10 open:flex flex-col gap-4"
      id={id}
    >
      <h2 className="text-3xl font-headings tracking-wider">{action} note</h2>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col flex-grow justify-between"
      >
        <main className="flex flex-col gap-2">
          <p className="text-gray-300">Title*</p>
          <TextInput
            name="note-title"
            placeholder="My new note"
            required
          />
          <p className="text-gray-300">Description*</p>
          <TextArea
            name="note-description"
            placeholder="The description of my new note."
            required
          />
        </main>

        <footer className="flex items-center justify-end gap-2">
          <Button type="button" isButton onclick={closeModal}>
            <BiArrowBack /> Cancel
          </Button>
          <Button type="submit" isButton>
            <BiNote /> {action} note
          </Button>
        </footer>
      </form>
    </dialog>
  );
}

type NoteFormProps = {
  action: "Add" | "Edit";
  onSubmit: FormEventHandler<HTMLFormElement>;
  closeModal: MouseEventHandler;
  id: string;
};
