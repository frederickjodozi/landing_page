const sections = document.querySelectorAll('section');
const navigationLinks = document.querySelectorAll('nav > ul > li > button');
const upScrollButton = document.querySelector('#scroll-up-button');
const downScrollButton = document.querySelector('#scroll-down-button');
let currentSectionIndex = 0;

const handleScrollUp = () => {
  if (currentSectionIndex !== 0) {
    sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
    currentSectionIndex--;
  }

  if (currentSectionIndex === 0) {
    upScrollButton.classList.add('no-display');
  }

  if (currentSectionIndex !== sections.length - 1) {
    downScrollButton.classList.remove('no-display');
  }
}

const handleScrollDown = () => {
  if (currentSectionIndex < sections.length -1) {
    sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    currentSectionIndex++;
  }

  if (currentSectionIndex !== 0) {
    upScrollButton.classList.remove('no-display');
  }

  if (currentSectionIndex === sections.length - 1) {
    downScrollButton.classList.add('no-display');
  }
}

document.addEventListener('wheel', (event) => {
  event.preventDefault();

  if (event.deltaY > 0) {
    handleScrollDown();
  } else if (event.deltaY < 0) {
    handleScrollUp();
  }
}, { passive: false });

document.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'ArrowDown') {
    event.preventDefault();
    handleScrollDown();
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault();
    handleScrollUp();
  }
});

navigationLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    sections[event.target.id].scrollIntoView({ behavior: 'smooth' });
    currentSectionIndex = parseInt(event.target.id, 10);

    upScrollButton.classList.remove('no-display');
  });
});

upScrollButton.addEventListener("click", handleScrollUp);
downScrollButton.addEventListener("click", handleScrollDown);