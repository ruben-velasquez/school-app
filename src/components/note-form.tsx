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
  titleState,
  descriptionState,
}: NoteFormProps) {
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit(e);

    titleState[1]("");
    descriptionState[1]("");
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
            name="title"
            placeholder="My new note"
            required
            value={titleState[0]}
            onChange={(e) => titleState[1](e.target.value)}
          />
          <p className="text-gray-300">Description*</p>
          <TextArea
            name="description"
            placeholder="The description of my new note."
            required
            value={descriptionState[0]}
            onChange={(e) => descriptionState[1](e.target.value)}
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
  titleState: [string, Dispatch<SetStateAction<string>>];
  descriptionState: [string, Dispatch<SetStateAction<string>>];
  action: "Add" | "Edit";
  onSubmit: FormEventHandler<HTMLFormElement>;
  closeModal: MouseEventHandler;
  id: string;
};
