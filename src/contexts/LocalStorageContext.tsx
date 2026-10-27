import type { LocalStorageContextType } from "@/types";
import { createContext } from "react";

// step 1: create context with output type
const LocalStorageContext = createContext<LocalStorageContextType | undefined>(
  undefined,
);

export { LocalStorageContext };
