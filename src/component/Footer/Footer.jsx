import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 text-gray-400 select-none">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-20 px-6 md:justify-around">
        {/* Left Section - Logo & About */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">
            TradeTrack <span className="text-purple-500">Journal</span>
          </h1>
          <p className="max-w-xs text-sm leading-relaxed">
            Your trusted partner for recording, reviewing, and growing your
            trading journey. Stay consistent, stay profitable.
          </p>
        </div>

        {/* Middle Section - Useful Links */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                className="transition-all duration-300 hover:text-purple-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="transition-all duration-300 hover:text-purple-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="transition-all duration-300 hover:text-purple-400">
                Support
              </Link>
            </li>
            <li>
              <Link className="transition-all duration-300 hover:text-purple-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex flex-col gap-4 text-center md:text-right">
          <h2 className="text-lg font-semibold text-white">Connect with us</h2>
          <div className="flex justify-center gap-6 text-xl md:justify-end">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-purple-400"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-purple-400"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-purple-400"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-purple-400"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} TradeTrack Journal. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
