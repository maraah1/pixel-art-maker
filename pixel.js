var main = document.getElementById("main") //need to make a main div to grab this by

var paintbrush_color = "violet";

var color_array = ["tan", "silver", "black", "red", "magenta", "maroon", "deeppink", "violet", "pink", "salmon", "navy", "blue", "teal", "lime", "green", "lightgreen", "yellow", "lemonchiffon", "gold",
  "brown"
];


for (var i = 0; i < 30; i++) {
  var rows = document.createElement("div")
  rows.classList.add("row") //need to make a row div to add this to
  //console.log(rows)
  for (var j = 0; j < 30; j++) {
    var the_box = document.createElement("div")
    the_box.classList.add("column");
    //need to make a column div to add this to
    the_box.addEventListener("click", function(e) {
      e.target.style.backgroundColor = paintbrush_color;
    })


    rows.appendChild(the_box);
  }
  main.appendChild(rows);
}






var colorwheel = document.getElementById('colorwheel')

// colorwheel.classList.add("row")
// for (var k = 0; k < 1; k++) {
// var row = document.createElement('div');
// row.classList.add("row")
for (let m = 0; m < color_array.length; m++) {
  var colorwheel_button = document.createElement("button")
  colorwheel_button.classList.add("color_wheel_button");
  colorwheel_button.setAttribute("id", color_array[m]);
  if (m % 2 !== 0) {
    colorwheel_button.style.borderBottom = `50px solid ${color_array[m]}`
  } else {
    colorwheel_button.style.borderTop = `50px solid ${color_array[m]}`

  }
  colorwheel.appendChild(colorwheel_button);
  // row.appendChild(colorwheel_button);
}
// colorwheel.appendChild(colorwheel_button);
// }

color_array.forEach(function(color) {
  let btn = document.getElementById(color)

  btn.addEventListener("click", function(e) {
    color = color_array[i]
    console.log(e.target.id)
    paintbrush_color = e.target.id;
  })
})