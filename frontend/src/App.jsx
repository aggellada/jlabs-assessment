import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { useAuthStore } from "../store/useAuthStore";
import Navbar from "./components/Navbar";

function App() {
  const { authUser } = useAuthStore();

  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/" element={!authUser ? <LoginPage /> : <HomePage />} />
        <Route path="/register" element={!authUser ? <RegisterPage /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
