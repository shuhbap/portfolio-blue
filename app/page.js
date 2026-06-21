"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#works", label: "Works" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 8%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(0,0,0,0.92)"
            : "rgba(0,0,0,0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(167,230,255,0.15)"
            : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: scrolled
            ? "0 10px 40px rgba(0,0,0,0.5)"
            : "none",
        }}
      >
        {/* Logo */}
        <h2
          style={{
            color: "#A7E6FF",
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: "800",
            letterSpacing: "1px",
            cursor: "pointer",
            textShadow: "0 0 30px rgba(167,230,255,0.2)",
            transition: "0.3s",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Shuhaib <span style={{ color: "#fff" }}>AP</span>
        </h2>

        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
          }}
          className="desktop-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "15px",
                position: "relative",
                transition: "0.3s",
                letterSpacing: "0.5px",
                padding: "5px 0",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#A7E6FF";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#fff";
              }}
            >
              {link.label}
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "0",
                  width: "0%",
                  height: "2px",
                  background: "#A7E6FF",
                  transition: "0.3s",
                  boxShadow: "0 0 10px rgba(167,230,255,0.5)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.style.width = "0%";
                }}
              />
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            padding: "8px",
            borderRadius: "8px",
            transition: "0.3s",
            zIndex: 1001,
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: "30px",
              height: "2.5px",
              background: "#A7E6FF",
              borderRadius: "2px",
              transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: menuOpen
                ? "rotate(45deg) translate(6px,6px)"
                : "none",
              boxShadow: menuOpen ? "none" : "0 0 10px rgba(167,230,255,0.3)",
            }}
          />
          <span
            style={{
              width: "30px",
              height: "2.5px",
              background: "#A7E6FF",
              borderRadius: "2px",
              transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "scaleX(0)" : "none",
            }}
          />
          <span
            style={{
              width: "30px",
              height: "2.5px",
              background: "#A7E6FF",
              borderRadius: "2px",
              transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: menuOpen
                ? "rotate(-45deg) translate(6px,-6px)"
                : "none",
              boxShadow: menuOpen ? "none" : "0 0 10px rgba(167,230,255,0.3)",
            }}
