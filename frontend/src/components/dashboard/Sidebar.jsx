import { NavLink } from "react-router-dom";
import { LogOut, ChevronLeft } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useDashboardUI } from "../../context/DashboardUIContext";
import { dashboardNav } from "../../config/dashboardNav";

export default function Sidebar() {
    const { user, logout } = useAuth();
    const { sidebarOpen, setSidebarOpen, collapsed, setCollapsed } = useDashboardUI();
    const navItems = dashboardNav[user?.role] || [];

    return (
        <aside
            className={`
        fixed md:static z-40 top-0 left-0 h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 ${collapsed ? "md:w-20" : "md:w-64"} w-64`}
        >

            {/* Header */}
            <div className="h-16 flex items-center justify-between px-4 border-b">

                {!collapsed && (
                    <h1 className="text-xl font-semibold text-indigo-600">
                        Hirevo
                    </h1>
                )}

                <button
                    onClick={() => {
                        if (window.innerWidth < 768) {
                            setSidebarOpen(false);
                        } else {
                            setCollapsed(!collapsed);
                        }
                    }}
                >
                    <ChevronLeft
                        size={20}
                        className={`transition cursor-pointer ${collapsed ? "rotate-180" : ""}`}
                    />
                </button>

            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">

                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/dashboard"}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg transition
          ${isActive
                                    ? "bg-indigo-50 text-indigo-600 font-medium"
                                    : "hover:bg-gray-100"
                                }`
                            }
                        >
                            <Icon size={18} />
                            {!collapsed && item.label}
                        </NavLink>
                    );
                })}

            </nav>

            {/* Logout */}
            <div className="p-4 border-t">
                <button
                    onClick={logout}
                    className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                    <LogOut size={18} />
                    {!collapsed && "Logout"}
                </button>
            </div>

        </aside>
    );
}