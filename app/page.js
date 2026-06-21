"use client";

import { useState } from "react";

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);

return (
<main
style={{
background: "#000",
color: "#fff",
minHeight: "100vh",
fontFamily: "'Outfit', sans-serif",
}}
>
{/* Navbar */}
<nav
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "24px 8%",
borderBottom: "1px solid rgba(167,230,255,0.15)",
position: "sticky",
top: 0,
backdropFilter: "blur(12px)",
background: "rgba(0,0,0,0.85)",
zIndex: 1000,
}}
>
<h2
style={{
color: "#A7E6FF",
fontSize: "30px",
fontWeight: "800",
letterSpacing: "1px",
}}
>
Shuhaib AP </h2>

```
    {/* Desktop Menu */}
    <div
      className="desktop-menu"
      style={{
        display: "flex",
        gap: "30px",
        alignItems: "center",
      }}
    >
      <a href="#about" style={linkStyle}>About</a>
      <a href="#services" style={linkStyle}>Services</a>
      <a href="#works" style={linkStyle}>Works</a>
      <a href="#skills" style={linkStyle}>Skills</a>
      <a href="#contact" style={linkStyle}>Contact</a>
    </div>

    {/* Hamburger Menu */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
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
          transition: "0.3s",
          transform: menuOpen
            ? "rotate(45deg) translate(6px,6px)"
            : "none",
        }}
      />
      <span
        style={{
          width: "28px",
          height: "2px",
          background: "#A7E6FF",
          opacity: menuOpen ? 0 : 1,
          transition: "0.3s",
        }}
      />
      <span
        style={{
          width: "28px",
          height: "2px",
          background: "#A7E6FF",
          transition: "0.3s",
          transform: menuOpen
            ? "rotate(-45deg) translate(5px,-5px)"
            : "none",
        }}
      />
    </button>
  </nav>

  {/* Mobile Menu */}
  {menuOpen && (
    <div
      style={{
        background: "#050505",
        padding: "20px",
        borderBottom: "1px solid rgba(167,230,255,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <a href="#about" style={linkStyle}>About</a>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#works" style={linkStyle}>Works</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </div>
  )}

  {/* Hero */}
  <section
    style={{
      padding: "120px 8%",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "clamp(3rem,8vw,6rem)",
        fontWeight: "800",
        lineHeight: 1,
        marginBottom: "20px",
      }}
    >
      Shuhaib{" "}
      <span
        style={{
          color: "#A7E6FF",
          textShadow: "0 0 25px rgba(167,230,255,0.4)",
        }}
      >
        AP
      </span>
    </h1>

    <p
      style={{
        fontSize: "1.4rem",
        color: "#A7E6FF",
        marginBottom: "40px",
      }}
    >
      Digital Marketer • SEO Specialist • Creative Designer
    </p>

    <button
      style={{
        background: "#A7E6FF",
        color: "#000",
        padding: "14px 34px",
        borderRadius: "40px",
        border: "none",
        fontWeight: "700",
        cursor: "pointer",
        fontSize: "16px",
        boxShadow: "0 0 30px rgba(167,230,255,0.35)",
      }}
    >
      Let's Work Together
    </button>
  </section>

  {/* About */}
  <section id="about" style={sectionStyle}>
    <h2 style={headingStyle}>About Me</h2>

    <p style={textStyle}>
      I'm a passionate Digital Marketer helping businesses grow online
      through SEO, paid advertising, branding, content strategy and
      creative design solutions.
    </p>
  </section>

  {/* Services */}
  <section id="services" style={sectionStyle}>
    <h2 style={headingStyle}>Services</h2>

    <div style={cardGrid}>
      <div style={cardStyle}>SEO Optimization</div>
      <div style={cardStyle}>Google Ads</div>
      <div style={cardStyle}>Meta Ads</div>
      <div style={cardStyle}>Social Media Marketing</div>
      <div style={cardStyle}>Branding</div>
      <div style={cardStyle}>Graphic Design</div>
    </div>
  </section>

  {/* Works */}
  <section id="works" style={sectionStyle}>
    <h2 style={headingStyle}>My Works</h2>

    <div style={cardGrid}>
      <div style={cardStyle}>
        SEO Projects <br />
        Improved search rankings and traffic.
      </div>

      <div style={cardStyle}>
        Social Media Campaigns <br />
        Managed high-performing campaigns.
      </div>

      <div style={cardStyle}>
        Branding Projects <br />
        Logo & brand identity designs.
      </div>

      <div style={cardStyle}>
        Graphic Design <br />
        Posters, creatives and ad designs.
      </div>
    </div>
  </section>

  {/* Skills */}
  <section id="skills" style={sectionStyle}>
    <h2 style={headingStyle}>Skills</h2>

    <div style={cardGrid}>
      <div style={cardStyle}>Digital Marketing</div>
      <div style={cardStyle}>SEO</div>
      <div style={cardStyle}>Meta Ads</div>
      <div style={cardStyle}>Google Ads</div>
      <div style={cardStyle}>Lead Generation</div>
      <div style={cardStyle}>Social Media Marketing</div>
      <div style={cardStyle}>Content Strategy</div>
      <div style={cardStyle}>Google Analytics</div>
      <div style={cardStyle}>Search Console</div>
      <div style={cardStyle}>WordPress</div>
      <div style={cardStyle}>Canva</div>
      <div style={cardStyle}>Photoshop</div>
      <div style={cardStyle}>Graphic Design</div>
      <div style={cardStyle}>Branding</div>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" style={sectionStyle}>
    <h2 style={headingStyle}>Contact</h2>

    <div style={contactCard}>
      <p>📱 WhatsApp: +91 7448520075</p>
      <p>📧 Email: shuhaiiibap@gmail.com</p>
      <p>📷 Instagram: @shuhaiiiiib.ap</p>
    </div>
  </section>

  {/* Footer */}
  <footer
    style={{
      textAlign: "center",
      padding: "40px",
      color: "#666",
      borderTop: "1px solid rgba(167,230,255,0.1)",
    }}
  >
    © 2026 Shuhaib AP. All Rights Reserved.
  </footer>
</main>
```

);
}

const linkStyle = {
color: "#fff",
textDecoration: "none",
fontWeight: "500",
};

const sectionStyle = {
padding: "80px 8%",
};

const headingStyle = {
fontSize: "2.5rem",
color: "#A7E6FF",
marginBottom: "30px",
};

const textStyle = {
color: "#ccc",
lineHeight: 1.8,
maxWidth: "700px",
};

const cardGrid = {
display: "grid",
gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
gap: "20px",
};

const cardStyle = {
background: "rgba(255,255,255,0.03)",
border: "1px solid rgba(167,230,255,0.15)",
padding: "25px",
borderRadius: "18px",
backdropFilter: "blur(10px)",
color: "#fff",
transition: "0.3s",
};

const contactCard = {
background: "rgba(255,255,255,0.03)",
border: "1px solid rgba(167,230,255,0.15)",
borderRadius: "20px",
padding: "30px",
color: "#fff",
lineHeight: "2",
};
