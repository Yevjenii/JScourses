let money = 12000;
let income = 'Tutoring';
let addExpenses = ' Taxi, Communal payments, Taxes';
let deposit = true;
let mission = 30000;
let period = 7;
// alert('how much money?');
// console.log('any text! money:' + money);

console.log("Type of variable 'money': " + typeof(money));
console.log("Type of variable 'income': " + typeof(income));
console.log("Type of variable 'deposit': " + typeof(deposit));

console.log("Length of variable 'addExpenses': " + addExpenses.length);

console.log("Период равен " + period + " месяцев.");
console.log("Цель заработать " + mission + " гривен.");

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(',');
console.log(addExpenses);
for (var i = 0; i < addExpenses.length; i++) {
    console.log(addExpenses[i]);
    // вывод массива в другой форме
 }

let budgetDay = money/30;
console.log("Дневной бюджет: " + budgetDay + "грн.");