"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  isScrolled?: boolean;
  isDesktop?: boolean;
  showHamburger?: boolean;
  showHorizontalMenu?: boolean;
}

const Navigation = ({
  isScrolled = false,
  isDesktop = false,
  showHamburger = true,
  showHorizontalMenu = false,
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Calculate position for desktop hamburger (appears at right when visible)
  const navStyle =
    isDesktop && showHamburger
      ? {
          position: "absolute" as const,
          right: "2rem",
        }
      : {};

  return (
    <nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ""} ${
        !showHamburger && !showHorizontalMenu ? styles.hidden : ""
      }`}
      style={navStyle}
    >
      {showHamburger && (
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.line} ${isOpen ? styles.open : ""}`}
          ></span>
          <span
            className={`${styles.line} ${isOpen ? styles.open : ""}`}
          ></span>
          <span
            className={`${styles.line} ${isOpen ? styles.open : ""}`}
          ></span>
        </button>
      )}

      {/* Full-screen blurred overlay */}
      <div
        className={`${styles.menuOverlay} ${isOpen ? styles.open : ""} ${
          showHorizontalMenu ? styles.horizontal : ""
        }`}
        onClick={closeMenu}
      >
        <ul className={styles.navList} onClick={(e) => e.stopPropagation()}>
          <li style={{ animationDelay: "0.1s" }}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li style={{ animationDelay: "0.2s" }}>
            <Link href="/music" onClick={closeMenu}>
              Music
            </Link>
          </li>
          <li style={{ animationDelay: "0.3s" }}>
            <Link href="/tours" onClick={closeMenu}>
              Tours
            </Link>
          </li>
          <li style={{ animationDelay: "0.4s" }}>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li style={{ animationDelay: "0.5s" }}>
            <Link href="/newsletter" onClick={closeMenu}>
              Newsletter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
