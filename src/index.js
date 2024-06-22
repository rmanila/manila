import coverPageContent from "./Files/js/CoverPage.js";
import resumeContent from "./Files/js/resume.js";
import certificationContent from "./Files/js/certification.js";
import awardContent from "./Files/js/award.js";
import contentContent from "./Files/js/Contents.js";
import React from "react";
import ReactDOM from "react-dom";
import "./Files/css/index.css";
import App from "./App";

const routes = {
  CoverPage: coverPageContent,
  Resume: resumeContent,
  Certifications: certificationContent,
  Award: awardContent,
  Contents: contentContent,
  // Add more routes here as needed
};

function updateContent() {
  const hash = window.location.hash.slice(1); // Get the hash part of the URL
  const content = document.getElementById("main-page");

  if (hash === "" || !routes[hash]) {
    // Load default main page content if no hash is present or the hash is invalid
    content.innerHTML = `<h2>Welcome to My Portfolio</h2>
                         <p>This is the main page of the portfolio. Navigate through the menu to explore more.</p>`;
  } else {
    // Load the content for the route
    content.innerHTML = routes[hash];
  }
}

// Initial page load or hash change event
window.addEventListener("load", updateContent);
window.addEventListener("hashchange", updateContent);

ReactDOM.render(<App />, document.getElementById("root"));
