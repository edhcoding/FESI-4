import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  if (!key) {
    throw new Error("useLocalStorage key may not be falsy");
  }

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item
        ? JSON.parse(item)
        : initialValue instanceof Function
        ? initialValue()
        : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(undefined as unknown as T);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, remove] as const;
}

export default useLocalStorage;
