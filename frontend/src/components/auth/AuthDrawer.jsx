import { useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom"

const AuthDrawer = ({ isOpen, onClose }) => {
    // Close on ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-105 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-full flex flex-col">

                    {/* Header */}
                    <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Sign In to Hirevo
                        </h2>
                        <button onClick={onClose}>
                            <X className="text-gray-500 hover:text-gray-700" />
                        </button>
                    </div>

                    {/* Form */}
                    <div className="flex-1 px-6 py-8 overflow-y-auto">
                        <form className="space-y-6">

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                            >
                                Sign In
                            </button>

                            <p className="text-sm text-gray-500 text-center">
                                Don't have an account?{" "}
                                <Link to='/register' className="text-indigo-600 cursor-pointer hover:underline">
                                    Sign up
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthDrawer;