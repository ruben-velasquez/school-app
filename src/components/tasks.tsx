import { Task } from "@/context/tasks-context";
import TaskCard from "./task-card";
import TaskForm from "./tasks-form";
import { useEffect, useState } from "react";
import { closeModal, openModal } from "@/utils/modal";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { localStorageForRedux } from "@/hooks/useLocalStorage";
import {
  setTasks,
  editTask,
  toggleTask,
  removeTask,
} from "@/redux/features/tasksSlice";
import { fillEditTaskForm, getEditTask } from "@/utils/tasks-actions";

export default function Tasks() {
  const tasks = useAppSelector((state) => state.tasks.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const _tasks = localStorageForRedux("tasks", [] as Task[]);
    dispatch(setTasks(_tasks));
  }, [dispatch]);

  const [selectedTask, setSelectedTask] = useState(0);

  const openEditModal = (taskId: number) => {
    openModal("edit-modal");

    setSelectedTask(taskId);

    fillEditTaskForm(tasks[taskId]);
  };

  const editTaskHandler = () => {
    const task = getEditTask(selectedTask, tasks);

    dispatch(editTask({ index: selectedTask, updatedTask: task }));

    closeModal();
  };

  const toggleTaskHandler = (taskId: number) => dispatch(toggleTask(taskId));

  return (
    <section>
      <header className="grid grid-cols-8 bg-[#121212] px-4 rounded-t-xl gap-4 *:py-2 sticky -top-5">
        <div className="col-span-3 border-r border-box-border">
          <span>Name</span>
        </div>
        <div className="col-span-2 border-r border-box-border">
          <span>Created At</span>
        </div>
        <div className="col-span-2">
          <span>Priority</span>
        </div>
      </header>
      <ul>
        {tasks.map((task, index) => (
          <TaskCard
            task={task}
            key={index}
            onDelete={() => dispatch(removeTask(index))}
            onEdit={() => openEditModal(index)}
            onToggle={() => toggleTaskHandler(index)}
          />
        ))}
      </ul>
      <TaskForm
        id="edit-modal"
        action="Edit"
        onSubmit={editTaskHandler}
        closeModal={closeModal}
      />
    </section>
  );
}
