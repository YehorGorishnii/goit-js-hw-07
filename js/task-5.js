function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorName = document.querySelector(".color")
const colorBtn = document.querySelector(".change-color")
.addEventListener('click', (e) => {
  const newColor = getRandomHexColor()
  colorName.textContent = `New Color: ${newColor}`
  body.style.backgroundColor = newColor
})


