import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue: Array<T>) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key) === null) return defaultValue;
    return JSON.parse(localStorage.getItem(key)!);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
