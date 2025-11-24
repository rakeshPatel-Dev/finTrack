import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f8f7] dark:bg-[#0b1a14] border-t border-black/5 dark:border-white/10 px-6 sm:px-10 lg:px-20 xl:px-40 py-12">
      
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo + Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-12">
                <img
                  src="/images/logo.webp"
                  alt="FinTrack Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                FinTrack
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">
              FinTrack helps you manage your money effortlessly with real-time tracking,
              smart analytics, and clean UI. Stay in control of your finances, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                Product
              </h3>
              <a className="text-sm text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition" href="#">
                Overview
              </a>
              <a className="text-sm text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition" href="#">
                Features
              </a>
              <a className="text-sm text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition" href="#">
                Pricing
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                Company
              </h3>
              <a className="text-sm text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition" href="#">
                About
              </a>
              <a className="text-sm text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition" href="#">
                Contact
              </a>
              <a className="text-sm text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/5 dark:bg-white/10 my-10"></div>

        {/* Bottom Center Text */}
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-sm text-gray-600 dark:text-white/60">
            © {new Date().getFullYear()} FinTrack. All rights reserved.
          </p>

          <p className="text-sm text-gray-600 dark:text-white/60">
            Developed by{" "}
            <a
              href="https://rakeshthedev.netlify.app"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Rakesh Patel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
