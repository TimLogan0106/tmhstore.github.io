// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



const darkModeToggleBtn = document.getElementById("dark-mode-toggle");
let theme = localStorage.getItem("theme");
if (theme === "dark") enableDarkMode();
darkModeToggleBtn.addEventListener("click", () => {
  theme = localStorage.getItem("theme");
  if (theme === "dark") {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});
function enableDarkMode() {
  darkModeToggleBtn.style.fill = "white";
  localStorage.setItem("theme", "dark");
  document.body.classList.add("dark-mode");
}
function enableLightMode() {
  darkModeToggleBtn.style.fill = "#444";
  localStorage.setItem("theme", "light");
  document.body.classList.remove("dark-mode");
}
window
  .matchMedia("(prefers-color-scheme:dark)")
  .addListener((e) => (e.matches ? enableDarkMode() : enableLightMode()));
