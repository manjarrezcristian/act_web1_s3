//Implementa un programa que use un ciclo for para verificar
//  si una palabra o frase es un palíndromo 
// (se lee igual de izquierda a derecha quede derecha a izquierda)
// . Ignora espacios y mayúsculas.


let frase = "Anita lava la tina";

// pasar a minuscula sin espacio
frase = frase.toLowerCase().replace(/ /g, "");

// asumir que es palindromo
let esPalindromo = true;

// pasar a la mitad de la frase
for (let i = 0; i < frase.length / 2; i++) {
  if (frase[i] !== frase[frase.length - 1 - i]) {
    esPalindromo = false;
    break; 
  }
}

if (esPalindromo) {
  console.log("Es un palíndromo");
} else {
  console.log("No es un palíndromo");
}
