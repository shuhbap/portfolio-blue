"use client";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'Outfit', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          padding: "160px 8% 80px",
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle at 50% 50%, rgba(167,230,255,0.03) 0%, transparent 70%)",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              fontWeight: "800",
              lineHeight: 1.1,
              marginBottom: "20px",
              background: "linear-gradient(135deg, #fff 0%, #A7E6FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Shuhaib AP
          </h1>

          <p
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              color: "#A7E6FF",
              marginBottom: "15px",
              fontWeight: "300",
              letterSpacing: "2px",
              textShadow: "0 0 40px rgba(167,230,255,0.2)",
            }}
          >
            Digital Marketer
          </p>

          <p
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
              color: "#8899aa",
              marginBottom: "40px",
              letterSpacing: "4px",
              fontWeight: "300",
            }}
          >
            SEO Specialist • Creative Designer
          </p>

          <button
            style={{
              background: "linear-gradient(135deg, #A7E6FF 0%, #7ec8e3 100%)",
              color: "#000",
              padding: "16px 44px",
              borderRadius: "50px",
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "clamp(14px, 1.2vw, 18px)",
              boxShadow: "0 0 50px rgba(167,230,255,0.3)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              letterSpacing: "1px",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 80px rgba(167,230,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 0 50px rgba(167,230,255,0.3)";
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
      <section id="about" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={headingStyle}>About Me</h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: "30px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <p style={textStyle}>
            I'm a passionate Digital Marketer helping businesses grow online
            through SEO, paid advertising, branding, content strategy and
            creative design solutions. With 5+ years of experience, I deliver
            results that drive real business growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={headingStyle}>Services</h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: "40px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <div style={cardGrid}>
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
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-10px)";
                  e.target.style.boxShadow =
                    "0 20px 60px rgba(167,230,255,0.15)";
                  e.target.style.borderColor = "rgba(167,230,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                  e.target.style.borderColor = "rgba(167,230,255,0.15)";
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  {["🚀", "📊", "📱", "📈", "🎨", "✏️"][index]}
                </span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={headingStyle}>My Works</h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: "40px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <div style={cardGrid}>
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
                  ...cardStyle,
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-10px) scale(1.02)";
                  e.target.style.boxShadow =
                    "0 20px 60px rgba(167,230,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <h3 style={{ color: "#A7E6FF", marginBottom: "10px" }}>
                  {work.title}
                </h3>
                <p style={{ color: "#8899aa", fontSize: "0.9rem" }}>
                  {work.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={headingStyle}>Skills</h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: "40px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <div style={skillGrid}>
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
                  ...cardStyle,
                  textAlign: "center",
                  fontSize: "0.95rem",
                  padding: "18px 20px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.background = "rgba(167,230,255,0.08)";
                  e.target.style.borderColor = "rgba(167,230,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.background = "rgba(255,255,255,0.03)";
                  e.target.style.borderColor = "rgba(167,230,255,0.15)";
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ ...sectionStyle, paddingBottom: "40px" }}>
        <div style={containerStyle}>
          <h2 style={headingStyle}>Contact</h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#A7E6FF",
              marginBottom: "40px",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(167,230,255,0.4)",
            }}
          />
          <div
            style={{
              ...contactCard,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div style={contactItem}>
              <span style={{ fontSize: "1.5rem" }}>📱</span>
              <div>
                <p style={{ color: "#8899aa", fontSize: "0.8rem" }}>
                  WhatsApp
                </p>
                <p style={{ color: "#fff", fontWeight: "500" }}>
                  +91 7448520075
                </p>
              </div>
            </div>
            <div style={contactItem}>
              <span style={{ fontSize: "1.5rem" }}>📧</span>
              <div>
                <p style={{ color: "#8899aa", fontSize: "0.8rem" }}>Email</p>
                <p style={{ color: "#fff", fontWeight: "500" }}>
                  shuhaiiibap@gmail.com
                </p>
              </div>
            </div>
            <div style={contactItem}>
              <span style={{ fontSize: "1.5rem" }}>📷</span>
              <div>
                <p style={{ color: "#8899aa", fontSize: "0.8rem" }}>
                  Instagram
                </p>
                <p style={{ color: "#fff", fontWeight: "500" }}>
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
          padding: "30px 8%",
          color: "#444",
          borderTop: "1px solid rgba(167,230,255,0.05)",
          fontSize: "0.9rem",
          letterSpacing: "1px",
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

        ::-webkit-scrollbar {
          width: 8px;
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
      `}</style>
    </main>
  );
}

// Styles
const sectionStyle = {
  padding: "80px 8%",
  background: "rgba(255,255,255,0.01)",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const headingStyle = {
  fontSize: "clamp(2rem, 4vw, 3rem)",
  color: "#A7E6FF",
  fontWeight: "700",
  letterSpacing: "-1px",
};

const textStyle = {
  color: "#ccc",
  lineHeight: 1.9,
  maxWidth: "700px",
  fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
  fontWeight: "300",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const skillGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "15px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(167,230,255,0.12)",
  padding: "28px 20px",
  borderRadius: "20px",
  backdropFilter: "blur(10px)",
  color: "#fff",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "default",
  fontWeight: "500",
  letterSpacing: "0.3px",
};

const contactCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(167,230,255,0.12)",
  borderRadius: "24px",
  padding: "35px",
  color: "#fff",
  backdropFilter: "blur(10px)",
};

const contactItem = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "15px 0",
  borderBottom: "1px solid rgba(167,230,255,0.05)",
};
