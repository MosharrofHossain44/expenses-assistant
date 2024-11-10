/* Calculate button section */

document.getElementById('calculate').addEventListener('click', function () {
    const incomeValue = parseFloat(document.getElementById('income').value);
    const softwareValue = parseFloat(document.getElementById('software').value);
    const coursesValue = parseFloat(document.getElementById('courses').value);
    const internetValue = parseFloat(document.getElementById('internet').value);
    // console.table({incomeValue, softwareValue, internetValue, coursesValue})

    const totalExpenses = softwareValue + coursesValue + internetValue;
    const balance = incomeValue - totalExpenses;
    // console.log(balance)

    const getTotalExpenses = document.getElementById('total-expenses');
    getTotalExpenses.innerText = totalExpenses.toFixed(2);
    const getBalance = document.getElementById('balance');
    getBalance.innerText = balance.toFixed(2);


    const getResultSection = document.getElementById('results');
    getResultSection.classList.remove('hidden')

})



/* Calculate Savings button */

document.getElementById('calculate-savings').addEventListener('click', function(){
    const incomeValue = parseFloat(document.getElementById('income').value);
    const softwareValue = parseFloat(document.getElementById('software').value);
    const coursesValue = parseFloat(document.getElementById('courses').value);
    const internetValue = parseFloat(document.getElementById('internet').value);
    const savingValue = parseFloat(document.getElementById('savings').value);
    // console.table({incomeValue, softwareValue, internetValue, coursesValue, savingValue})

    const totalExpenses = softwareValue + coursesValue + internetValue;
    const balance = incomeValue - totalExpenses;
    // console.log(balance)


    const savingsAmount = balance*(savingValue/100);
    // console.log(savingsAmount)
    const getSavings = document.getElementById('savings-amount');
    getSavings.innerText = savingsAmount.toFixed(2);


    const remainingBalance = balance-savingsAmount;
    const getRemainingBalance = document.getElementById('remaining-balance');
    getRemainingBalance.innerText = remainingBalance.toFixed(2)

})