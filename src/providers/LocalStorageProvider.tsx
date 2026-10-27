import { useCallback, useMemo, type ReactNode } from "react";
import { LocalStorageContext } from "../contexts/LocalStorageContext";

type LocalStorageProviderProps = {
  children: ReactNode;
};

function LocalStorageProvider({ children }: LocalStorageProviderProps) {
  // 
  const getItem = useCallback(<T,>(key: string): T | null => {
    try {
      // get local storage with special key
      const item = localStorage.getItem(key);
      // if value is null return nothing otherwise parse it to js object
      return item === null ? null : (JSON.parse(item) as T);
    } catch {
      // if error occurred return null
      return null;
    }
  }, []);

  const setItem = useCallback(<T,>(key: string, value: T) => {
    try {
      // set json value to special key
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // manage error
      console.error("Failed to save to localStorage:", error);
    }
  }, []);

  const removeItem = useCallback((key: string) => {
    try {
      // remove local storage with special key
      localStorage.removeItem(key);
    } catch (error) {
      // manage error
      console.error("Failed to remove from localStorage:", error);
    }
  }, []);

  const value = useMemo(
    () => ({ getItem, setItem, removeItem }),
    [getItem, setItem, removeItem],
  );

  return (
    <LocalStorageContext.Provider value={value}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export { LocalStorageProvider };
