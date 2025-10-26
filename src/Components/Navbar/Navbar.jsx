import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Toggler from "../../assets/menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <motion.button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          style={{ outline: "none", boxShadow: "none" }}
        >
          <motion.img src={Toggler} alt="Logo Toggler" className="img-menu" />
        </motion.button>

        <div className="collapse navbar-collapse justify-content-lg-end flex-lg-row flex-column">
          <ul className="navbar-nav cursor-pointer">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy
                smooth
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="comments"
                spy
                smooth
                duration={500}
                onClick={closeMenu}
              >
                Comments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="category"
                spy
                smooth
                duration={500}
                onClick={closeMenu}
              >
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="all-ideas"
                spy
                smooth
                duration={500}
                offset={400}
                onClick={closeMenu}
              >
                All Ideas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="collaborate"
                spy
                smooth
                duration={500}
                onClick={closeMenu}
              >
                Collaborate
              </Link>
            </li>
          </ul>
        </div>

        {/* Sidebar for mobile view */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: "250px",
                background: "#ffffff",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              {/* Close button */}
              <button
                onClick={closeMenu}
                style={{
                  alignSelf: "flex-end",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                  color: "#555",
                }}
              >
                &times;
              </button>

              {/* Sidebar links */}
              <ul className="navbar-nav gap-3 mt-3">
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="home"
                    spy
                    smooth
                    duration={500}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                  <Link
                    className="nav-link"
                    to="comments"
                    spy
                    smooth
                    duration={500}
                    onClick={closeMenu}
                  >
                    Comments
                  </Link>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                  <Link
                    className="nav-link"
                    to="createIdea"
                    spy
                    smooth
                    duration={500}
                    onClick={closeMenu}
                  >
                    Create Idea
                  </Link>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                  <Link
                    className="nav-link"
                    to="all-ideas"
                    spy
                    smooth
                    duration={500}
                    onClick={closeMenu}
                  >
                    All Ideas
                  </Link>
                </motion.li>
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                  <Link
                    className="nav-link"
                    to="collaborate"
                    spy
                    smooth
                    duration={500}
                    onClick={closeMenu}
                  >
                    Collaborate
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
