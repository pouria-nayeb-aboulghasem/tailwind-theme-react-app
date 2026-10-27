import type { ThemeContextType } from "@/types";
import { createContext } from "react";

// step 1: create context with output types
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export { ThemeContext };
