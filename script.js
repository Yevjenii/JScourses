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

const appData = {
    income : {},
    addIncome : [],
    expences : {},
    addExpences : [],
    deposit : false,
    mission : 40000,
    period : 0,
    budget : +money,
    budgetDay : 0,
    budgetMonth : 0,
    expensesMonth : 0,
    asking : function() {
        const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let summ;
        for(let i =0; i<2; i++) {
            const temp = prompt('Введите обязательную статью расходов?');
            do{
                summ = prompt('Во сколько это обойдется?');
            }while(!isNumber(summ));
            appData.expences[temp]=Number(summ);
        }
    console.log(appData.expences);        
    },
    getExpensesMonth : function () {
        for (let key in appData.expences) {
            appData.expensesMonth += appData.expences[key];         
            }        
        console.log(appData.expensesMonth);
    },
    getBudget : function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.trunc(appData.budgetMonth/30);
    },
    getTargetMonth : function () {
        appData.period = Math.ceil(appData.mission/appData.budgetMonth);
    },
    getStatusIncome : function () {
        if(appData.budgetDay >= 1200) {
            console.log('У Вас высокий уровень дохода.');
        } else if(appData.budgetDay >= 600) {
            console.log('У Вас средний уровень дохода.');
        } else if(appData.budgetDay >= 0) {
            console.log('К сожалению, у Вас уровень дохода ниже среднего.');
        } else {
            console.log('Что-то пошло не так! :(');   
        } 
    },
    outLog : function() {
        console.log("Наша программа включает в себя данные:",);
        for (let key in appData) { 
            console.log( "Ключ: " + key + " значение: " + appData[key] );
          }
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
console.log("Цель заработать " + appData.mission + " гривен.");
console.log('Общая сумма расходов за месяц:', appData.expensesMonth);
console.log('Бюджет на месяц:', appData.budgetMonth);
if(Math.sign(appData.period) === 1) {
    console.log("Цель будет достигнута за " + appData.period + " месяцев.");
}
else {
    console.log("Цель не будет достигнута.");
}
console.log("Дневной бюджет: " + appData.budgetDay + "грн.");
appData.outLog();