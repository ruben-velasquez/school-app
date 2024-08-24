import { getlocalStorageItem } from "@/hooks/useLocalStorage";
import { useEffect } from "react";
import { Note, setNotes } from "./features/notesSlice";
import { setTasks, Task } from "./features/tasksSlice";
import { setLoading } from "./features/loadingSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export default function DataInitializer({ children } : { children: React.ReactNode }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const _notes = getlocalStorageItem("notes", [] as Note[]);
        dispatch(setNotes(_notes));
        
        const _tasks = getlocalStorageItem("tasks", [] as Task[]);
        dispatch(setTasks(_tasks));

        dispatch(setLoading(false));
    }, [dispatch]);

    return (
        <>
            { children }
        </>
    )
}