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

