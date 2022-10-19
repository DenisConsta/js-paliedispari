/*
  Chiedere all’utente di inserire una parola
  Creare una funzione per capire se la parola inserita è palindroma
*/

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const output = document.createElement('output');
container.append(output);
reset();

//? Listener
btn.addEventListener('click', function(){
  let input = document.querySelector('input').value;
  if(input === "")
    output.innerText = "Campo vuoto !"
  else{
    output.innerText = palindromo(input);
    reset();
  }
})

//? Funzione di controllo palindromo 
function palindromo(word){
  let out = "";

  for(let i=(word.length-1); i >= 0; i--)
    out += word[i];
  
  return word === out;
}

//? Reset campo input
function reset(){
  document.querySelector('input').value = "";
}