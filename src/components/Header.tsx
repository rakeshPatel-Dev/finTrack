import { LogOut, Settings, UserRoundCog } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [avatarOpen, setAvatarOpen] = useState(false); // avatar dropdown

  const existingUser = JSON.parse(localStorage.getItem("user") || "{}");
  const profilePic = existingUser?.profilePic || "";
  const name = existingUser?.name || "User";

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.length === 1
      ? names[0][0].toUpperCase()
      : names[0][0].toUpperCase() + names[names.length - 1][0].toUpperCase();
  };

  return (  
    <header className="w-full dark:bg-[#102218] bg-[#f6f8f7] border-b border-black/5 dark:border-white/10 px-4 sm:px-6 py-3 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.webp"
            alt="FinTrack logo"
            className="w-8 h-8 object-contain"
          />
          <h2 className="text-lg font-bold text-[#0d1d16] dark:text-white tracking-tight">
            FinTrack
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-sm font-medium text-[#0d1d16] dark:text-white hover:text-[#13ec6d] dark:hover:text-[#13ec6d] transition"
          >
            Dashboard
          </Link>
          <Link
            to="/transaction"
            className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-[#13ec6d] dark:hover:text-[#13ec6d] transition"
          >
            Transactions
          </Link>
          <Link
            to="/history"
            className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-[#13ec6d] dark:hover:text-[#13ec6d] transition"
          >
            History
          </Link>
          <Link
            to="/transaction"
            className="h-10 px-4 rounded-lg bg-[#13ec6d] text-[#112218] font-bold flex items-center justify-center text-sm hover:bg-[#10d862] transition"
          >
            Add Expense
          </Link>
        </nav>

        {/* Avatar */}
        <div className="flex items-center gap-4 relative">
          <button
            onClick={() => setAvatarOpen(!avatarOpen)}
            className="w-10 h-10 rounded-full border border-gray-700 overflow-hidden bg-gray-800 flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:ring-2 hover:ring-[#13ec6d] transform hover:scale-105 transition-all"
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              getInitials(name)
            )}
          </button>

          {/* Avatar Dropdown */}
          {avatarOpen && (
            <div className="absolute right-0  px-4 top-12 w-44 bg-white dark:bg-[#0b1a14] shadow-xl rounded-lg border border-white/10 z-50 flex flex-col py-2">
              <div className="text-white/10 px-4 py-2 border-b">
                <h1 className= " text-left text-white">{existingUser.name}</h1>
              </div>
              <Link
                to="/settings"
                className="px-4 py-2 text-sm flex flex-row gap-2 text-gray-700 dark:text-gray-200 hover:bg-[#13ec6d]/20 transition"
                onClick={() => setAvatarOpen(false)}
              ><Settings size={20} />
                Settings
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/signup";
                }}
                className="px-4 py-2 flex flow-row gap-2 text-sm text-red-500 hover:bg-red-500/10 transition text-left"
              > <LogOut size={20}/>
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/10 bg-black/5 ml-2"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl text-[#0d1d16] dark:text-white">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 py-4 px-2">
          <Link
            to="/"
            className="text-sm font-medium text-[#0d1d16] dark:text-white hover:text-[#13ec6d]"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/transaction"
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#13ec6d]"
            onClick={() => setOpen(false)}
          >
            Transactions
          </Link>
          <Link
            to="/history"
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#13ec6d]"
            onClick={() => setOpen(false)}
          >
            History
          </Link>
          <Link
            to="/transaction"
            className="h-10 mt-2 rounded-lg bg-[#13ec6d] text-[#112218] font-bold text-sm flex items-center justify-center hover:bg-[#10d862] transition"
            onClick={() => setOpen(false)}
          >
            Add Expense
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
