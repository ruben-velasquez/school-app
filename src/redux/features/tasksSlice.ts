import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  name: string;
  createdAt: string;
  priority: string;
  completed: boolean;
};

export type TasksState = {
  value: Task[];
};

const initialState: TasksState = { value: [] };

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.value.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      state.value[action.payload].completed =
        !state.value[action.payload].completed;
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.value = action.payload;
    },
    editTask: (
      state,
      action: PayloadAction<{ index: number; updatedTask: Task }>,
    ) => {
      const { index, updatedTask } = action.payload;
      state.value[index] = updatedTask;
    },
  },
});

export const { addTask, removeTask, toggleTask, setTasks, editTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
