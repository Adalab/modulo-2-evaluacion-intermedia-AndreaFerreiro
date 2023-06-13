'use strict'
const select= document.querySelector('.js_select');
const inputBet = document.querySelector ('.js_bet');
const buttom = document.querySelector ('.js_buttom');
const reset =document.querySelector ('.js_reset');
const result = document.querySelector ('.js_result');
const inputBalance = document.querySelector ('.js_balance');
let saldo = 100;
function win() {
    const betValue= inputBet.value;
    saldo = saldo+betValue*2;
}
function fail() {
    const betValue= inputBet.value;
    saldo = saldo-betValue;
}
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function innerResult(message){
    result.innerHTML = message;
}
function Bet(){
    const selectValue = parseInt(select.value);
    const randomNumber = getRandomNumber(6);
    if (selectValue === randomNumber){
        innerResult('Has ganado el doble de lo apostado!');
        win();
        inputBalance.innerHTML= saldo;
        buttom.classList.add('hidden');
        reset.classList.remove('hidden');
    }else{
        innerResult('Has perdido lo apostado!');
        fail();
        inputBalance.innerHTML= saldo;
        buttom.classList.add('hidden');
        reset.classList.remove('hidden');
    }
    if (saldo <= 0){
        innerResult('¡Que pena! Has perdido.');
        buttom.setAttribute("disabled", "disabled");
    }else if (saldo >= 200){
        innerResult('¡Felicidades! Has ganado!');
        buttom.setAttribute("disabled", "disabled");
    }
}
function handleEvent (event) {
    event.preventDefault();
    Bet();
}
buttom.addEventListener ('click', handleEvent);
function handleReset (event){
    document.location.reload();
}
reset.addEventListener('click',handleReset);