const main = document.getElementById("main") //need to make a main div to grab this by

let paintbrushColor = "violet";

const colorArray = ["tan", "silver", "black", "red", "magenta", "maroon", "deeppink", "violet", "pink", "salmon", "navy", "blue", "teal", "lime", "green", "lightgreen", "yellow", "lemonchiffon", "gold",
  "brown"
];

let colorWheel = document.getElementById('colorwheel')

const pixelArtMaker = colorArray.map(color => {
  colorPixel = document.createElement("pixel");
  colorPixel.classList.add("colorPixel");
  colorPixel.setAttribute("id", color);

  color % 2 !== 0 ?
    colorPixel.style.borderBottom = `50px solid ${color}` :
    colorPixel.style.borderTop = `50px solid ${color}`

  colorWheel.appendChild(colorPixel);

})



colorArray.forEach(function(color) {
  let btn = document.getElementById(color)

  btn.addEventListener("click", function(e) {
    color = colorArray[i]
    paintbrushColor = e.target.id;
  })
})