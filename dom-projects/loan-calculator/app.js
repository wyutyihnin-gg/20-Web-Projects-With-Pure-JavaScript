// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
    console.log('Calculating...');
    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Please check your numbers');
    }
    e.preventDefault();
}

//show error
function showError(errMsg) {

}

function getDivisorsCnt(n) {

    var numDivisors = 1;
    var factor = 2; // Candidate for prime factor of `n`
    while (factor * factor <= n) {
        if (n % factor === 0) {
            // `factor` is a prime factor of `n`, determine the exponent:
            var exponent = 0;
            do {
                n /= factor;
                exponent++;
            } while (n % factor === 0)
            // `factor^exponent` is one term in the prime factorization of n,
            // this contributes as factor `exponent + 1`:
            numDivisors *= exponent + 1;
        }
        // Next possible prime factor:
        factor = factor == 2 ? 3 : factor + 2
    }

    // Now `n` is either 1 or a prime number. In the latter case,
    // it contributes a factor 2:
    if (n > 1) {
        numDivisors *= 2;
    }

    console.log(numDivisors);
}