import { createContext, useContext, useEffect, useMemo, useState,type ReactNode } from "react";

// Define the shape of the context
interface AuthContextType {
  jwt: string;
  setJwt: (jwt: string) => void;
  isAuthenticated : boolean;
  setIsAuthenticated : (isAuthenticated : boolean) => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

  // lazy init from storage to avoid flicker
  const [jwt, setJwt] = useState<string>(() => localStorage.getItem("jwt") ?? "");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => !!localStorage.getItem("jwt"));

  // persist jwt
  useEffect(() => {
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      if (!isAuthenticated) setIsAuthenticated(true);
    } else {
      localStorage.removeItem("jwt");
      if (isAuthenticated) setIsAuthenticated(false);
    }
  }, [jwt]); // eslint-disable-line


  return (
    <AuthContext.Provider value={{ jwt, setJwt,isAuthenticated,setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
