"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "../data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="Back to top">
        <span className="brand-mark">{profile.initials}</span>
        <span className="brand-copy">
          <strong>{profile.name}</strong>
          <small>PORTFOLIO / 2026</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta desktop-only" href="#contact">
        Let&apos;s connect <ArrowUpRight size={15} />
      </a>

      <button
        type="button"
        className="menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <span>0{navItems.length + 1}</span>Contact
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
