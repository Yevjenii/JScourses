'use strict';

const money = prompt('Ваш месячный доход?');
const income = 'Tutoring';
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 30000;
const expenses0 = prompt('Введите обязательную статью расходов?');
const amount0 = prompt('Во сколько это обойдется?');
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = prompt('Во сколько это обойдется?');
const budgetMonth = money - amount0 - amount1;
let period;
let budgetDay = money/30;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');


period = Math.ceil(mission/budgetMonth);
budgetDay = Math.floor(budgetMonth/30);
addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(',');

console.log(" Type of variable 'money': " + typeof(money)+ "\n",
            "Type of variable 'income': " + typeof(income)+ "\n",
            "Type of variable 'deposit': " + typeof(deposit)+ "\n",
            "Length of variable 'addExpenses': " + addExpenses.length+ "\n",
            "Период равен " + period + " месяцев.\n",
            "Цель заработать " + mission + " гривен.\n",
            "Дневной бюджет: " + budgetDay + "грн.\n",
            "Бюджет на месяц:", budgetMonth+ "\n",
            "Цель будет достигнута за " + period + " месяцев.\n",
            "Дневной бюджет: " + budgetDay + "грн.\n",
            "Массив:" + addExpenses+ "\n");

if(budgetDay>=1200) {
console.log('У Вас высокий уровень дохода.');
}
else if(budgetDay>=600 && budgetDay<=1199) {
console.log('У Вас средний уровень дохода.');
}
else if(budgetDay>=0 && budgetDay<=599) {
console.log('К сожалению, у Вас уровень дохода ниже среднего.');
}
else {
console.log('Что-то пошло не так! :(');   
}