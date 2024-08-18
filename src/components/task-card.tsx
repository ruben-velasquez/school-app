import { BiPencil, BiTrash } from "react-icons/bi";
import IconButton from "./icon-button";
import { Task } from "@/context/tasks-context";

export default function TaskCard({ task, onDelete, onEdit }: TaskCardProps) {
  return (
    <li className="border-b border-box-border p-3 grid grid-cols-8 gap-4 items-center *:text-sm group">
      <div className="flex items-center gap-2 col-span-3">
        <input type="checkbox" name="completed" className="size-4 min-w-4" />
        <span>{task.name}</span>
      </div>
      <span className="text-gray-400 col-span-2 block">
        {new Date(task.createdAt).toLocaleDateString()}{" "}
        {new Date(task.createdAt).getHours()}:
        {new Date(task.createdAt).getMinutes()}
      </span>
      <span className="text-gray-400 col-span-2 block">{task.priority}</span>
      <div className="flex gap-2 group-hover:opacity-100 opacity-0 transition-opacity justify-end">
        <IconButton onclick={onEdit}>
          <BiPencil />
        </IconButton>
        <IconButton onclick={onDelete}>
          <BiTrash />
        </IconButton>
      </div>
    </li>
  );
}

type TaskCardProps = {
  task: Task;
  onDelete: () => void;
  onEdit: () => void;
};
