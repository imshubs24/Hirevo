import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const candidateBenefits = [
    "Track applications in real time",
    "Organize applied jobs effortlessly",
    "Receive status updates instantly",
    "Maintain a structured job search",
];

const recruiterBenefits = [
    "Manage hiring pipelines efficiently",
    "Shortlist and evaluate candidates",
    "Collaborate with hiring teams",
    "Track recruitment performance",
];

const SplitSection = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Candidates */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900">
                            For Candidates
                        </h3>

                        <p className="mt-4 text-gray-600">
                            Stay organized and take control of your job search with a
                            structured and transparent workflow.
                        </p>

                        <ul className="mt-6 space-y-4">
                            {candidateBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check size={18} className="text-indigo-600 mt-1" />
                                    <span className="text-sm text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/register"
                            className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm"
                        >
                            Start Applying
                        </Link>
                    </div>

                    {/* Recruiters */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900">
                            For Recruiters
                        </h3>

                        <p className="mt-4 text-gray-600">
                            Streamline hiring workflows, evaluate candidates efficiently,
                            and make informed recruitment decisions.
                        </p>

                        <ul className="mt-6 space-y-4">
                            {recruiterBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check size={18} className="text-indigo-600 mt-1" />
                                    <span className="text-sm text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/register"
                            className="inline-block mt-8 border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-600 hover:text-white transition"
                        >
                            Start Hiring
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SplitSection;