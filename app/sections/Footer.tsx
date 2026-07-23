"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "../data";

export function Footer() {
  return (
    <footer className="section-shell footer">
      <div><span className="brand-mark small">{profile.initials}</span><p>Designed &amp; built with intention.</p></div>
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <a href="#top">Back to top <ArrowUp size={15} /></a>
    </footer>
  );
}

