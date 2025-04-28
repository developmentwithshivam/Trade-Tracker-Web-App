import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer2 = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 mt-16 select-none">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Section - Logo & About */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">
            TradeTrack <span className="text-purple-500">Journal</span>
          </h1>
          <p className="text-sm leading-relaxed max-w-xs">
            Your trusted partner for recording, reviewing, and growing your
            trading journey. Stay consistent, stay profitable.
          </p>
        </div>

        {/* Middle Section - Useful Links */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-white font-semibold text-lg">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex flex-col gap-4 text-center md:text-right">
          <h2 className="text-white font-semibold text-lg">Connect with us</h2>
          <div className="flex justify-center md:justify-end gap-6 text-xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} TradeTrack Journal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer2;
