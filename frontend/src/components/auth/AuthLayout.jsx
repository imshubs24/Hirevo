import { useNavigate } from "react-router";
import Container from "../layout/Container";

const AuthLayout = ({ title, subtitle, children }) => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            {/* Top Bar */}
            <div>
                <Container>
                    <img
                        onClick={() => navigate('/')}
                        src='/hirevo-logo.webp'
                        alt="Hirevo Logo"
                        className="h-16 w-auto hover:cursor-pointer"
                        width={40}
                        height={40}
                        loading="eager"
                    />
                </Container>
            </div>

            {/* Center Content */}
            <div className="flex flex-1 items-center justify-center">
                <Container className="flex justify-center">
                    <div className=" w-auto md:min-w-xl max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

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