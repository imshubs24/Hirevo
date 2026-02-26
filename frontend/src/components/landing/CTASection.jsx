import { Link } from "react-router-dom";

const CTASection = () => {
    return (
        <section className="bg-indigo-600 py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Ready to Transform Your Hiring Process?
                </h2>

                <p className="mt-4 text-indigo-100 text-lg">
                    Join Hirevo today and experience a structured, efficient, and
                    transparent hiring workflow.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/register"
                        className="bg-white text-indigo-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition shadow-sm"
                    >
                        Get Started for Free
                    </Link>

                    <Link
                        to="/login"
                        className="border border-white text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white hover:text-indigo-600 transition"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CTASection;