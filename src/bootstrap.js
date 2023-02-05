const firstMFE = require('firstmfe/home');
const secondMFE = require('secondmfe/home');

const firstMFEValue = firstMFE.home();
const secondMFEValue = secondMFE.home();


const firstElement = document.getElementById('first-mfe');
firstElement.innerHTML = firstMFEValue;

const secondElement = document.getElementById('second-mfe');
secondElement.innerHTML = secondMFEValue;