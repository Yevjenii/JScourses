const money = 12000;
const income = 'Tutoring';
const addExpenses = ' Taxi, Communal payments, Taxes';
const deposit = true;
const mission = 30000;
const period = 7;
const budgetDay = money/30;

console.log("Type of variable 'money': " + typeof(money),
            "Type of variable 'income': " + typeof(income),
            "Type of variable 'deposit': " + typeof(deposit),
            "Length of variable 'addExpenses': " + addExpenses.length,
            "Период равен " + period + " месяцев.",
            "Цель заработать " + mission + " гривен.",
            "Дневной бюджет: " + budgetDay + "грн.");

let tempAddExpenses = addExpenses;           
tempAddExpenses = tempAddExpenses.toLowerCase();
tempAddExpenses = tempAddExpenses.split(',');
console.log(tempAddExpenses);
for (var i = 0; i < tempAddExpenses.length; i++) {
    console.log(tempAddExpenses[i]);
    // вывод массива в другой форме
 }
