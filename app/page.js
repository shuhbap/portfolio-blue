

"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'Outfit', sans-serif",
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          padding: isMobile ? "120px 5% 60px" : "160px 8% 80px",
          textAlign: "center",
          minHeight: isMobile ? "90vh" : "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle at 50% 50%, rgba(167,230,255,0.03) 0%, transparent 70%)",
          width: "100%",
        }}
      >
        <div style={{ width: "100%", padding: isMobile ? "0 10px" : "0" }}>
          <h1
            style={{
              fontSize: isMobile ? "clamp(2.8rem, 12vw, 4.5rem)" : "clamp(3.5rem, 10vw, 7rem)",
              fontWeight: "800",
              lineHeight: 1.1,
              marginBottom: isMobile ? "15px" : "20px",
              background: "linear-gradient(135deg, #fff 0%, #A7E6FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              wordWrap: "break-word",
            }}
          >
            Shuhaib AP
          </h1>

          <p
            style={{
              fontSize: isMobile ? "clamp(1rem, 4vw, 1.4rem)" : "clamp(1.2rem, 2.5vw, 1.8rem)",
              color: "#A7E6FF",
              marginBottom: isMobile ? "10px" : "15px",
              fontWeight: "300",
              letterSpacing: isMobile ? "1px" : "2px",
              textShadow: "0 0 40px rgba(167,230,255,0.2)",
              padding: "0 10px",
            }}
          >
            Digital Marketer
          </p>

          <p
            style={{
              fontSize: isMobile ? "clamp(0.75rem, 2.5vw, 0.95rem)" : "clamp(0.9rem, 1.5vw, 1.2rem)",
              color: "#8899aa",
              marginBottom: isMobile ? "30px" : "40px",
              letterSpacing: isMobile ? "2px" : "4px",
              fontWeight: "300",
              padding: "0 10px",
            }}
          >
            SEO Specialist • Creative Designer
          </p>

          <button
            style={{
              background: "linear-gradient(135deg, #A7E6FF 0%, #7ec8e3 100%)",
              color: "#000",
              padding: isMobile ? "14px 32px" : "16px 44px",
              borderRadius: "50px",
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: isMobile ? "clamp(12px, 3vw, 14px)" : "clamp(14px, 1.2vw, 18px)",
              boxShadow: "0 0 50px rgba(167,230,255,0.3)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              letterSpacing: "1px",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? "300px" : "none",
              margin: "0 auto",
              display: "block",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 0 80px rgba(167,230,255,0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 0 50px rgba(167,230,255,0.3)";
              }
            }}
            onTouchStart={() => {
              // Mobile touch feedback
            }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Let's Work Together →
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={sectionStyle(isMobile)}>
        <div style={containerStyle(isMobile)}>
          <h2 style={headingStyle(isMobile)}>About Me</h2>
          <div
            style={{
              width: isMobile ? "50px" : "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: isMobile ? "25px" : "30px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <p style={textStyle(isMobile)}>
            I'm a passionate Digital Marketer helping businesses grow online
            through SEO, paid advertising, branding, content strategy and
            creative design solutions. With 5+ years of experience, I deliver
            results that drive real business growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={sectionStyle(isMobile)}>
        <div style={containerStyle(isMobile)}>
          <h2 style={headingStyle(isMobile)}>Services</h2>
          <div
            style={{
              width: isMobile ? "50px" : "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: isMobile ? "30px" : "40px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <div style={cardGrid(isMobile)}>
            {[
              "SEO Optimization",
              "Google Ads",
              "Meta Ads",
              "Social Media Marketing",
              "Branding",
              "Graphic Design",
            ].map((service, index) => (
              <div
                key={index}
                style={cardStyle(isMobile)}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = "translateY(-10px)";
                    e.target.style.boxShadow =
                      "0 20px 60px rgba(167,230,255,0.15)";
                    e.target.style.borderColor = "rgba(167,230,255,0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                    e.target.style.borderColor = "rgba(167,230,255,0.15)";
                  }
                }}
              >
                <span
                  style={{
                    fontSize: isMobile ? "1.8rem" : "2rem",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  {["🚀", "📊", "📱", "📈", "🎨", "✏️"][index]}
                </span>
                <span style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" style={sectionStyle(isMobile)}>
        <div style={containerStyle(isMobile)}>
          <h2 style={headingStyle(isMobile)}>My Works</h2>
          <div
            style={{
              width: isMobile ? "50px" : "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: isMobile ? "30px" : "40px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <div style={cardGrid(isMobile)}>
            {[
              {
                title: "SEO Projects",
                desc: "Improved search rankings by 150% and traffic by 200%",
              },
              {
                title: "Social Media Campaigns",
                desc: "Managed campaigns with 500K+ reach and 10K+ engagements",
              },
              {
                title: "Branding Projects",
                desc: "Created logo & brand identity for 20+ startups",
              },
              {
                title: "Graphic Design",
                desc: "Designed 100+ posters, creatives and ad designs",
              },
            ].map((work, index) => (
              <div
                key={index}
                style={{
                  ...cardStyle(isMobile),
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = "translateY(-10px) scale(1.02)";
                    e.target.style.boxShadow =
                      "0 20px 60px rgba(167,230,255,0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = "none";
                  }
                }}
              >
                <h3 style={{ 
                  color: "#A7E6FF", 
                  marginBottom: "10px",
                  fontSize: isMobile ? "1.1rem" : "1.3rem" 
                }}>
                  {work.title}
                </h3>
                <p style={{ 
                  color: "#8899aa", 
                  fontSize: isMobile ? "0.8rem" : "0.9rem" 
                }}>
                  {work.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={sectionStyle(isMobile)}>
        <div style={containerStyle(isMobile)}>
          <h2 style={headingStyle(isMobile)}>Skills</h2>
          <div
            style={{
              width: isMobile ? "50px" : "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: isMobile ? "30px" : "40px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <div style={skillGrid(isMobile)}>
            {[
              "Digital Marketing",
              "SEO",
              "Meta Ads",
              "Google Ads",
              "Lead Generation",
              "Social Media Marketing",
              "Content Strategy",
              "Google Analytics",
              "Search Console",
              "WordPress",
              "Canva",
              "Photoshop",
              "Graphic Design",
              "Branding",
            ].map((skill, index) => (
              <div
                key={index}
                style={{
                  ...cardStyle(isMobile),
                  textAlign: "center",
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  padding: isMobile ? "14px 12px" : "18px 20px",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.background = "rgba(167,230,255,0.08)";
                    e.target.style.borderColor = "rgba(167,230,255,0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = "scale(1)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                    e.target.style.borderColor = "rgba(167,230,255,0.15)";
                  }
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ ...sectionStyle(isMobile), paddingBottom: isMobile ? "30px" : "40px" }}>
        <div style={containerStyle(isMobile)}>
          <h2 style={headingStyle(isMobile)}>Contact</h2>
          <div
            style={{
              width: isMobile ? "50px" : "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: isMobile ? "30px" : "40px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <div
            style={{
              ...contactCard(isMobile),
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div style={contactItem(isMobile)}>
              <span style={{ fontSize: isMobile ? "1.3rem" : "1.5rem" }}>📱</span>
              <div>
                <p style={{ color: "#8899aa", fontSize: isMobile ? "0.7rem" : "0.8rem" }}>
                  WhatsApp
                </p>
                <p style={{ 
                  color: "#fff", 
                  fontWeight: "500",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  wordBreak: "break-word" 
                }}>
                  +91 7448520075
                </p>
              </div>
            </div>
            <div style={contactItem(isMobile)}>
              <span style={{ fontSize: isMobile ? "1.3rem" : "1.5rem" }}>📧</span>
              <div>
                <p style={{ color: "#8899aa", fontSize: isMobile ? "0.7rem" : "0.8rem" }}>Email</p>
                <p style={{ 
                  color: "#fff", 
                  fontWeight: "500",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  wordBreak: "break-word" 
                }}>
                  shuhaiiibap@gmail.com
                </p>
              </div>
            </div>
            <div style={contactItem(isMobile)}>
              <span style={{ fontSize: isMobile ? "1.3rem" : "1.5rem" }}>📷</span>
              <div>
                <p style={{ color: "#8899aa", fontSize: isMobile ? "0.7rem" : "0.8rem" }}>
                  Instagram
                </p>
                <p style={{ 
                  color: "#fff", 
                  fontWeight: "500",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  wordBreak: "break-word" 
                }}>
                  @shuhaiiiiib.ap
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: isMobile ? "25px 5%" : "30px 8%",
          color: "#444",
          borderTop: "1px solid rgba(167,230,255,0.05)",
          fontSize: isMobile ? "0.75rem" : "0.9rem",
          letterSpacing: isMobile ? "0.5px" : "1px",
        }}
      >
        © 2026 Shuhaib AP. All Rights Reserved.
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #A7E6FF;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #7ec8e3;
        }

        @media (max-width: 480px) {
          ::-webkit-scrollbar {
            width: 4px;
          }
        }

        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </main>
  );
}

// Styles - Mobile Responsive
const sectionStyle = (isMobile) => ({
  padding: isMobile ? "60px 5%" : "80px 8%",
  background: "rgba(255,255,255,0.01)",
  width: "100%",
});

const containerStyle = (isMobile) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: isMobile ? "0 5px" : "0",
});

const headingStyle = (isMobile) => ({
  fontSize: isMobile ? "clamp(1.8rem, 6vw, 2.5rem)" : "clamp(2rem, 4vw, 3rem)",
  color: "#A7E6FF",
  fontWeight: "700",
  letterSpacing: isMobile ? "-0.5px" : "-1px",
});

const textStyle = (isMobile) => ({
  color: "#ccc",
  lineHeight: isMobile ? 1.8 : 1.9,
  maxWidth: "700px",
  fontSize: isMobile ? "clamp(0.9rem, 3vw, 1rem)" : "clamp(1rem, 1.2vw, 1.15rem)",
  fontWeight: "300",
  padding: isMobile ? "0 5px" : "0",
});

const cardGrid = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "repeat(auto-fit, minmax(140px, 1fr))" : "repeat(auto-fit, minmax(250px, 1fr))",
  gap: isMobile ? "15px" : "25px",
});

const skillGrid = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "repeat(auto-fit, minmax(120px, 1fr))" : "repeat(auto-fit, minmax(160px, 1fr))",
  gap: isMobile ? "10px" : "15px",
});

const cardStyle = (isMobile) => ({
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(167,230,255,0.12)",
  padding: isMobile ? "20px 15px" : "28px 20px",
  borderRadius: isMobile ? "16px" : "20px",
  backdropFilter: "blur(10px)",
  color: "#fff",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "default",
  fontWeight: "500",
  letterSpacing: "0.3px",
  textAlign: "center",
  WebkitTapHighlightColor: "transparent",
});

const contactCard = (isMobile) => ({
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(167,230,255,0.12)",
  borderRadius: isMobile ? "20px" : "24px",
  padding: isMobile ? "25px 20px" : "35px",
  color: "#fff",
  backdropFilter: "blur(10px)",
});

const contactItem = (isMobile) => ({
  display: "flex",
  alignItems: "center",
  gap: isMobile ? "15px" : "20px",
  padding: isMobile ? "12px 0" : "15px 0",
  borderBottom: "1px solid rgba(167,230,255,0.05)",
});
