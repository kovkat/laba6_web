let span = document.querySelector('span.color')
let button_task9 = document.querySelector('.change-color')
let widget = document.querySelector('.widget')


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
         .toString(16)
         .padStart(6, 0)}`;
}

button_task9.addEventListener('click', () => {
    let randomColor = getRandomHexColor();
    span.innerHTML = `${randomColor}`;
    widget.style.backgroundColor = `${randomColor}`
})