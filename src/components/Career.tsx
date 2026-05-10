import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My background <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CS Student</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Computer Science at LPU, focusing on full-stack development,
              app development, and solving real-world problems through software. Active in
              DSA practice and project-based learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Volunteer</h4>
                <h5>Karavan Foundation (NGO)</h5>
              </div>
              <h3>Experience</h3>
            </div>
            <p>
              Provided technical support and documentation assistance to the NGO,
              contributing to their operational and outreach activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Billing & Docs</h4>
                <h5>M/s Kajal Traders</h5>
              </div>
              <h3>Experience</h3>
            </div>
            <p>
              Handled documentation and billing processes, gaining practical
              experience in business operations and data management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>NPTEL · LPU · freeCodeCamp</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Earned certifications in Cloud Computing (NPTEL), Legacy Responsive
              Web Design (freeCodeCamp ~300hrs), Object Oriented Programming, and
              Data Structures & Algorithms (LPU · iamneo · 72hrs each).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
