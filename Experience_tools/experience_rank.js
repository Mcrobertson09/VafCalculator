// Calculate total and update the rank table and commission table


function calculateTotal() {
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const srMes = parseFloat(document.getElementById('srMes').value);
    const teamPayout = parseFloat(document.getElementById('teamPayout').value);

    // Validate input
    if (isNaN(hoursWorked) || isNaN(srMes) || isNaN(teamPayout)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Calculate ranks needed for payout
    const topOnePercent = Math.ceil(srMes * 0.01);
    const topThreePercent = Math.ceil(srMes * 0.03);
    const topFivePercent = Math.ceil(srMes * 0.05);

    // Update the rank table
    document.getElementById('topOnePercent').textContent = `< ${topOnePercent}`;
    document.getElementById('topThreeePercent').textContent = `< ${topThreePercent}`;
    document.getElementById('topFivePercent').textContent = `< ${topFivePercent}`;

    // Call the commission calculation function
    commissionCalculation(hoursWorked, teamPayout);
}

function commissionCalculation(hoursWorked) {
    // Constants for payout rates
    const payoutRates = {
        hourlyRate: 20,
        topOnePercent: 14,
        topThreePercent: 12,
        topFivePercent: 8,
    };

    // Calculate hourly commission
    const hourlyCommission = hoursWorked * payoutRates.hourlyRate;


    // Calculate commissions based on ranks
    const topOneCommish = (hourlyCommission + payoutRates.topOnePercent).toFixed(2);
    const topThreeCommish = (hourlyCommission + payoutRates.topThreePercent).toFixed(2);
    const topFiveCommish = (hourlyCommission + payoutRates.topFivePercent).toFixed(2);

    // Update the commission table
    document.getElementById('hourlyCommish').textContent = `$${hourlyCommission.toFixed(2)}`;
    document.getElementById('topOneCommish').textContent = `$${topOneCommish}`;
    document.getElementById('topThreeCommish').textContent = `$${topThreeCommish}`;
    document.getElementById('topFiveCommish').textContent = `$${topFiveCommish}`;
}

