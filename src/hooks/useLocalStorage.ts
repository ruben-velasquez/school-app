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

export function getlocalStorageItem<T>(key: string, initialState: T) {
  const data = localStorage.getItem(key);

  if (data) return JSON.parse(data) as T;

  return initialState;
}