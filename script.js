'use strict'

const buttonCalculate = document.getElementById('start');
const buttonIncomeExpPlus = document.getElementsByTagName('button')[0];
const buttonAddExpPlus= document.getElementsByTagName('button')[1];
const checkDeposit = document.querySelector('#deposit-check');
const inputAddIncome = document.querySelectorAll('.additional_income-item');
const inputBudgetMonth = document.getElementsByClassName('budget_month-value')[0];
const inputBudgetDay = document.getElementsByClassName('budget_day-value')[0];
const inputExpensesMonth = document.getElementsByClassName('expenses_month-value')[0];
const inputAdditionalIncome = document.getElementsByClassName('additional_income-value')[0];
const inputAdditionalExpenses = document.getElementsByClassName('additional_expenses-value')[0];
const inputIncomePeriod = document.getElementsByClassName('income_period-value')[0];
const inputTargetMonth = document.getElementsByClassName('target_month-value')[0];
const inputRange = document.querySelector('.period-select');
const inputTargetAmount = document.querySelector('.target-amount');
const inputDepositPercent = document.querySelector('.deposit-percent');
const inputDepositAmount = document.querySelector('.deposit-amount');
const selectDepositBank = document.querySelector('.deposit-bank');
const inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item');
const buttonExpensesAdd = document.querySelector('.expenses_add');
const expensesItem =document.querySelectorAll('.expenses-items');
const inputExpensesTitle = document.querySelector('.expenses-title');
const inputIncomeAmount = document.querySelector('.income-amount');
const inputIncomeTitle = document.querySelector('.income-title');
const inputSalaryAmount = document.querySelector('.salary-amount');
const incomeItem = document.querySelectorAll('.income-items');
const periodAmount = document.querySelector('.period-amount');

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
  const isString = function(line){
    return isNaN(parseFloat(line)) && line !== '';
  };

const appData = {
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
        
        if(inputSalaryAmount.value === '') {
            alert('Поле "месячный доход" не может быть пустым!');
            return;
        }
        appData.budget = +inputSalaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();        
        appData.getAddExpenses();
        appData.getAddIncome();       
        appData.getBudget();

        appData.showResult();
        
    },
    showResult : function () {
        inputBudgetMonth.value = appData.budgetMonth;
        inputBudgetDay.value = appData.budgetDay;
        inputExpensesMonth.value = appData.expensesMonth;
        inputAdditionalExpenses.value = appData.addExpences.join(', ');
        inputAdditionalIncome.value = appData.addIncome.join(', ');
        inputTargetMonth.value = appData.getTargetMonth();
        inputIncomePeriod.value = appData.calcSavedMoney();
        inputRange.addEventListener("input", function (){
            inputIncomePeriod.value = appData.calcSavedMoney();
        });
        


    },
    getExpenses : function () {
        expensesItem.forEach(function (item) {
            const itemExpenses = item.querySelector('.expenses-title').value;
            const cashExpenses = item.querySelector('.expenses-amount').value;
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
        inputAddIncome.forEach(function (item) {
          let itemValue = item.value.trim();
          if(itemValue !== ''){
              appData.addIncome.push(itemValue);
          }
      })  
    },
    getAddExpenses : function () {
        let addExpenses = inputAdditionalExpensesItem.value.split(',');
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
        return Math.ceil(inputTargetMonth.value/appData.budgetMonth);
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
    getInfoDeposit : function () {
        if(appData.deposit) {
            appData.percentDeposit = askNumber('Какой годовой процент,');
            appData.moneyDeposit = askNumber('Какая сумма заложена?,');
        }
    },
    calcSavedMoney : function () {
        return appData.budgetMonth * Number(inputRange.value);
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItem[0].cloneNode(true);
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, buttonAddExpPlus);
        expensesItem = document.querySelectorAll('.expenses-items');
        if(expensesItem.length === 3) {
            buttonAddExpPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, buttonIncomeExpPlus);
        incomeItem = document.querySelectorAll('.income-items');
        if(incomeItem.length === 3) {
            buttonIncomeExpPlus.style.display = 'none';
        }
    },
    changeNumber: function () {
        periodAmount.textContent = inputRange.value;
    },
    closeButton: function() {
            if(inputSalaryAmount.value === '') {
                buttonCalculate.setAttribute('disabled', 'disabled');
            } else {
                buttonCalculate.removeAttribute('disabled');
            }                
    }
    
};
appData.closeButton();
buttonCalculate.addEventListener("click", appData.start);
inputSalaryAmount.addEventListener("input", appData.closeButton);
buttonAddExpPlus.addEventListener("click", appData.addExpensesBlock);
buttonIncomeExpPlus.addEventListener("click", appData.addIncomeBlock);
inputRange.addEventListener("input", appData.changeNumber);
