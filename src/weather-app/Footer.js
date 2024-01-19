import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p>
          This project was coded by
          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            Selene Roa
          </a>{" "}
          and is
          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            on GitHub
          </a>{" "}
          and
          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
