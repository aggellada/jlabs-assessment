import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { createUser } = useAuthStore();

  const formSubmit = (e) => {
    e.preventDefault();
    createUser(formData);
  };

  return (
    <div className="container max-w-lg w-full h-full mx-auto flex justify-center items-center pt-20">
      <form className="flex w-full flex-col bg-gray-900 p-20 rounded-xl" onSubmit={formSubmit}>
        <div className="flex flex-col gap-2 pb-8">
          <h1 className="font-bold text-3xl">Sign up</h1>
          <span className="font-light text-md">Create an account and registerr</span>
        </div>
        <div className="flex flex-col pb-8 gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="bg-gray-600 p-1 rounded-md"
            name="name"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
            placeholder="John Doe"
          />
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
            Sign up
          </button>
          <span>
            Already have an account? <Link to="/login">Log in</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
