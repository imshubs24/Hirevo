import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            Simplify Your Hiring Workflow.
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                            Hirevo helps candidates track applications and enables recruiters
                            to manage hiring pipelines — all in one streamlined platform.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/register"
                                className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm"
                            >
                                Get Started
                            </Link>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("recruiters")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-indigo-600 hover:text-indigo-600 transition"
                            >
                                For Recruiters
                            </button>
                        </div>
                    </div>

                    {/* Right Dashboard Mock */}
                    <div className="relative">
                        <div className="rounded-xl shadow-lg border border-gray-100 bg-gray-50 p-6">

                            {/* Fake Top Bar */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                                </div>
                                <div className="text-xs text-gray-400">Hirevo Dashboard</div>
                            </div>

                            {/* Fake Content */}
                            <div className="space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-4 bg-gray-200 rounded w-1/2" />
                                <div className="h-4 bg-gray-200 rounded w-5/6" />
                                <div className="h-20 bg-white rounded shadow-sm border border-gray-100" />
                                <div className="h-20 bg-white rounded shadow-sm border border-gray-100" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;