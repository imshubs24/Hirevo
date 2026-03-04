import { createContext, useContext, useState } from "react";

const DashboardUIContext = createContext();

export const DashboardUIProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <DashboardUIContext.Provider
            value={{
                sidebarOpen,
                setSidebarOpen,
                collapsed,
                setCollapsed,
            }}
        >
            {children}
        </DashboardUIContext.Provider>
    );
};

export const useDashboardUI = () => useContext(DashboardUIContext);