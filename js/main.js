'use strict'
const select= document.querySelector('.js_select');
const bet = document.querySelector ('.js_bet');
const buttom = document.querySelector ('.js_buttom');
const reset =document.querySelector ('.js_reset');
const result = document.querySelector ('.js_result');
const balance = document.querySelector ('.js_balance');
let saldo = 100;
const betValue= bet.value;
function win() {
    const betValue= bet.value;
    saldo = saldo+betValue*2;
}
function fail() {
    const betValue= bet.value;
    saldo = saldo-betValue;
}
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function Bet(){
    const selectValue = parseInt(select.value);
    const randomNumber = getRandomNumber(6);
    console.log (randomNumber);
    if (selectValue === randomNumber){
        result.innerHTML = 'Has ganado el doble de lo apostado!';
        win();
        balance.innerHTML= saldo;
        buttom.classList.add('hidden');
        reset.classList.remove('hidden');
    }else{
        result.innerHTML = 'Has perdido lo apostado!';
        fail();
        balance.innerHTML= saldo;
        buttom.classList.add('hidden');
        reset.classList.remove('hidden');
    }
    if (saldo <= 0){
        result.innerHTML = '¡Que pena! Has perdido.';
        buttom.setAttribute("disabled", "disabled");
    }else if (saldo >= 200){
        result.innerHTML = '¡Felicidades! Has ganado!';
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