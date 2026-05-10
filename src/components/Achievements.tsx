import "./styles/Career.css";

const achievements = [
  "Developed multiple real-world projects including the Kid Wallet App, GeM Price Comparison Platform, and Meditation Web App.",
  "Built mobile and web applications using modern technologies like Flutter, Firebase, PHP, and Tailwind CSS.",
  "Successfully implemented Firebase Authentication and Firestore database integration in Flutter applications.",
  "Worked on innovative ideas focused on fintech, child wallet management, and e-commerce comparison systems.",
  "Improved problem-solving and coding skills through continuous practice in C++, DSA, DBMS, and Operating Systems.",
  "Participated in technical learning programs and certification courses related to programming and cloud computing.",
  "Gained experience in designing responsive UI/UX for both mobile and web platforms.",
];

const Achievements = () => {
  return (
    <div className="career-section section-container" id="achievements">
      <div className="career-container">
        <h2>
          My <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {achievements.map((item, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>0{index + 1}</h4>
                </div>
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
