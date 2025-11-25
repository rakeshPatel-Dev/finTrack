import { LogOut, Monitor, Moon, Sun, Trash2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Settings() {
    const existingUser = JSON.parse(localStorage.getItem("user") || "{}") || {};

    const [newName, setNewName] = useState(existingUser.name || "");
    const [newUserName, setNewUserName] = useState(existingUser.username || "");
    const [profilePic, setProfilePic] = useState(existingUser.profilePic || "");
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const [theme, setTheme] = useState("dark");

    const handleProfileUpload = (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith("image/")) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement("canvas");
                const maxSize = 100; // max width/height
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxSize) {
                        height *= maxSize / width;
                        width = maxSize;
                    }
                } else {
                    if (height > maxSize) {
                        width *= maxSize / height;
                        height = maxSize;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
                const resizedBase64 = canvas.toDataURL("image/jpeg", 0.7);
                setProfilePic(resizedBase64);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const getInitials = (name) => {
        if (!name) return "NN";
        const words = name.trim().split(" ");
        const first = words[0]?.[0]?.toUpperCase() || "";
        const last = words.length > 1 ? words[words.length - 1][0].toUpperCase() : "";
        return first + last;
    };

    const handleSaveChange = () => {
        const updatedUser = {
            name: newName,
            username: newUserName,
            profilePic,
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        toast.success("Settings saved successfully!");
        window.location.reload();
    };

    const handleLogOut = () => {
        localStorage.removeItem("user");
        toast("You're logged Out!", { icon: "🫡" });
    };

    return (
        <div className="relative flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 font-[Inter] text-black dark:text-white bg-[#f6f8f7] dark:bg-[#102218]">
            <div className="w-full space-y-4 max-w-lg p-6 md:p-8 rounded-xl bg-white dark:bg-[#0b1a14] shadow-xl border border-white/10">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Settings</h1>
                    <p className="mt-2 text-gray-400">
                        Manage your profile, appearance, and session.
                    </p>
                </header>

                <main className="space-y-6">
                    {/* Profile Picture */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Add Profile Picture
                        </label>

                        <div className="flex p-4  flex-col sm:flex-row items-center gap-6 mt-1 w-full rounded-lg border border-[#3f3f46] text-white">
                            {/* Avatar */}
                            <div className="relative w-20 h-20 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center text-white font-bold text-2xl shrink-0">
                                {profilePic ? (
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span>{getInitials(newName)}</span>
                                )}
                            </div>


                            {/* Upload & Remove Buttons */}
                            <div className="flex justify-center flex-row gap-4 w-full sm:w-auto">
                                <label
                                    htmlFor="profileUpload"
                                    className="flex items-center justify-center cursor-pointer rounded-lg bg-[#13EC6D] hover:bg-[#10c159] text-black text-sm font-medium px-4 py-2 text-center transition-colors duration-200"
                                >
                                    {!profilePic?  "Add Profile" : "Change Profile"}
                                </label>
                                <input
                                    id="profileUpload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfileUpload}
                                    className="hidden"
                                />

                                {profilePic ? (
                                    <button title="Delete Profile"
                                        onClick={() => setProfilePic("")}
                                        className="hover:bg-red-300 btn rounded-full cursor-pointer p-2  text-sm text-red-700 text-center"
                                    >
                                        <Trash2 className="btn-hover:scale-110 transition-all"/>
                                    </button>
                                ): <span className="flex items-center">No Proile Pic</span>
                                }
                            </div>
                        </div>

                        <p className="mt-2 text-xs text-gray-400">
                            Max size 100x100px. Will resize automatically to save storage.
                        </p>
                    </div>


                    {/* Name and Username */}
                    <div className="space-y-4">
                        <label className="block">
                            <span className="text-sm font-medium text-gray-300">Name</span>
                            <input
                                onChange={(e) => setNewName(e.target.value)}
                                type="text"
                                value={newName}
                                placeholder="Enter your full name"
                                className="mt-1 block w-full rounded-lg border border-[#3f3f46] text-white placeholder-gray-500 focus:border-[#13EC6D] focus:ring-[#13EC6D] px-4 py-2"
                            />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-gray-300">Username</span>
                            <input
                                onChange={(e) => setNewUserName(e.target.value)}
                                type="text"
                                value={newUserName}
                                placeholder="Enter your username"
                                className="mt-1 block w-full rounded-lg border border-[#3f3f46] text-white placeholder-gray-500 focus:border-[#13EC6D] focus:ring-[#13EC6D] px-4 py-2"
                            />
                        </label>
                    </div>

                    {/* Theme Selector */}
                    <div className="rounded-lg border border-gray-800 p-4">
                        <h2 className="font-semibold text-white">Appearance</h2>
                        <p className="text-sm text-gray-400">Choose how the app looks and feels.</p>
                        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:justify-between">
                            <span className="text-sm font-medium text-gray-300">Theme</span>
                            <div className="flex items-center gap-1 rounded-lg p-1 border border-gray-700">
                                <button
                                    onClick={() => setTheme("dark")}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${theme === "dark" ? "bg-[#13EC6D] text-black" : "text-gray-400 hover:bg-gray-700/50"
                                        }`}
                                >
                                    <Moon /> Dark
                                </button>
                                <button
                                    onClick={() => setTheme("light")}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${theme === "light" ? "bg-[#13EC6D] text-black" : "text-gray-400 hover:bg-gray-700/50"
                                        }`}
                                >
                                    <Sun /> Light
                                </button>
                                <button
                                    onClick={() => setTheme("system")}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${theme === "system" ? "bg-[#13EC6D] text-black" : "text-gray-400 hover:bg-gray-700/50"
                                        }`}
                                >
                                    <Monitor /> System
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                        <button
                            onClick={() => setLogoutModalOpen(true)}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-500/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <LogOut /> Logout
                        </button>
                        <button
                            onClick={handleSaveChange}
                            className="w-full sm:w-auto flex items-center justify-center rounded-lg px-6 py-2.5 text-sm bg-[#13ec6d] font-semibold text-black hover:bg-[#13EC6D]/70 focus:outline-none cursor-pointer focus:ring-2 focus:ring-[#13EC6D]"
                        >
                            Save Changes
                        </button>
                    </div>
                </main>

                {/* Logout Modal */}
                {logoutModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-all">
                        <div className="w-full max-w-sm rounded-xl border border-gray-800 p-6 shadow-2xl bg-[#162922]">
                            <div className="text-center">
                                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full p-4 bg-red-500/10">
                                    <LogOut size={30} className="text-red-400" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-white">Log Out</h3>
                                <p className="mt-2 text-sm text-gray-400">Are you sure you want to log out?</p>
                            </div>
                            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                                <button
                                    onClick={() => setLogoutModalOpen(false)}
                                    className="w-full sm:w-auto flex items-center justify-center rounded-lg border border-gray-700 bg-[rgba(31,41,55,0.6)] px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50"
                                >
                                    Discard
                                </button>
                                <Link
                                    to="/signup"
                                    onClick={handleLogOut}
                                    className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                                >
                                    Confirm
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
