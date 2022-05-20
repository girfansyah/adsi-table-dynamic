const table = document.getElementById('Table');
const tbody = table.querySelector('tbody');

function oneOutput(inputNum) {
  let num = inputNum < 1 ? 10 : inputNum;
  num = num % 2 === 0 ? num - 1 : num;

  const arr = Array(num)
    .fill()
    .map((_, idx) => idx);
  arr.forEach((row) => {
    const rowElm = document.createElement('tr');
    arr.forEach((col) => {
      const colElm = document.createElement('td');
      if (row === col || row + col === arr.length - 1) {
        colElm.innerText = `${col}`;
      }
      if (row === col && row + col === arr.length - 1) {
        colElm.innerText = `${row}`;
      }

      rowElm.appendChild(colElm);
    });
    tbody.appendChild(rowElm);
  });
}

oneOutput(10);
