'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
const start = function () {
    let tempMoney = 0;
    do{
    tempMoney = prompt('Ваш месячный доход?');
    }while (!isNumber(tempMoney));
    return tempMoney; 
};
const money = Number(start());
const income = 'Tutoring';
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 30000;
const expensesMonth = getExpensesMonth();
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
    let expenses = [];
    let sum = 0;
    let summ;
    for(let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?'); 
        do{
            summ = prompt('Во сколько это обойдется?');
        }while(!isNumber(summ));

        sum+=Number(summ);
    }
    return sum;
}

function getAccumulatedMonth() {
    return money - expensesMonth;
}

function getTargetMonth() {
    if(Math.sign(Math.ceil(mission/accumulatedMonth)) === 1) {
        return ("Цель будет достигнута за" + Math.ceil(mission/accumulatedMonth) + "месяцев.");
    }
    else {
        return ("Цель не будет достигнута.");
    }
    
}

console.log(" Type of variable 'money': " + typeof(money)+ "\n",
            "Type of variable 'income': " + typeof(income)+ "\n",
            "Type of variable 'deposit': " + typeof(deposit)+ "\n",
            "Length of variable 'addExpenses': " + addExpenses.length+ "\n",
            "Цель заработать " + mission + " гривен.\n",
            "Бюджет на месяц: " + accumulatedMonth + "грн.\n",
            getTargetMonth() + "\n",
            "Дневной бюджет: " + budgetDay + "грн.\n",
            "Массив:" + addExpenses.toLowerCase().split(',') + "\n",
            "Общая сумма расходов за месяц:", expensesMonth + "\n");
            
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


