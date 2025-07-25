import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const formSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="container max-w-lg w-full h-full mx-auto flex justify-center items-center pt-20">
      <form className="flex w-full h-fit flex-col bg-gray-900 p-18 rounded-xl" onSubmit={formSubmit}>
        <div className="pb-8 flex flex-col gap-2">
          <h1 className="font-bold text-4xl">Login</h1>
          <span className="font-light text-md">to get started</span>
        </div>
        <div className="flex flex-col pb-8 gap-2">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            className="bg-gray-600 p-1 rounded-md"
            name="email"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
            placeholder="johndoe@email.com"
          />
          <label htmlFor="name">Password</label>
          <input
            type="password"
            className="bg-gray-600 p-1 rounded-md"
            name="password"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
            placeholder="******"
          />
        </div>
        <div className="flex flex-col text-center gap-2">
          <button type="submit" className="bg-blue-950 rounded-md p-2">
            {isLoggingIn ? (
              <div className="flex gap-2 justify-center">
                <Loader2 className="animate-spin" />
                <span>Logging in</span>
              </div>
            ) : (
              "Log in"
            )}
          </button>
          <span>
            Don't have an account? <Link to="/register">Sign up</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
