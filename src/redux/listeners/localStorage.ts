import { RootState } from "../store";

// convert object to string and store in localStorage
function saveToLocalStorage(state: RootState) {
  try {
    const serialisedState = JSON.stringify(state.tasks.value);
    localStorage.setItem("tasks", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
export const storeChangesSubscription = (state: RootState) => saveToLocalStorage(state);