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
function changeColor(click) {
  console.log("clicked");
  let target = click.target;
  target.classList.toggle("red");
}
table.addEventListener("click", changeColor, false);

let selector = document.querySelector("select");

function colorizer(change) {
  console.log(change.target.value);
}
selector.addEventListener("change", colorizer, false);
