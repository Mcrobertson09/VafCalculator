
function calculateTotal() {
    const devicesSold = parseFloat(document.getElementById('devicesSold').value);
    const linesConverted = parseFloat(document.getElementById('linesConverted').value);
    const selectedOption = document.querySelector('input[name="go5gOption"]:checked').value;

    let multiplier;
    if (selectedOption === 'Go5G Plus') {
        multiplier = 15;
    } else if (selectedOption === 'Go5G Next') {
        multiplier =  20;
    } else {
        // Handle other cases if needed
        multiplier = 1;
    }
    const lineTotal = linesConverted * multiplier;
    const finalTotal = lineTotal / devicesSold;

        document.getElementById('linesResult').textContent = `Lines Converted: ${linesConverted} (${selectedOption})`;
        document.getElementById('vafResult').textContent = `VAF/Line: $${multiplier} x ${linesConverted} = $${lineTotal} `;
        document.getElementById('totalResult').textContent = `Total VAF:  $${finalTotal} ($${lineTotal} / ${devicesSold}) `;
  
}

