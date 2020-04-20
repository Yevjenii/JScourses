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
let inputs = document.querySelector('.data').querySelectorAll('input[type=text]');
let inputsClear = document.querySelectorAll('input[type=text]');
let cancel = document.getElementById('cancel');


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

const AppData = function(){
    this.income = {};
    this.addIncome = [];
    this.incomeMonth= 0;
    this.expences = {};
    this.addExpences = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

};

AppData.prototype.start = function () {
        
    if(salaryAmountInput.value === '') {
        alert('Поле "месячный доход" не может быть пустым!');
        return;
    }
    this.budget = +salaryAmountInput.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();        
    this.getAddExpenses();
    this.getAddIncome();       
    this.getBudget();

    this.showResult();
    this.blockInputs();
    calcButton.style.display = 'none';
    cancel.style.display = 'block';
    
};
AppData.prototype.showResult = function () {
    const _this = this;
    budgetMonthInput.value = this.budgetMonth;
    budgetDayInput.value = this.budgetDay;
    expensesMonthInput.value = this.expensesMonth;
    additionalExpensesInput.value = this.addExpences.join(', ');
    additionalIncomeInput.value = this.addIncome.join(', ');
    targetMonthInput.value = this.getTargetMonth();
    incomePeriodInput.value = this.calcSavedMoney();
    rangeInput.addEventListener("input", function (){
        incomePeriodInput.value = _this.calcSavedMoney();
    });
    


};
AppData.prototype.getExpenses = function () {
    const _this = this;
    expensesItems.forEach(function (item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== '') {
            _this.expences[itemExpenses] = cashExpenses;
        }
        

    });
};
AppData.prototype.getIncome = function () {
    const _this = this;
    incomeItem.forEach(function (item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = cashIncome;
        }
    });
    
    for(let key in this.income){
        this.incomeMonth += Number(this.income[key])
    }
};
AppData.prototype.getAddIncome = function () {
    const _this = this;
    incomeAddItem.forEach(function (item) {
        let itemValue = item.value.trim();
        if(itemValue !== ''){
          _this.addIncome.push(itemValue);
        }
        
    })  
  };
AppData.prototype.getAddExpenses = function () {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
        item = item.trim();
        if(item !== ''){
            _this.addExpences.push(item);
        }
        
    })
};
AppData.prototype.getExpensesMonth = function () {
    for (const key in this.expences) {
        this.expensesMonth += Number(this.expences[key]);         
        }        
};
AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.trunc(this.budgetMonth/30);
};
AppData.prototype.getTargetMonth = function () {
    return Math.ceil(targetAmountInput.value/this.budgetMonth);
};
AppData.prototype.getStatusIncome = function () {
    if(this.budgetDay>=1200) {
        return ('У вас высокий уровень дохода');
        }
        else if(this.budgetDay>=600 && this.budgetDay<=1199) {
        return('У вас средний уровень дохода');
        }
        else if(this.budgetDay>=0 && this.budgetDay<=599) {
        return ('К сожалению у вас уровень дохода ниже среднего');
        }
        else {
        return ('Что то пошло не так');   
        } 
};
AppData.prototype.getInfoDeposit = function () {
    if(this.deposit) {
        this.percentDeposit = askNumber('Какой годовой процент,');
        this.moneyDeposit = askNumber('Какая сумма заложена?,');
    }
};
AppData.prototype.calcSavedMoney = function () {
    return this.budgetMonth * Number(rangeInput.value);
};
AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddLineButton);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
        expensesAddLineButton.style.display = 'none';
    }
};
AppData.prototype.addIncomeBlock = function () {
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomeAddLineButton);
    incomeItem = document.querySelectorAll('.income-items');
    if(incomeItem.length === 3) {
        incomeAddLineButton.style.display = 'none';
    }
};
AppData.prototype.blockInputs = function () {
    inputs = document.querySelector('.data').querySelectorAll('input[type=text]');
    inputs.forEach(function (item) {
        item.setAttribute('disabled', 'disabled');       
    });
};

AppData.prototype.changeNumber= function () {
    periodAmount.textContent = rangeInput.value;
};
AppData.prototype.closeButton = function() {
    if(salaryAmountInput.value === '') {
        calcButton.setAttribute('disabled', 'disabled');
    } else {
        calcButton.removeAttribute('disabled');
    }                
};
AppData.prototype.reset = function() {
    inputs.forEach(function (item) {
        item.removeAttribute('disabled');       
    });
    calcButton.style.display = 'block';
    cancel.style.display = 'none';
    for (let i = 0; i < expensesItems.length; i++) {
         
         if(expensesItems.length!==1){
            expensesItems[i].remove();
         }  
         expensesItems = document.querySelectorAll('.expenses-items');
         expensesAddLineButton.style.display = 'block';
     }
     for (let i = 0; i < incomeItem.length; i++) {
         if(incomeItem.length!==1){
            incomeItem[i].remove();
         }         
         incomeItem = document.querySelectorAll('.income-items');
         incomeAddLineButton.style.display = 'block';
     }
     rangeInput.value = 1;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth = 0;
    this.expences = {};
    this.addExpences = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.changeNumber();
    inputsClear = document.querySelectorAll('input[type=text]');
    inputsClear.forEach(function (item) {
     item.value = '';       
 });
 };
AppData.prototype.eventListeners = function (){
this.closeButton();
calcButton.addEventListener("click", this.start.bind(this));
cancel.addEventListener("click", this.reset.bind(this));
salaryAmountInput.addEventListener("input", this.closeButton);
expensesAddLineButton.addEventListener("click", this.addExpensesBlock);
incomeAddLineButton.addEventListener("click", this.addIncomeBlock);
rangeInput.addEventListener("input", this.changeNumber);
};

const appData = new AppData();
appData.eventListeners();







