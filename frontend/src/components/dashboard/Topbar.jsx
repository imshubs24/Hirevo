import { Menu } from "lucide-react";
import { useDashboardUI } from "../../context/DashboardUIContext";
import { useAuth } from "../../context/AuthContext";

export default function Topbar() {
    const { setSidebarOpen } = useDashboardUI();
    const { user } = useAuth();

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">

            <div className="flex items-center gap-4">

                <button
                    className="md:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu size={20} />
                </button>

                <h2 className="text-lg font-semibold">
                    Dashboard
                </h2>

            </div>

            <span className="text-sm text-gray-600">
                {user?.name}
            </span>

        </header>
    );
}