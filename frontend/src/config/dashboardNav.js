import {
    LayoutDashboard,
    Briefcase,
    Building2,
    Users,
    FileText,
} from "lucide-react";

export const dashboardNav = {
    recruiter: [
        {
            label: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            label: "Companies",
            path: "/dashboard/companies",
            icon: Building2,
        },
        {
            label: "Jobs",
            path: "/dashboard/jobs",
            icon: Briefcase,
        },
        {
            label: "Candidates",
            path: "/dashboard/candidates",
            icon: Users,
        },
    ],

    candidate: [
        {
            label: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            label: "Applications",
            path: "/dashboard/applications",
            icon: FileText,
        },
        {
            label: "Jobs",
            path: "/dashboard/jobs",
            icon: Briefcase,
        },
    ],
};