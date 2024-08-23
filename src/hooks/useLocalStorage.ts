/* eslint-disable react-hooks/exhaustive-deps */
/*
  Component (modified) extracted from:
  https://github.com/fazt/nextjs-context-crud/blob/master/src/hooks/useLocalStorage.js
*/
import {
  Dispatch,
  SetStateAction,
  useDebugValue,
  useEffect,
  useState,
} from "react";

export function localStorageForRedux<T>(key: string, initialState: T) {
  const data = localStorage.getItem(key);
    
  if(data) return JSON.parse(data) as T
    
  return initialState
}

export function useLocalStorage<S>(
  key: string,
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, () => void, boolean] {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  useDebugValue(state);

  const removeState = () => {
    localStorage.setItem(key, JSON.stringify(initialState));
  };

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if ((state as String).length > 0) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState, removeState, isLoading];
}

function parse(obj: string) {
  try {
    return JSON.parse(obj);
  } catch {
    return obj;
  }
}
