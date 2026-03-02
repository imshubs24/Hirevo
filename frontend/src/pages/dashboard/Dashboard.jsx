import { useAuth } from "../../context/AuthContext";
import CandidateDashboard from "./CandidateDashboard";
import RecruiterDashboard from "./RecruiterDashboard";

const Dashboard = () => {
    const { user } = useAuth();

    if (!user) return null;

    if (user.role === "recruiter") {
        return <RecruiterDashboard />;
    }

    return <CandidateDashboard />;
};

export default Dashboard;