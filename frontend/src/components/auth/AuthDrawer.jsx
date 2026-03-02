import { useEffect } from "react";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";

const AuthDrawer = ({ isOpen, onClose }) => {
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
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />

            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-105 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-full flex flex-col">

                    <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Sign In to Hirevo
                        </h2>
                        <button onClick={onClose}>
                            <X className="text-gray-500 hover:text-gray-700" />
                        </button>
                    </div>

                    <div className="flex-1 px-6 py-8 overflow-y-auto">
                        <LoginForm onSuccess={() => onClose()} />
                    </div>

                </div>
            </div>
        </>
    );
};

export default AuthDrawer;