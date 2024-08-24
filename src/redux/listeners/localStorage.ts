import { RootState } from "../store";

// convert object to string and store in localStorage
function saveToLocalStorage(state: RootState) {
  try {
    // Tasks
    if (state.tasks.value.length > 0) {
      const serialisedTasks = JSON.stringify(state.tasks.value);
      localStorage.setItem("tasks", serialisedTasks);
    }

    // Notes
    if (state.notes.value.length > 0) {
      const serialisedNotes = JSON.stringify(state.notes.value);
      localStorage.setItem("notes", serialisedNotes);
    }
  } catch (e) {
    console.warn(e);
  }
}

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
export const storeChangesSubscription = (state: RootState) =>
  saveToLocalStorage(state);
