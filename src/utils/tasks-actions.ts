import { Task } from "@/redux/features/tasksSlice";

export const getEditTask = (id: number, tasks: Task[]) => {
  const taskNameInput = document.querySelector(
    "#edit-modal form input[name='task-name']",
  ) as HTMLInputElement;
  const taskPriorityInput = document.querySelector(
    "#edit-modal form select[name='task-priority']",
  ) as HTMLSelectElement;

  const task: Task = {
    name: taskNameInput.value,
    priority: taskPriorityInput.value,
    createdAt: tasks[id].createdAt,
    completed: tasks[id].completed,
  };

  return task;
};

export const fillEditTaskForm = (task: Task) => {
  const taskNameInput = document.querySelector(
    "#edit-modal form input[name='task-name']",
  ) as HTMLInputElement;
  const taskPriorityInput = document.querySelector(
    "#edit-modal form select[name='task-priority']",
  ) as HTMLSelectElement;

  taskNameInput.value = task.name;
  taskPriorityInput.value = task.priority;
};
