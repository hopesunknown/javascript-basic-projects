const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// the above array will be needed to generate loop 6 times for randomly generated HEX colors. We also need "#"" in the front of HEX code (e.g. #f15025)

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
let hexColor = '#';
for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}