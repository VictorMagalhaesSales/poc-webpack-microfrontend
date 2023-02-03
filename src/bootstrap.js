const firstMFE = require('firstmfe/home');
const secondMFE = require('secondmfe/home');

const firstMFEValue = firstMFE.home();
const secondMFEValue = secondMFE.home();


const element = document.getElementById('remote-modules');
element.innerHTML = `${firstMFEValue} <br> ${secondMFEValue}`;