import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Note = {
    title: string;
    description: string;
}

export type NotesState = {
    value: Note[];
};

const initialState: NotesState = { value: [] }

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        createNote: (state, action: PayloadAction<Note>) => {
            state.value.push(action.payload);
        },
        deleteNote: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
        updateNote: (state, action: PayloadAction<{ index: number, updatedNote: Note }>) => {
            const { index, updatedNote } = action.payload;
            state.value[index] = updatedNote;
        },
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.value = action.payload;
        }
    }
})

export const { createNote, deleteNote, updateNote, setNotes } = notesSlice.actions;

export default notesSlice.reducer;