// Listen for form submission
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hide results initially
  document.getElementById('results').classList.add('hidden');
  
  // Calculate the loan details
  calculateResults();
  
  e.preventDefault();
});

function calculateResults() {
  const amount = parseFloat(document.getElementById('amount').value);
  const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value) * 12;

  // Compute the monthly payment
  const x = Math.pow(1 + interest, years);
  const monthly = (amount * x * interest) / (x - 1);

  if (isFinite(monthly)) {
    document.getElementById('monthly-payment').textContent = monthly.toFixed(2);
    document.getElementById('total-payment').textContent = (monthly * years).toFixed(2);
    document.getElementById('total-interest').textContent = ((monthly * years) - amount).toFixed(2);
    
    // Show results
    document.getElementById('results').classList.remove('hidden');
  } else {
    alert('Please check your numbers');
  }
}
