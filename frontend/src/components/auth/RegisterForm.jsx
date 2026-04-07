import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "candidate",
    });
    const { fetchUser } = useAuth();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await registerUser(formData);

            // Immediately fetch user from backend
            await fetchUser();

            navigate("/dashboard");
            // or use navigate()

        } catch (err) {
            setError(
                err.response?.data?.message || "Registration failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="flex bg-gray-100 p-1 rounded-lg">

                <button
                    type="button"
                    onClick={() =>
                        setFormData((prev) => ({ ...prev, role: "candidate" }))
                    }
                    className={`flex-1 py-2 text-sm rounded-md transition cursor-pointer
        ${formData.role === "candidate"
                            ? "bg-white shadow text-indigo-600 font-medium"
                            : "text-gray-600"
                        }`}
                >
                    Candidate
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setFormData((prev) => ({ ...prev, role: "recruiter" }))
                    }
                    className={`flex-1 py-2 text-sm rounded-md transition cursor-pointer
        ${formData.role === "recruiter"
                            ? "bg-white shadow text-indigo-600 font-medium"
                            : "text-gray-600"
                        }`}
                >
                    Recruiter
                </button>

            </div>

            {formData.role === "recruiter" && (
                <p className="text-xs text-gray-500">
                    Recruiter accounts may require approval before posting jobs.
                </p>
            )}
            
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Create a password"
                />
            </div>

            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-70 cursor-pointer"
            >
                {loading ? "Creating..." : "Create Account"}
            </button>

            <p className="text-sm text-gray-500 text-center">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-indigo-600 hover:underline"
                >
                    Sign in
                </Link>
            </p>

        </form>
    );
};

export default RegisterForm;