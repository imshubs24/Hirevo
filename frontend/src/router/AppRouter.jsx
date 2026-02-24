import { Route, Routes } from "react-router-dom"
import LandingPage from "../components/pages/LandingPage";
import Login from "../components/pages/LandingPage";
import Register from "../components/pages/LandingPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRouter