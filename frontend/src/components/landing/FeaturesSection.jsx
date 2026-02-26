import {
    Briefcase,
    Users,
    BarChart3,
    CheckCircle,
    LayoutDashboard,
    MessageSquare,
} from "lucide-react";

const features = [
    {
        icon: <LayoutDashboard size={28} />,
        title: "Centralized Dashboard",
        description:
            "Manage applications, job listings, and hiring pipelines from a single, intuitive interface.",
    },
    {
        icon: <Briefcase size={28} />,
        title: "Application Tracking",
        description:
            "Track every application stage with clear status updates and organized workflow management.",
    },
    {
        icon: <Users size={28} />,
        title: "Role-Based Access",
        description:
            "Separate experiences for candidates, recruiters, and admins with secure access control.",
    },
    {
        icon: <CheckCircle size={28} />,
        title: "Pipeline Management",
        description:
            "Move candidates across stages effortlessly with structured hiring workflows.",
    },
    {
        icon: <MessageSquare size={28} />,
        title: "Communication Hub",
        description:
            "Keep all hiring conversations centralized and easy to follow.",
    },
    {
        icon: <BarChart3 size={28} />,
        title: "Insights & Analytics",
        description:
            "Monitor hiring performance and optimize decisions with actionable data.",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Everything You Need to Manage Hiring
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Hirevo simplifies the hiring lifecycle — from application tracking
                        to final decision-making — for both candidates and recruiters.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-indigo-600 mb-4">
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;