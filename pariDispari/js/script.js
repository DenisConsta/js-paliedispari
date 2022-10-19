/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const number = document.querySelector('#number');
const evenOdd = document.querySelector('#evenodd');
const output = document.createElement('output');
container.append(output);

//? Listener
btn.addEventListener('click', function(){

  const randomN = myRandom(1, 5);
  const sum = parseInt(number.value) + randomN;
  output.innerText = `
    TU : ${number.value}
    PC : ${randomN}
    SUM : ${sum}
  `;

  if(evenOdd.value === oddEven(sum))
    document.querySelector('h1').innerText = "Hai Vinto !";

  else 
    document.querySelector('h1').innerText = "Hai Perso :(";

});

//? Funzione pari e dispari
function oddEven(num){
  if(!(num % 2))
    return "pari";
  
  return "dispari";
}

//? Funzione random
function myRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}