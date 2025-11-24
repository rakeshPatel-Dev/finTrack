import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username) {
      alert("Please fill in both fields!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, username }));
    navigate("/"); // redirect to dashboard
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-[#102218]">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white dark:bg-[#0b1a14] rounded-lg shadow-md flex flex-col gap-4 w-80"
      >
        <h2 className="text-xl font-bold dark:text-white">Sign Up</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-[#102218] dark:text-white"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-[#102218] dark:text-white"
        />
        <button
          type="submit"
          className="px-3 py-2 rounded bg-green-500 hover:bg-green-600 text-white font-bold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
