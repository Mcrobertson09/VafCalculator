function calculateTotal() {
    const devicesSold = parseFloat(document.getElementById('devicesSold').value);
    const linesConverted = parseFloat(document.getElementById('linesConverted').value);
    const selectedOption = document.querySelector('input[name="go5gOption"]:checked').value;

    let multiplier;

    if (selectedOption === 'Go5G Plus') {
        multiplier = 15;
    } else if (selectedOption === 'Go5G Next') {
        multiplier = 20;
    } else {
        // Handle other cases if needed
        multiplier = 1;
    }

    const lineTotal = linesConverted * multiplier;
    let finalTotal;

    if (devicesSold === 0) {
        finalTotal = lineTotal; // or handle it in another way, e.g., display a message
    } else {
        finalTotal = lineTotal / devicesSold;
    }

    document.getElementById('linesResult').textContent = `${linesConverted}`;
    document.getElementById('vafResult').textContent = `$${lineTotal}`;
    document.getElementById('totalResult').textContent = `$${finalTotal}`;
}

function commissionCalculation() {
    const selectedOption = document.querySelector('input[name="go5gOption"]:checked').value;

    let commish;

    if (selectedOption === 'Go5G Plus') {
        commish = 10;
    } else if (selectedOption === 'Go5G Next') {
        commish = 15;
    } else {
        // Handle other cases if needed
        commish = 1;
    }

    const linesConverted = parseFloat(document.getElementById('linesConverted').value);
    const devicesSold = parseFloat(document.getElementById('devicesSold').value);

    const linesCommish = linesConverted * commish;
    const deviceCommish = devicesSold * 5;
    const totalCommish = linesCommish + deviceCommish;

    document.getElementById('vafCommish').textContent = `$${linesCommish}`;
    document.getElementById('deviceCommish').textContent = `$${deviceCommish}`;
    document.getElementById('totalCommish').textContent = `$${totalCommish}`;
}
