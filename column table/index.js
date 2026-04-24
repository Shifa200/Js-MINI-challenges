const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('columns');
const tableBody = document.getElementById('.table-body');

let globalStart = 1;


function buildTable() {
    const rows = Number(rowsInput.value);
    const cols = Number(colsInput.value);


tableBody.innerHTML = '';
table.style.gridTemplateColumns = `repeat(${cols}, 60px)`;

let start = globalStart;
let end = start + (rows * cols) - 1;

for (let i = 0; i < rows; i++) {
    const left = document.createElement('div');
    left.className = 'cell';
    left.textContent = start++;
    table.appendChild(left);

    const right = document.createElement('div');
    right.className = 'cell';
    right.textContent = end--;
    table.appendChild(right);
}

globalStart = start;

}

rowsInput.addEventListener('input', buildTable);
colsInput.addEventListener('input', buildTable);

buildTable();