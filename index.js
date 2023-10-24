const sections = document.querySelectorAll('section');
const downScrollButton = document.querySelector('#scroll-button');
let currentSectionIndex = 0;

const handleScrollDown = () => {
  if (currentSectionIndex < sections.length -1) {
    sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    currentSectionIndex++;
  }

  if (currentSectionIndex === sections.length - 1) {
    downScrollButton.classList.add('no-display');
  }
}

document.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    handleScrollDown();
    console.log('Scrolled down');
  } else if (event.deltaY < 0) {
    // handleScrollUp();
    console.log('Scrolled up');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'ArrowDown') {
    event.preventDefault();
    console.log(event.key)
    handleScrollDown();
  }

  if (event.key === 'ArrowUp') {
    // handleScrollUp();
  }
});

downScrollButton.addEventListener("click", handleScrollDown);