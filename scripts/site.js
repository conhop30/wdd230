// This sets the year for the footer

const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This set the last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;