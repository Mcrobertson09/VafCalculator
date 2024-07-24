// calcScripts.js

// Arrays for VAF values
const go5gNext = [100, 170, 215, 260, 305, 350];
const go5gPlus = [90, 150, 185, 220, 255, 290];
const go5g = [75, 130, 155, 180, 205, 230];
const essentials = [65, 90, 105, 120, 135, 150];

function calculateTotal() {
    const linesActivated = parseFloat(document.getElementById('linesActivated').value);
    const selectedOption = document.querySelector('input[name="go5gOption"]:checked').value;

    let vafArray;
    let multiplier;

    if (selectedOption === 'Go5G Plus') {
        vafArray = go5gPlus;
        multiplier = 15;
    } else if (selectedOption === 'Go5G Next') {
        vafArray = go5gNext;
        multiplier = 20;
    } else if (selectedOption === 'Go5G') {
        vafArray = go5g;
        multiplier = 0; // Adjust as needed
    } else if (selectedOption === 'Essentials') {
        vafArray = essentials;
        multiplier = 0; // Adjust as needed
    } else {
        // Handle other cases if needed
        vafArray = [];
        multiplier = 0;
    }

    const vafValue = vafArray[linesActivated - 1]; // Adjust for 0-based index
    const lineTotal = linesActivated * multiplier;
    const finalTotal = lineTotal / linesActivated;

    document.getElementById('linesResult').textContent = `${linesActivated}`;
    document.getElementById('planResult').textContent = `${selectedOption}`;
    document.getElementById('priceplanResult').textContent = `$${vafValue}`;
    document.getElementById('totalResult').textContent = `$${finalTotal.toFixed(2)}`;
}

// Function to calculate commission and display results
function commissionCalculation() {
    const selectedOption = document.querySelector('input[name="go5gOption"]:checked').value;

    let commish;
    let vafArray;

    if (selectedOption === 'Go5G Plus') {
        vafArray = go5gPlus;
        commish = 10;
    } else if (selectedOption === 'Go5G Next') {
        vafArray = go5gNext;
        commish = 15;
    } else if (selectedOption === 'Go5G') {
        vafArray = go5g;
        commish = 0; // Adjust as needed
    } else if (selectedOption === 'Essentials') {
        vafArray = essentials;
        commish = 0; // Adjust as needed
    } else {
        // Handle other cases if needed
        vafArray = [];
        multiplier = 0;
    }

    const linesActivated = parseFloat(document.getElementById('linesActivated').value);
    const vafValue = vafArray[linesActivated - 1]; // Adjust for 0-based index

    const planCommish = vafValue / 2;
    const linesCommish = linesActivated * commish;
    const totalCommish = linesCommish + planCommish;

    document.getElementById('planCommish').textContent = `$${planCommish}`;
    document.getElementById('lineCommish').textContent = `$${linesCommish}`;
    document.getElementById('totalCommish').textContent = `$${totalCommish}`;
}

// Event listener for the "Calculate Total" button
document.getElementById('calculateButton').addEventListener('click', function () {
    calculateTotal();
    commissionCalculation();
});