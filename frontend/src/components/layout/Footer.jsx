const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Logo / Brand */}
                    <div className="text-lg font-semibold text-indigo-600">
                        Hirevo
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-indigo-600 transition">
                            About
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition">
                            Contact
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition">
                            Privacy
                        </a>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-600 transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Hirevo. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;