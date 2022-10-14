const block = document.querySelector(".block")

let position = 0;
let topPosition = 0;

const motion = () => {
 if (position <= 460 && topPosition == 0) {
  position += 16;
  block.style.left = `${position}px`;
  setTimeout(motion, 100);
 }
 else if (position >= 460 && topPosition <= 460) {
  topPosition += 16;
  block.style.top = `${topPosition}px`;
  setTimeout(motion, 100);
 } else if (topPosition >= 460 && position != 0) {
  position -= 16;
  block.style.left = `${position}px`;
  setTimeout(motion, 100);
 } else if (position == 0 && topPosition != 0) {
  topPosition -= 16;
  block.style.top = `${topPosition}px`;
  setTimeout(motion, 100);
 }
};

motion();

// Таймер

let counter = 0;

setInterval (() => {
    counter++
    console.log(counter, 'секунд');
}, 1000);



