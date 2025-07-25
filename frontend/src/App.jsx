import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import { useAuthStore } from "../store/useAuthStore";
import Navbar from "./components/Navbar";

function App() {
  const { authUser } = useAuthStore();

  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/login" element={!authUser ? <LoginPage /> : <HomePage />} />
        <Route path="/" element={!authUser ? <LoginPage /> : <HomePage />} />
        <Route path="/register" element={!authUser ? <RegisterPage /> : <HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
