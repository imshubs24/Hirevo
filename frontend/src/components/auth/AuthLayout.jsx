import { Link } from "react-router-dom";
import Container from "../layout/Container";

const AuthLayout = ({ title, subtitle, children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            {/* Top Bar */}
            <div>
                <Container>
                    <Link
                        to="/"
                    >
                        <img
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            src='/hirevo-logo.webp'
                            alt="Hirevo Logo"
                            className="h-16 w-auto hover:cursor-pointer"
                            width={40}
                            height={40}
                            loading="eager"
                        />
                    </Link>
                </Container>
            </div>

            {/* Center Content */}
            <div className="flex flex-1 items-center justify-center">
                <Container className="flex justify-center">
                    <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                        <h1 className="text-2xl font-bold text-gray-900">
                            {title}
                        </h1>

                        <p className="mt-2 text-sm text-gray-600">
                            {subtitle}
                        </p>

                        <div className="mt-6">
                            {children}
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AuthLayout;