/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const input = prompt("Pari o dispari ? ");
const number = parseInt(prompt("Inserisci un numero da 1 a 5"));
const randomNumber = myRandom(1, 5);
const sum = number + randomNumber;

if(input === oddEven(sum))
  console.log("Hai vinto !");

else 
  console.log("Hai perso :(");

  
function oddEven(num){
  if(!(num % 2))
    return "pari";
  
  return "dispari";
}

function myRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}