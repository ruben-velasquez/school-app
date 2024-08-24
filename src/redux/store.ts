import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasksSlice";
import notesReducer from "./features/notesSlice";
import loadingReducer from "./features/loadingSlice";
import { storeChangesSubscription } from "./listeners/localStorage";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    notes: notesReducer,
    loading: loadingReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

store.subscribe(() => storeChangesSubscription(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
