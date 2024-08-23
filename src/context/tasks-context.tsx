"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

const TasksContext = createContext({} as TaskProviderValue);

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useNotes must be used within a NotesProvider");
  return context;
};

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", [] as Task[]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const updateTask = (index: number, newTask: TaskEdit) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], ...newTask };
    setTasks(newTasks);
  };

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        toggleTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

type Task = {
  name: string;
  createdAt: string;
  priority: string;
  completed: boolean;
};

export type TaskEdit = {
  name: string;
  priority: string;
};

type TaskProviderValue = {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  deleteTask: (index: number) => void;
  updateTask: (index: number, newTask: TaskEdit) => void;
  toggleTask: (index: number) => void;
};
