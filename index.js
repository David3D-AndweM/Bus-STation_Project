let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    countEl.style.color = getRandomColor();
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
    saveEl.style.color = getRandomColor()
    countEl.textContent = 0
    count = 0
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
