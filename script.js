// Your code here
let table = document.getElementById("table");
// // function makeRow() {
//   let tr = document.createElement("tr");
//   table.appendChild("tr");
// }
//makeRow();

function makeRow() {
  let tr = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    let box = document.createElement("td");
    tr.appendChild(box);
  }
  table.appendChild(tr);
}
let addRow = document.getElementById("add-row");
addRow.addEventListener("click", makeRow, false);

let td = document.querySelector("td");

let selector = document.querySelector("select");
let colorValue = "red";

function colorizer(change) {
  colorValue = change.target.value;
}

selector.addEventListener("change", colorizer);

function changeColor(click) {
  let target = click.target;
  if (target.className === colorValue) {
    target.className = " ";
  } else {
    target.className = colorValue;
  }
}

table.addEventListener("click", changeColor, false);
