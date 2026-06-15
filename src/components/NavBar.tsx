"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AI Automations", href: "/ai-automations" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="md:mt-15 mt-5 mx-10 nav-bar relative z-10">
        <Link href="/" className="nav-elem cursor-pointer">
          <p className="text-[22px] font-black uppercase tracking-[0.02em] leading-[1.02] text-white text-left">
            HAFIZ
            <br />
            MUHAMMAD
            <br />
            ABDULLAH
          </p>
        </Link>
        <div className="nev-elem mr-7 md:mr-48 flex items-center gap-2 cursor-pointer">
          <i className="ri-arrow-right-s-line text-red-500" />
          <p className="text-xs font-bold">Open to Remote</p>
        </div>
        <button
          type="button"
          className="nev-elem text-2xl font-light cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(open => !open)}
        >
          <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"} />
        </button>
      </nav>

      <div
        className={`menu-overlay${isOpen ? " active" : ""}`}
        id="menuOverlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        onClick={event => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <button
          type="button"
          className="menu-close"
          id="menuClose"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                data-number={(index + 1).toString().padStart(2, "0")}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
