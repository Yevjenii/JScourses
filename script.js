'use strict';

const money = prompt('Ваш месячный доход?');
const income = 'Tutoring';
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 30000;
const expenses0 = prompt('Введите обязательную статью расходов?');
const amount0 = prompt('Во сколько это обойдется?');
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = prompt('Во сколько это обойдется?');
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const accumulatedMonth = getAccumulatedMonth();
const period = Math.ceil(mission/accumulatedMonth);
const budgetDay =  Math.floor(accumulatedMonth/30);
const showTypeOf = function (variable) {
    console.log("Type of variable: ", variable , typeof(variable));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth() {
    return Number(amount0)+Number(amount1);
}

function getAccumulatedMonth() {
    return money - getExpensesMonth();
}

function getTargetMonth() {
    return Math.ceil(mission/accumulatedMonth);
}

console.log(" Type of variable 'money': " + typeof(money)+ "\n",
            "Type of variable 'income': " + typeof(income)+ "\n",
            "Type of variable 'deposit': " + typeof(deposit)+ "\n",
            "Length of variable 'addExpenses': " + addExpenses.length+ "\n",
            "Цель заработать " + mission + " гривен.\n",
            "Бюджет на месяц: " + accumulatedMonth + "грн.\n",
            "Цель будет достигнута за " + getTargetMonth() + " месяцев.\n",
            "Дневной бюджет: " + budgetDay + "грн.\n",
            "Массив:" + addExpenses.toLowerCase().split(',') + "\n",
            "Общая сумма расходов за месяц:", getExpensesMonth() + "\n");
            
const getStatusIncome = function () {
    if(budgetDay >= 1200) {
        console.log('У Вас высокий уровень дохода.');
    } else if(budgetDay >= 600) {
        console.log('У Вас средний уровень дохода.');
    } else if(budgetDay >= 0) {
        console.log('К сожалению, у Вас уровень дохода ниже среднего.');
    } else {
        console.log('Что-то пошло не так! :(');   
    }
};
console.log(getStatusIncome);