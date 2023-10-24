const sections = document.querySelectorAll('home, section, footer');
const scrollButton = document.getElementById('scroll-button');
let currentSectionIndex = 0;

scrollButton.addEventListener("click", () => {
  if (currentSectionIndex < sections.length -1) {
      sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
      currentSectionIndex++;

      if (currentSectionIndex === sections.length - 1) {
        scrollButton.classList.add('no-display');
        console.log(scrollButton);
    }
  }
});