import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

/**
 * BackToHomeButton - a reusable component that navigates to the homepage.
 *
 * @param {string} className - Optional additional styling classes.
 */
const BackToHomeButton = ({ className = "" }) => (
  <div className={`inline-flex items-center ${className}`}>
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
    >
      <FaArrowLeft className="text-sm" />
      <span>Back to Home</span>
    </Link>
  </div>
);

export default BackToHomeButton;
