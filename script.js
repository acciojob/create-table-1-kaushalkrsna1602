function insert_Row() {
    //Write your code here
	const table = document.querySelector(#sampleTable);

	let newRow = table.insertRow(0);

	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCCell(1);

	cell1.innerHTML = "New Cell1"
	cell2.innerHTML = "New Cell2"
}
