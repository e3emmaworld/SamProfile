
const word = "Samuel Effiom";
let currentText = "";
let index = 0;

function spellWord() {
    if (index < word.length) {
        currentText += word[index];  // Add one letter at a time
        document.getElementById("output").textContent = currentText;
        index++;
        setTimeout(spellWord, 500); // Repeat every 500ms
    }
}

spellWord(); 

const box = document.getElementById('rotating-border');

// Array of colors to rotate through
const colors = ['red','black', 'pink', 'blue', 'green', 'yellow', 'purple', 'orange','white'];

let colorIndex = 0;

// Function to change border color
function rotateBorderColor() {
  box.style.borderColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}

// Rotate border color every second
setInterval(rotateBorderColor, 1000);

function playVideo() {
    document.getElementById("myVideo").play();
}
function pauseVideo() {
    document.getElementById("myVideo").pause();
}
