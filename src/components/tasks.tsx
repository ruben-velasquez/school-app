import { TaskEdit, useTasks } from "@/context/tasks-context";
import TaskCard from "./task-card";
import TaskForm from "./tasks-form";
import { useState } from "react";
import { closeModal, openModal } from "@/utils/modal";

export default function Tasks() {
  const { tasks, deleteTask, updateTask, toggleTask } = useTasks();

  const [selectedTask, setSelectedTask] = useState(0);

  const editTaskModal = {
    nameState: useState(""),
    priorityState: useState(""),
  };

  const openEditModal = (taskId: number) => {
    openModal("edit-modal");

    setSelectedTask(taskId);
    editTaskModal.nameState[1](tasks[taskId].name);
    editTaskModal.priorityState[1](tasks[taskId].priority);
  };

  const editTaskHandler = () => {
    const task: TaskEdit = {
      name: editTaskModal.nameState[0],
      priority: editTaskModal.priorityState[0],
    };

    updateTask(selectedTask, task);

    closeModal();
  };

  const toggleTaskHandler = (taskId: number) => {
    toggleTask(taskId);
  };

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
            onDelete={() => deleteTask(index)}
            onEdit={() => openEditModal(index)}
            onToggle={() => toggleTaskHandler(index)}
          />
        ))}
      </ul>
      <TaskForm
        id="edit-modal"
        action="Edit"
        nameState={editTaskModal.nameState}
        priorityState={editTaskModal.priorityState}
        onSubmit={editTaskHandler}
        closeModal={closeModal}
      />
    </section>
  );
}
