// Get references to input fields and result elements
const devicesInput = document.getElementById('devicesSold');
const unitsInput = document.getElementById('accessoriesSold');
const currentAPPResult = document.getElementById('currentAPP');
const unitResultsTable = document.querySelector('.unitResults table');

// Event listener for the "Calculate Total" button
document.querySelector('button').addEventListener('click', () => {
    calculateCurrentAPP();
    calculateNeededUnits();
});

// Function to calculate and display the current APP
function calculateCurrentAPP() {
    const devicesSold = parseFloat(devicesInput.value);
    const unitsSold = parseFloat(unitsInput.value);

    if (!isNaN(devicesSold) && !isNaN(unitsSold)) {
        const currentAPP = unitsSold / devicesSold;
        currentAPPResult.textContent = currentAPP.toFixed(2); // Display with 2 decimal places
    } else {
        currentAPPResult.textContent = 'Invalid input';
    }
}

// Function to calculate and display the needed units
function calculateNeededUnits() {
    // Replace these values with your desired targets
    const targets = [1.84, 2.00, 2.20, 3.00, 3.50, 4.00];
    const devicesSold = parseFloat(devicesInput.value);
    const unitsSold = parseFloat(unitsInput.value);

    if (!isNaN(devicesSold) && !isNaN(unitsSold)) {
        // Calculate the remaining units needed for each target
        const neededUnits = targets.map(target => (target * devicesSold) - unitsSold);

        // Display the needed units in the table
        const unitCells = Array.from(unitResultsTable.querySelectorAll('td'));
        unitCells.forEach((cell, index) => {
            cell.textContent = neededUnits[index].toFixed(0); // Display with 2 decimal places
        });
    } else {
        // Handle invalid input
        currentAPPResult.textContent = 'Invalid input';
    }
}