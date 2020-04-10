'use strict';

let calcButton = document.getElementById('start');
let incomeAddLineButton = document.getElementsByTagName('button')[0];
let expensesAddLineButton = document.getElementsByTagName('button')[1];
let checkDeposit = document.querySelector('#deposit-check')
let incomeAddInput = document.querySelectorAll('.additional_income-item');
let budgetMonthInput = document.getElementsByClassName('budget_month-value');
let budgetDayInput = document.getElementsByClassName('budget_day-value');
let expensesMonthInput = document.getElementsByClassName('expenses_month-value');
let additionalIncomeInput = document.getElementsByClassName('additional_income-value');
let additionalExpensesInput = document.getElementsByClassName('additional_expenses-value');
let incomePeriodInput = document.getElementsByClassName('income_period-value');
let targetMonthInput = document.getElementsByClassName('target_month-value');
let rangeInput = document.querySelector('.period-select');
let targetAmountInput = document.querySelector('.target-amount');
let depositPercentInput = document.querySelector('.deposit-percent');
let depositAmountInput = document.querySelector('.deposit-amount');
let selectDepositBank = document.querySelector('.deposit-bank');
let edditionalExpensesInput = document.querySelector('.additional_expenses-item');
let expensesAddButton = document.querySelector('.expenses_add');
let expensesAmountInput = document.querySelector('.expenses_add');
let expensesTitleInput = document.querySelector('.expenses-title');
let incomeAmountInput = document.querySelector('.income-amount');
let incomeTitleInput = document.querySelector('.income-title');
let salaryAmountInput = document.querySelector('.salary-amount');