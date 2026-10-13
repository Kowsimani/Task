import React, { useEffect, useState } from "react";
import Login from "./Task/login_Task";
import About from "./Task/About_Task";
import Accordion from "./Task/Accordion_Task";
import Contact from "./Task/Contact_Task";
import Projects from "./Task/Projects_Task";
import Skills from "./Task/Skills_Task";

import "./Home_Task.css";

function Home_Task() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/portfolio.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load portfolio data");
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch(() => setError("Could not load portfolio.json"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Loading portfolio...</p>;
  if (error) return <p className="status">{error}</p>;

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">MyPortfolio</a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
            <h1>Hi, I'm {data.name}</h1>
            <h2>{data.role}</h2>
            <p>{data.tagline}</p>
            <a className="primary-btn" href="#projects">
              View My Projects
            </a>
          </div>
        </section>

        <Login />

        <About data={data} />

        <Skills skills={data.skills} />

        <Projects projects={data.projects} />

        <Accordion faqs={data.faqs} />

        <Contact email={data.email} location={data.location} />
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home_Task;