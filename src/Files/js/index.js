// Function to update the content based on the current URL hash
function updateContent() {
  const hash = window.location.hash.slice(1); // Get the hash part of the URL
  const content = document.getElementById("main-page");

  // Define routes and corresponding HTML file paths
  const routes = {
    CoverPage: "../html/CoverPage.php",
    Resume: "../html/Resume.php",
    Certifications: "../html/Certification.php",
    Award: "../html/Award.php",
    Contents: "../html/Contents.php",
  };

  // Check if the route exists in the routes object
  if (routes[hash]) {
    // Fetch and load the HTML file for the route
    fetch(routes[hash])
      .then((response) => response.text())
      .then((html) => {
        content.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        content.innerHTML = "Error loading content.";
      });
  } else {
    content.innerHTML = "404 missing section";
  }
}

// Initial page load or hash change event
window.addEventListener("load", updateContent);
window.addEventListener("hashchange", updateContent);

function enableEditing() {
  const editButton = document.getElementById("editbtnC");
  const saveButton = document.getElementById("savebtnC");
  const inputs = document.querySelectorAll(".groupc");
  inputs.forEach((input) => {
    input.removeAttribute("readonly");
  });
  editButton.style.display = "none";
  saveButton.style.display = "inline-block";
}

function saveChanges() {
  const editButton = document.getElementById("editbtnC");
  const saveButton = document.getElementById("savebtnC");
  const inputs = document.querySelectorAll(".groupc");
  inputs.forEach((input) => {
    input.setAttribute("readonly", true);
  });
  editButton.style.display = "inline-block";
  saveButton.style.display = "none";
}
