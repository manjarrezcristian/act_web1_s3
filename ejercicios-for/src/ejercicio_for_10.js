//Implementa un programa que use un ciclo for para verificar si una palabra
//  o frase es un palíndromo (se lee igual de izquierda a derecha que
//  de derecha a izquierda). Ignora espacios y mayúsculas.


let frase = "Anita lava la tina";

// Convertimos todo a minúsculas y quitamos espacios
frase = frase.toLowerCase().replace(/ /g, "");

// Suponemos que sí es palíndromo
let esPalindromo = true;

// Recorremos la mitad de la frase
for (let i = 0; i < frase.length / 2; i++) {
  if (frase[i] !== frase[frase.length - 1 - i]) {
    esPalindromo = false;
    break; // No hace falta seguir si ya sabemos que no lo es
  }
}

if (esPalindromo) {
  console.log("Es un palíndromo");
} else {
  console.log("No es un palíndromo");
}
