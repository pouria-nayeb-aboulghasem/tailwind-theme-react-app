import { LocalStorageContext } from "@/contexts/LocalStorageContext";
import { useContext } from "react";

export function useLocalStorage() {
  const context = useContext(LocalStorageContext);

  if (context === undefined)
    throw new Error(
      "useLocalStorage must be used within a LocalStorageProvider",
    );

  return context;
}
