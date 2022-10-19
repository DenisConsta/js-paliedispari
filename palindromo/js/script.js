/*
  Chiedere all’utente di inserire una parola
  Creare una funzione per capire se la parola inserita è palindroma
*/

let input = prompt("Inserisci una parola");
console.log(palindromo(input));

function palindromo(word){
  let out = "";

  for(let i=(word.length-1); i >= 0; i--)
    out += word[i];
  
  if(word === out)
    return true;

  return false;
}

