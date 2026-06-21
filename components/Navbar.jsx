"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);

const closeMenu = () => setMenuOpen(false);

return (
<>
{/* Navbar */}
<nav
style={{
position: "fixed",
top: 0,
left: 0,
width: "100%",
padding: "22px 8%",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
background: "rgba(0,0,0,0.65)",
backdropFilter: "blur(20px)",
borderBottom: "1px solid rgba(167,230,255,0.1)",
zIndex: 1000,
boxSizing: "border-box",
}}
>
{/* Logo */}
<h2
style={{
color: "#A7E6FF",
fontSize: "32px",
fontWeight: "800",
letterSpacing: "1px",
cursor: "pointer",
}}
>
Shuhaib AP </h2>

```
    {/* Desktop Menu */}
    <div className="desktop-menu">
      {["About", "Services", "Works", "Skills", "Contact"].map(
        (item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "500",
              position: "relative",
              transition: ".3s",
            }}
          >
            {item}
          </a>
        )
      )}
    </div>

    {/* Hamburger */}
    <button
      onClick={() => setMenuOpen(true)}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <span
        style={{
          width: "28px",
          height: "2px",
          background: "#A7E6FF",
        }}
      />
      <span
        style={{
          width: "22px",
          height: "2px",
          background: "#A7E6FF",
          marginLeft: "6px",
        }}
      />
      <span
        style={{
          width: "28px",
          height: "2px",
          background: "#A7E6FF",
        }}
      />
    </button>
  </nav>

  {/* Overlay */}
  <div
    onClick={closeMenu}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.6)",
      backdropFilter: "blur(8px)",
      opacity: menuOpen ? 1 : 0,
      visibility: menuOpen ? "visible" : "hidden",
      transition: ".4s",
      zIndex: 1100,
    }}
  />

  {/* Slide Menu */}
  <div
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "320px",
      maxWidth: "90%",
      height: "100vh",
      background: "#050505",
      borderLeft: "1px solid rgba(167,230,255,.15)",
      backdropFilter: "blur(20px)",
      transform: menuOpen
        ? "translateX(0)"
        : "translateX(100%)",
      transition: "all .45s cubic-bezier(.77,0,.18,1)",
      zIndex: 1200,
      padding: "40px",
      boxSizing: "border-box",
    }}
  >
    {/* Close */}
    <button
      onClick={closeMenu}
      style={{
        background: "transparent",
        border: "none",
        color: "#A7E6FF",
        fontSize: "34px",
        cursor: "pointer",
        marginBottom: "50px",
      }}
    >
      ×
    </button>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {["About", "Services", "Works", "Skills", "Contact"].map(
        (item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={closeMenu}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "600",
              padding: "18px 22px",
              borderRadius: "16px",
              border:
                "1px solid rgba(167,230,255,.08)",
              background:
                "rgba(255,255,255,.02)",
              transition: ".35s",
              animation: `fadeIn .4s ease forwards`,
              animationDelay: `${index * 0.08}s`,
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#A7E6FF";
              e.target.style.color = "#000";
              e.target.style.transform =
                "translateX(-10px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background =
                "rgba(255,255,255,.02)";
              e.target.style.color = "#fff";
              e.target.style.transform =
                "translateX(0)";
            }}
          >
            {item}
          </a>
        )
      )}
    </div>
  </div>

  <style jsx>{`
    .desktop-menu {
      display: flex;
      gap: 35px;
    }

    .desktop-menu a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 0%;
      height: 2px;
      background: #a7e6ff;
      transition: 0.35s;
    }

    .desktop-menu a:hover {
      color: #a7e6ff;
    }

    .desktop-menu a:hover::after {
      width: 100%;
    }

    @media (max-width: 900px) {
      .desktop-menu {
        display: none;
      }
    }

    @media (min-width: 901px) {
      button {
        display: none !important;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateX(40px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `}</style>
</>
```

);
}
