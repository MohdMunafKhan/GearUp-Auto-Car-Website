//Emi-Offer.html

document.getElementById('emiForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting form values
    const carPrice = parseFloat(document.getElementById('carPrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const loanTenure = parseInt(document.getElementById('loanTenure').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);

    // Validation
    if (downPayment >= carPrice) {
        alert('Down payment must be less than the car price.');
        return;
    }
    if (interestRate < 1 || interestRate > 20) {
        alert('Interest rate must be between 1% and 20%.');
        return;
    }

    // Calculating EMI
    const principal = carPrice - downPayment;
    const monthlyRate = interestRate / (12 * 100); // Monthly interest rate
    const months = loanTenure * 12; // Total months
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    // Displaying results
    document.getElementById('monthlyEmi').textContent = Math.round(emi).toLocaleString('en-IN');
    document.getElementById('loanAmount').textContent = Math.round(principal).toLocaleString('en-IN');
    document.getElementById('totalInterest').textContent = Math.round(totalInterest).toLocaleString('en-IN');
    document.getElementById('totalPayment').textContent = Math.round(totalPayment).toLocaleString('en-IN');
    document.getElementById('emiResult').style.display = 'block';
});