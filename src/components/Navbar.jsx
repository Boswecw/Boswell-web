import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
      {/* FULL-WIDTH ROW (no max-w container) */}
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-2 sm:px-3 md:px-4">
          {/* Logo — hard left */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <a href="/" className="flex items-center gap-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/siglogo.webp?alt=media&token=43e15d27-e6fa-4fa0-b7c4-2972b1c1d03a"
                alt="Boswell Web Development Solutions"
                className="h-9 w-auto select-none"
                width="180"
                height="36"
                loading="eager"
                decoding="async"
              />
              <span className="sr-only">BWD Solutions</span>
            </a>
          </motion.div>

          {/* Desktop nav — hard right */}
          <div className="hidden md:flex items-center space-x-8 ml-auto pr-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button — hard right on small screens */}
          <div className="md:hidden ml-auto pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer (full-bleed) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 text-base font-medium transition-colors rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
