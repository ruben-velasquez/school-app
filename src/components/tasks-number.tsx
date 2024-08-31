"use client";
import { useAppSelector } from "@/redux/hooks";

export default function TasksNumber() {
  const tasks = useAppSelector((state) => state.tasks);

  return <span>{tasks.value.length}</span>;
}
