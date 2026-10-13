import React from "react";

function Skills({ skills = [] }) {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">WHAT I KNOW</p>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;