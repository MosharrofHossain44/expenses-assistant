// Assistant tab
const assistantTab = document.getElementById('assistant-tab');
assistantTab.addEventListener('click', function(){
    const historyTab = document.getElementById('history-tab');
    historyTab.classList.remove('bg-gradient-to-r', 'from-blue-500' ,'to-purple-600', 'text-white');

    const assistantTab = document.getElementById('assistant-tab');
    assistantTab.classList.add('bg-gradient-to-r', 'from-blue-500' ,'to-purple-600', 'text-white');


    //Show expense form
    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.remove('hidden')

    //hide history description
    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden')
});



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


    //Create history element
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md shadow-sm border-l-2 border-green-500"
    historyItem.innerHTML = `
        <p class="text-xs font-bold text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: ${incomeValue.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Expense: ${totalExpenses.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Balance: ${balance.toFixed(2)}</p>
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.prepend(historyItem);
    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden')
    // console.log(historySection)


})



/* Calculate Savings button */

document.getElementById('calculate-savings').addEventListener('click', function () {
    const incomeValue = parseFloat(document.getElementById('income').value);
    const softwareValue = parseFloat(document.getElementById('software').value);
    const coursesValue = parseFloat(document.getElementById('courses').value);
    const internetValue = parseFloat(document.getElementById('internet').value);
    const savingValue = parseFloat(document.getElementById('savings').value);
    // console.table({incomeValue, softwareValue, internetValue, coursesValue, savingValue})

    const totalExpenses = softwareValue + coursesValue + internetValue;
    const balance = incomeValue - totalExpenses;
    // console.log(balance)


    const savingsAmount = balance * (savingValue / 100);
    // console.log(savingsAmount)
    const getSavings = document.getElementById('savings-amount');
    getSavings.innerText = savingsAmount.toFixed(2);


    const remainingBalance = balance - savingsAmount;
    const getRemainingBalance = document.getElementById('remaining-balance');
    getRemainingBalance.innerText = remainingBalance.toFixed(2);


    
    //Input field empty korte hbe
    document.getElementById('income').value = '';
    document.getElementById('software').value = '';
    document.getElementById('courses').value = '';
    document.getElementById('internet').value = '';
    document.getElementById('savings-amount').value = '';

})





/* History functionality */
const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-gradient-to-r', 'from-blue-500' ,'to-purple-600', 'text-white');

    const assistantTab = document.getElementById('assistant-tab');
    assistantTab.classList.remove('bg-gradient-to-r', 'from-blue-500' ,'to-purple-600', 'text-white');
    assistantTab.classList.add('text-gray-600');


    //hide expense form
    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.add('hidden')

    //show history description
    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden')

})