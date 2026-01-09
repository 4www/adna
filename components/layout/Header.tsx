"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use useLayoutEffect for synchronous updates before paint
  useLayoutEffect(() => {
    setMounted(true);
    setIsDesktop(window.innerWidth >= 769);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Don't render interactive features until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <h1 style={{ fontSize: "2rem" }}>ADNA</h1>
          </div>
        </div>
      </header>
    );
  }

  const isScrolled = scrollProgress !== 0;

  // Calculate font size based on device and scroll
  const baseFontSize = isDesktop ? 3 : 2;
  const fontSizeReduction = isDesktop ? 1 : 0.5;
  const fontSize = baseFontSize - scrollProgress * fontSizeReduction;

  // Calculate left position with minimum margin
  const minMargin = isDesktop ? 2 : 1;
  const calculatedLeft = 50 - scrollProgress * 45;
  const finalLeft = Math.max(minMargin, calculatedLeft);

  // Unified positioning logic
  const logoStyle =
    isDesktop && !isScrolled
      ? {}
      : {
          position: "absolute" as const,
          left: `${finalLeft}%`,
          transform: "translateX(-50%)",
          ...(isDesktop && { top: 0 }),
        };

  const showHamburger = !isDesktop || scrollProgress >= 0.9;
  const showHorizontalMenu = isDesktop && !isScrolled;

  // Temporary debug - remove later
  console.log("Debug:", { scrollProgress, isDesktop, showHamburger });

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo} style={logoStyle}>
          <h1 style={{ fontSize: `${fontSize}rem` }}>ADNA</h1>
        </div>
        <Navigation
          isScrolled={isScrolled}
          isDesktop={isDesktop}
          showHamburger={showHamburger}
          showHorizontalMenu={showHorizontalMenu}
        />
      </div>
    </header>
  );
};

export default Header;
