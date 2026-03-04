import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { DashboardUIProvider, useDashboardUI } from "../context/DashboardUIContext";
import { Outlet } from "react-router-dom";

const LayoutContent = () => {
    const { sidebarOpen, setSidebarOpen } = useDashboardUI();

    return (
        <div className="h-screen flex bg-gray-50 overflow-hidden">

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <Sidebar />

            <div className="flex flex-col flex-1">

                <Topbar />

                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default function DashboardLayout() {
    return (
        <DashboardUIProvider>
            <LayoutContent />
        </DashboardUIProvider>
    );
}