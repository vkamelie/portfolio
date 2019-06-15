import React from "react";
import "./Contact.css";
import GitHub from "./GitHub-Mark-32px.png";
import LI from "./LI-In-Bug.png";

const Contact = () => {
  return (
    <div className="contact-main">
      Contact Info
      <br />
      <br />
      <ul>
        <li>valois.adrianna@gmail.com</li>
        <a
          href="https://www.linkedin.com/in/adrianna-valois/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LI} alt="linkedin Logo" />
        </a>
        <a
          href="https://github.com/vkamelie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="GitHub Logo" />
        </a>
      </ul>
    </div>
  );
};

export default Contact;
