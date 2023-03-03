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
    let td = document.createElement("td");
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
let addRow = document.getElementById("add-row");
addRow.addEventListener("click", makeRow, false);
