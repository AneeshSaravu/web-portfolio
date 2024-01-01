import { useEffect, useState } from "react";
import type { ILocalStorageValues } from "../types";

export default function useLocalStorage<T extends keyof ILocalStorageValues>(
  searchKey: T,
  defaultValue: ILocalStorageValues[T],
): readonly [ILocalStorageValues[T], (value: ILocalStorageValues[T]) => void] {
  const [storedValue, setStoredValue] = useState<ILocalStorageValues[T]>(() => {
    try {
      const item = window.localStorage.getItem(searchKey);
      return item ? (JSON.parse(item) as ILocalStorageValues[T]) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${searchKey}”:`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(searchKey, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key “${searchKey}”:`, error);
    }
  }, [storedValue, searchKey]);
  return [storedValue, setStoredValue] as const;
}
