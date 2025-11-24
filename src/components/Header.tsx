import  { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full dark:bg-[#102218] bg-[#f6f8f7] border-b border-black/5 dark:border-white/10 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
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
            Reports
          </Link>
          <Link
            to="/settings"
            className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-[#13ec6d] dark:hover:text-[#13ec6d] transition"
          >
            Settings
          </Link>
        </nav>

        {/* Buttons + Avatar */}
        <div className="hidden md:flex items-center gap-4">
          <button className="h-10 px-4 rounded-lg bg-[#13ec6d] text-[#112218] font-bold text-sm hover:bg-[#10d862] transition">
            Add Expense
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/10 bg-black/5"
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
          open ? "max-h-80 mt-3" : "max-h-0"
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
            to="/transactions"
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#13ec6d]"
            onClick={() => setOpen(false)}
          >
            Transactions
          </Link>
          <Link
            to="/reports"
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#13ec6d]"
            onClick={() => setOpen(false)}
          >
            Reports
          </Link>
          <Link
            to="/settings"
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#13ec6d]"
            onClick={() => setOpen(false)}
          >
            Settings
          </Link>

          <button className="h-10 mt-2 rounded-lg bg-[#13ec6d] text-[#112218] font-bold text-sm hover:bg-[#10d862] transition">
            Add Expense
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
