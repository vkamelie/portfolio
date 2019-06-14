import React from "react";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div className="home-container">
      <main style={{ marginTop: "60px" }}>
        <Projects />
        <section id="personal">
          <h3> I'm Adrianna.</h3>
          <p>
            {" "}
            I am passionate and creative by nature, always searching for a new
            hobby or skill to learn. Seeking opportunities that can push me
            creatively and where the goal is to grow.{" "}
          </p>
        </section>

        <Contact />
      </main>
    </div>
  );
}

export default Home;
