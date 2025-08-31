import { createContext, useContext, useState,type ReactNode } from "react";

// Define the shape of the context
interface PageTitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

// Create the context
const PageTitleContext = createContext<PageTitleContextType | undefined>(undefined);

// Custom hook to use the context
export const usePageTitle = (): PageTitleContextType => {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error("usePageTitle must be used within a PageTitleProvider");
  }
  return context;
};

// Provider component
interface PageTitleProviderProps {
  children: ReactNode;
}

export const PageTitleProvider = ({ children }: PageTitleProviderProps) => {
  const [title, setTitle] = useState<string>("Default Title");

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
