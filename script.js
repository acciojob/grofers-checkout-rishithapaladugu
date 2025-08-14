let prices = document.querySelectorAll('.prices');
let total = 0;
prices.forEach(price => {
    total += parseFloat(price.textContent);
});
let table = document.getElementById('groceryTable');
let newRow = document.createElement('tr');
let newCell = document.createElement('td');
newCell.colSpan = 2;
newCell.textContent = 'Total Price: ' + total;
newRow.appendChild(newCell);
table.appendChild(newRow);