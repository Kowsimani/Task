import React from "react";

function About({ data }) {
  return (
    <section id="about" className="section">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h2 className="section-title">About Me</h2>

      <div className="about-card">
        <div className="avatar">K</div>

        <div>
          <h3>{data.name}</h3>
          <p className="role">{data.role}</p>
          <p>{data.about}</p>
          <p><strong>Location:</strong> {data.location}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>
      </div>
    </section>
  );
}

export default About;