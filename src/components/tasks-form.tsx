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
import Selector from "./selector";

export default function TaskForm({
  action,
  onSubmit,
  closeModal,
  id
}: TaskFormProps) {
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit(e);
  };

  return (
    <dialog
      className="border border-box-border bg-background rounded-lg m-auto px-8 py-5 w-[500px] max-w-[90%] h-[90%] shadow-2xl shadow-white/10 open:flex flex-col gap-4"
      id={id}
    >
      <h2 className="text-3xl font-headings tracking-wider">{action} task</h2>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col flex-grow justify-between"
      >
        <main className="flex flex-col gap-2">
          <p className="text-gray-300">Name*</p>
          <TextInput
            name="task-name"
            placeholder="My new Task"
            required
          />
          <p className="text-gray-300">Priority*</p>
          <Selector
            value={"Normal"}
          />
        </main>

        <footer className="flex items-center justify-end gap-2">
          <Button type="button" isButton onclick={closeModal}>
            <BiArrowBack /> Cancel
          </Button>
          <Button type="submit" isButton>
            <BiNote /> {action} task
          </Button>
        </footer>
      </form>
    </dialog>
  );
}

type TaskFormProps = {
  action: "Add" | "Edit";
  onSubmit: FormEventHandler<HTMLFormElement>;
  closeModal: MouseEventHandler;
  id: string;
};
