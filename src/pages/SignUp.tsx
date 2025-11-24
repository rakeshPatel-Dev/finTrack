import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username) {
      toast.error("Please fill in both fields!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, username }));
    navigate("/"); // redirect to dashboard
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-gray-100 dark:bg-[#102218] overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <div className="px-4 py-5 flex flex-1 justify-center items-center">
          <div className="w-full max-w-md p-6 md:p-8 rounded-xl bg-white dark:bg-[#0b1a14] shadow-xl border border-white/10">

            {/* Logo + Heading */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo.webp"
                  alt="FinTrack Logo"
                  className="w-10 h-10 rounded"
                />
                <p className="text-gray-900 dark:text-white text-2xl font-extrabold tracking-tight">
                  FinTrack
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-900 dark:text-white text-3xl font-black leading-tight">
                  Create Your Account
                </p>
                <p className="text-gray-600 dark:text-[#92c9a9] text-base mt-2">
                  Get started tracking your expenses
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col flex-1">
                <p className="text-gray-900 dark:text-white text-base font-medium pb-2">
                  Full Name
                </p>
                <input
                  type="text"
                  placeholder="e.g. Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-[#326748] dark:border-[#326748] bg-white dark:bg-[#193324] text-gray-900 dark:text-white h-14 px-4 placeholder:text-gray-500 dark:placeholder:text-[#92c9a9] focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </label>

              <label className="flex flex-col flex-1">
                <p className="text-gray-900 dark:text-white text-base font-medium pb-2">
                  Username
                </p>
                <input
                  type="text"
                  placeholder="e.g. yourName_007"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg border border-[#326748] bg-white dark:bg-[#193324] text-gray-900 dark:text-white h-14 px-4 placeholder:text-gray-500 dark:placeholder:text-[#92c9a9] focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </label>

              <button
                type="submit"
                className="h-14 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold text-base w-full transition-colors"
              >
                Sign Up
              </button>
            </form>

            {/* Bottom Text */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-600 dark:text-[#6a8b7a]">
                By signing up, you agree to our{" "}
                <a className="underline hover:text-green-400" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="underline hover:text-green-400" href="#">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Signup;
