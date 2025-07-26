import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router-dom";

function Navbar() {
  const { authUser, logout } = useAuthStore();

  return (
    <header className="w-full h-16 flex items-center fixed top-0 border-b-1 border-gray-700 z-50 bg-gray-900">
      <div className="container mx-auto flex justify-between">
        <div className="">
          <Link to="/">
            <h1 className="font-bold text-3xl">Jlabs</h1>
          </Link>
        </div>
        {authUser && (
          <button className="bg-blue-950 rounded-md px-4 py-2" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
