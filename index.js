'use strict';

let calcButton = document.getElementById('start');
let incomeAddLineButton = document.getElementsByTagName('button')[0];
let expensesAddLineButton = document.getElementsByTagName('button')[1];
let checkDeposit = document.querySelector('#deposit-check')
let incomeAddItem = document.querySelectorAll('.additional_income-item');
let budgetMonthInput = document.getElementsByClassName('budget_month-value')[0];
let budgetDayInput = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthInput = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeInput = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesInput = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodInput = document.getElementsByClassName('income_period-value')[0];
let targetMonthInput = document.getElementsByClassName('target_month-value')[0];
let rangeInput = document.querySelector('.period-select');
let targetAmountInput = document.querySelector('.target-amount');
let depositPercentInput = document.querySelector('.deposit-percent');
let depositAmountInput = document.querySelector('.deposit-amount');
let selectDepositBank = document.querySelector('.deposit-bank');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let expensesAddButton = document.querySelector('.expenses_add');
let expensesItems = document.querySelectorAll('.expenses-items');
let expensesTitleInput = document.querySelector('.expenses-title');
let incomeTitleInput = document.querySelector('.income-title');
let salaryAmountInput = document.querySelector('.salary-amount');
let incomeItem = document.querySelectorAll('.income-items');
let periodAmount = document.querySelector('.period-amount');


function askNumber(message, errorMessage) {
    let text = '',
        number = 0;
      while (number <= 0){
        text = prompt(message, '');
  
        if (!isNaN(parseFloat(text) && isFinite(text))) {
          number = parseInt(text);
        }
        message = errorMessage;
      }
      return number;
  } 
  let isString = function(line){
    return isNaN(parseFloat(line)) && line !== '';
  };

let appData = {
    income : {},
    addIncome : [],
    incomeMonth: 0,
    expences : {},
    addExpences : [],
    deposit : false,
    percentDeposit : 0,
    moneyDeposit : 0,
    budget : 0,
    budgetDay : 0,
    budgetMonth : 0,
    expensesMonth : 0,
    start : function () {
        
        if(salaryAmountInput.value === '') {
            alert('Поле "месячный доход" не может быть пустым!');
            return;
        }
        appData.budget = +salaryAmountInput.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();        
        appData.getAddExpenses();
        appData.getAddIncome();       
        appData.getBudget();

        appData.showResult();
        
    },
    showResult : function () {
        budgetMonthInput.value = appData.budgetMonth;
        budgetDayInput.value = appData.budgetDay;
        expensesMonthInput.value = appData.expensesMonth;
        additionalExpensesInput.value = appData.addExpences.join(', ');
        additionalIncomeInput.value = appData.addIncome.join(', ');
        targetMonthInput.value = appData.getTargetMonth();
        incomePeriodInput.value = appData.calcSavedMoney();
        rangeInput.addEventListener("input", function (){
            incomePeriodInput.value = appData.calcSavedMoney();
        });
        


    },
    getExpenses : function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '') {
                appData.expences[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome : function () {
        incomeItem.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });
       
        for(let key in appData.income){
            appData.incomeMonth += Number(appData.income[key])
        }
    },
    getAddIncome : function () {
      incomeAddItem.forEach(function (item) {
          let itemValue = item.value.trim();
          if(itemValue !== ''){
              appData.addIncome.push(itemValue);
          }
      })  
    },
    getAddExpenses : function () {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if(item !== ''){
                appData.addExpences.push(item);
            }
            
        })
    },
    getExpensesMonth : function () {
        for (const key in appData.expences) {
            appData.expensesMonth += Number(appData.expences[key]);         
            }        
    },
    getBudget : function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.trunc(appData.budgetMonth/30);
    },
    getTargetMonth : function () {
        return Math.ceil(targetAmountInput.value/appData.budgetMonth);
    },
    getStatusIncome : function () {
        if(appData.budgetDay>=1200) {
            return ('У вас высокий уровень дохода');
            }
            else if(appData.budgetDay>=600 && appData.budgetDay<=1199) {
            return('У вас средний уровень дохода');
            }
            else if(appData.budgetDay>=0 && appData.budgetDay<=599) {
            return ('К сожалению у вас уровень дохода ниже среднего');
            }
            else {
            return ('Что то пошло не так');   
            } 
    },
    getInfoDeposit : function () {
        if(appData.deposit) {
            appData.percentDeposit = askNumber('Какой годовой процент,');
            appData.moneyDeposit = askNumber('Какая сумма заложена?,');
        }
    },
    calcSavedMoney : function () {
        return appData.budgetMonth * Number(rangeInput.value);
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddLineButton);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
            expensesAddLineButton.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomeAddLineButton);
        incomeItem = document.querySelectorAll('.income-items');
        if(incomeItem.length === 3) {
            incomeAddLineButton.style.display = 'none';
        }
    },
    changeNumber: function () {
        periodAmount.textContent = rangeInput.value;
    },
    closeButton: function() {
            if(salaryAmountInput.value === '') {
                calcButton.setAttribute('disabled', 'disabled');
            } else {
                calcButton.removeAttribute('disabled');
            }                
    }
    
};
appData.closeButton();
calcButton.addEventListener("click", appData.start);
salaryAmountInput.addEventListener("input", appData.closeButton);
expensesAddLineButton.addEventListener("click", appData.addExpensesBlock);
incomeAddLineButton.addEventListener("click", appData.addIncomeBlock);
rangeInput.addEventListener("input", appData.changeNumber);

// if(Math.sign(appData.period) === 1) {
//     console.log("Цель будет достигнута за " + appData.period + " месяцев.");
// }
// else {
//     console.log("Цель не будет достигнута.");
// }


