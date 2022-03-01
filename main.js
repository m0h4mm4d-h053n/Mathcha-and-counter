//random number generating function 
function randomNum1() {
  let a = 5,
    b = 15;
  let getNum = (Math.random() * a) + b;
  return getNum;
}

function randomNum2() {
  let a = 10,
    b = 20;
  let getNum = (Math.random() * (a - b) + b);
  return getNum;
}

var value1 = Math.floor(randomNum1());
var value2 = Math.floor(randomNum2());
var ans = value1 + value2;

const e = document.querySelector('#num1');
const f = document.querySelector('#num2');
e.innerText = value1;
f.innerText = value2;

function getValue() {
  let select = document.querySelector('#inputField').value;
  let userAns = select;
  const change = document.querySelector('#output');
  if (ans == userAns) {
    change.innerText = 'Passed';
  } else {
    change.innerText = 'Failed';
  }
}
