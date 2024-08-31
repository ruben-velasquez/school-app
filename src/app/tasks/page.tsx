"use client";
import Button from "@/components/button";
import Selector from "@/components/selector";
import Sidebar from "@/components/sidebar";
import TextInput from "@/components/text-input";
import { BiPlus } from "react-icons/bi";
import Tasks from "@/components/tasks";
import { FormEventHandler } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addTask } from "@/redux/features/tasksSlice";

export default function TasksPage() {
  const dispatch = useAppDispatch();

  const addTaskHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    dispatch(
      addTask({
        name: formData.get("task-name") as string,
        createdAt: new Date().toString(),
        priority: formData.get("task-priority") as string,
        completed: false,
      }),
    );
  };

  return (
    <>
      <Sidebar />
      <main className="bg-background w-4/5 flex flex-col py-5 px-10 gap-5 overflow-y-scroll">
        <header className="w-full">
          <h2 className="text-3xl font-headings tracking-wider">Tasks</h2>
        </header>
        <form className="flex gap-2" onSubmit={addTaskHandler}>
          <div className="flex-grow">
            <TextInput required name="task-name" placeholder="My new task" />
          </div>
          <Selector options={["Normal", "Important"]} />
          <Button isButton>
            <BiPlus /> Add task
          </Button>
        </form>
        <Tasks />
      </main>
    </>
  );
}
