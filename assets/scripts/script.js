const form = document.querySelector('form');
const loanAmountInput = document.querySelector('#loan-amount');
const interestRateInput = document.querySelector('#interest-rate');
const loanTermInput = document.querySelector('#loan-term');
const monthlyPaymentInput = document.querySelector('#monthly-payment');






form.addEventListener('submit', function(e) {
  e.preventDefault();

  const loanAmount = Number(loanAmountInput.value);
  const interestRate = Number(interestRateInput.value) / 100 / 12;
  const loanTerm = Number(loanTermInput.value) * 12;

  const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
                         (Math.pow(1 + interestRate, loanTerm) - 1);
  
  monthlyPaymentInput.value = monthlyPayment.toFixed(2);
  

});
