import { Note } from "@/redux/features/notesSlice";

export const clearAddNotesForm = () => {
    const noteTitleInput = document.querySelector("#add-modal form input[name='note-title']") as HTMLInputElement;
    const noteDescriptionInput = document.querySelector("#add-modal form textarea[name='note-description']") as HTMLSelectElement;

    noteTitleInput.value = "";
    noteDescriptionInput.value = "";
}

export const getAddNotes = () => {
    const noteTitleInput = document.querySelector("#add-modal form input[name='note-title']") as HTMLInputElement;
    const noteDescriptionInput = document.querySelector("#add-modal form textarea[name='note-description']") as HTMLSelectElement;

    const note: Note = {
      title: noteTitleInput.value,
      description: noteDescriptionInput.value,
    };

    return note
}

export const getEditNotes = (id: number, notes: Note[]) => {
    const noteTitleInput = document.querySelector("#edit-modal form input[name='note-title']") as HTMLInputElement;
    const noteDescriptionInput = document.querySelector("#edit-modal form textarea[name='note-description']") as HTMLSelectElement;

    const note: Note = {
      title: noteTitleInput.value,
      description: noteDescriptionInput.value,
    };

    return note
}

export const fillEditNoteForm = (note: Note) => {
    const noteTitleInput = document.querySelector("#edit-modal form input[name='note-title']") as HTMLInputElement;
    const noteDescriptionInput = document.querySelector("#edit-modal form textarea[name='note-description']") as HTMLSelectElement;

    noteTitleInput.value = note.title;
    noteDescriptionInput.value = note.description;
}