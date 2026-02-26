const candidateSteps = [
    {
        title: "Create Your Profile",
        description:
            "Sign up and build your professional profile to start applying for jobs easily.",
    },
    {
        title: "Apply & Track Applications",
        description:
            "Apply to open roles and monitor the progress of your applications in real time.",
    },
    {
        title: "Stay Updated",
        description:
            "Receive status updates and manage communication directly from your dashboard.",
    },
];

const recruiterSteps = [
    {
        title: "Post Job Openings",
        description:
            "Create and publish job listings with detailed requirements and role expectations.",
    },
    {
        title: "Manage Candidates",
        description:
            "Review applications, move candidates through pipeline stages, and organize workflows.",
    },
    {
        title: "Make Better Hiring Decisions",
        description:
            "Track hiring progress with structured insights and finalize candidates confidently.",
    },
];

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        How Hirevo Works
                    </h2>
                    <p className="mt-4 text-gray-600">
                        A simple, structured workflow designed to make hiring seamless
                        for both candidates and recruiters.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="mt-16 grid lg:grid-cols-2 gap-12">

                    {/* Candidates */}
                    <div>
                        <h3 className="text-xl font-semibold text-indigo-600 mb-6">
                            For Candidates
                        </h3>

                        <div className="space-y-8">
                            {candidateSteps.map((step, index) => (
                                <div key={index} className="flex gap-5">
                                    <div className="shrink-0">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900">
                                            {step.title}
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recruiters */}
                    <div>
                        <h3
                            id="recruiters"
                            className="text-xl font-semibold text-indigo-600 mb-6"
                        >
                            For Recruiters
                        </h3>

                        <div className="space-y-8">
                            {recruiterSteps.map((step, index) => (
                                <div key={index} className="flex gap-5">
                                    <div className="shrink-0">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900">
                                            {step.title}
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;