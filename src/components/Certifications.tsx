import "./styles/Certifications.css";

const certs = [
  {
    image: "/images/cert-freecodecamp.png",
    title: "Legacy Responsive Web Design V8",
    platform: "freeCodeCamp.org",
    date: "Nov 2023",
    hours: "~300 hrs",
    link: "https://freecodecamp.org/certification/fccda9a9746-01cc-48c2-b52d-a5ecfc05be74/responsive-web-design",
    accent: "#fbbf24",
  },
  {
    image: "/images/cert-lpu-oop.png",
    title: "Object Oriented Programming",
    platform: "LPU · iamneo Platform",
    date: "Dec 2024",
    hours: "72 hrs",
    link: "https://lpucolab438.examly.io/certificates",
    accent: "#a78bfa",
  },
  {
    image: "/images/cert-lpu-dsa.png",
    title: "Data Structures & Algorithm",
    platform: "LPU · iamneo Platform",
    date: "Dec 2024",
    hours: "72 hrs",
    link: "https://lpucolab438.examly.io/certificates",
    accent: "#a78bfa",
  },
  {
    image: "/images/cert-lpu-java.png",
    title: "Java Programming",
    platform: "LPU · iamneo Platform",
    date: "May 2025",
    hours: "72 hrs",
    link: "https://lpucolab438.examly.io/certificates",
    accent: "#34d399",
  },
];

const Certifications = () => {
  return (
    <div className="certs-section section-container" id="certifications">
      <div className="certs-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <p className="certs-sub">Verified credentials from recognised platforms</p>
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              data-cursor="disable"
              style={{ "--accent": cert.accent } as React.CSSProperties}
            >
              <div className="cert-img-wrap">
                <img src={cert.image} alt={cert.title} className="cert-img" />
                <div className="cert-overlay">
                  <span className="cert-verify">Verify ↗</span>
                </div>
              </div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p>{cert.platform} &nbsp;·&nbsp; {cert.date} &nbsp;·&nbsp; {cert.hours}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
