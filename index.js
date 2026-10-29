const button = document.getElementById('button')
const counter = document.getElementById('counter')
button.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) + 1
})