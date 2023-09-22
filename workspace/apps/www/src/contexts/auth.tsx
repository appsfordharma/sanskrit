import { createContext } from "react";
import { TypeCurrentUser } from "../types/common";

export const AuthContext = createContext<Partial<TypeCurrentUser>>({
  isLoading: false,
  isLoaded: false,
  isSignedIn: false,
});
