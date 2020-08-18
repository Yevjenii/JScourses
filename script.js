'use strict';

let money = prompt('Ваш месячный доход?');
let income = 'Tutoring';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 30000;
let period = 7;
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
let expenses0 = prompt('Введите обязательную статью расходов?');
let amount0 = prompt('Во сколько это обойдется?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let budgetMonth = money - amount0 - amount1;
console.log('Бюджет на месяц:', budgetMonth);
period = Math.ceil(mission/budgetMonth);
console.log("Цель будет достигнута за " + period + " месяцев.");
budgetDay = Math.floor(budgetMonth/30);
console.log("Дневной бюджет: " + budgetDay + "грн.");
if(budgetDay>=1200) {
console.log('У вас высокий уровень дохода');
}
else if(budgetDay>=600 && budgetDay<=1199) {
console.log('У вас средний уровень дохода');
}
else if(budgetDay>=0 && budgetDay<=599) {
console.log('К сожалению у вас уровень дохода ниже среднего');
}
else {
console.log('Что то пошло не так');   
}