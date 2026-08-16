"use client"

import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of our context state
interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

// Create the context with default values
const SidebarContext = createContext<SidebarContextProps>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

// Create a provider component
export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the Sidebar context
export const useSidebar = () => useContext(SidebarContext);
