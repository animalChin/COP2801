/*
Testing some things for assignment 3
*/

var balance = 1500;
var interestRate = .18;
var minPaymentPercent = .02;
const monthInYear = 12;

function calculateMinimumPayment(balance, minPaymentPercent){

    return minimumPayment = balance * minPaymentPercent;
}

var minPayment = calculateMinimumPayment(balance, minPaymentPercent);

console.log(minPayment);

var interestOnBalance = balance * ( interestRate / monthInYear);

console.log(interestOnBalance);

var thisMonthsPayment = balance + interestOnBalance;

console.log(thisMonthsPayment);

var balance = (balance + interestOnBalance) - minPayment;

console.log(balance);

var totalInterest = 0;
totalInterest += interestOnBalance;

console.log(totalInterest);

var year = 1;
var paymentNumber = 1;

var payment = { 
    year: year,
    balance: balance,
    number: paymentNumber,
    interest: totalInterest
}

console.log(payment.year + "\t" + payment.balance + "\t" + payment.number + "\t" + payment.interest);

var minPayment = calculateMinimumPayment(balance, minPaymentPercent);

console.log(minPayment);

var interestOnBalance = balance * ( interestRate / monthInYear);

console.log(interestOnBalance);

var thisMonthsPayment = balance + interestOnBalance;

console.log(thisMonthsPayment);

var balance = (balance + interestOnBalance) - minPayment;

console.log(balance);

totalInterest += interestOnBalance;

console.log(totalInterest);

var year = 1;
var paymentNumber = 1;

var payment = { 
    year: year,
    balance: balance.toFixed(2),
    number: paymentNumber,
    interest: totalInterest.toFixed(2)
}

console.log(payment.year + "\t" + payment.balance + "\t" + payment.number + "\t" + payment.interest);

