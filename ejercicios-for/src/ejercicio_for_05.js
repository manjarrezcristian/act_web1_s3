//Crea un programa que use un ciclo for para invertir una cadena 
// de texto carácter por carácter. Muestra tanto la cadena
//  original como la invertida.
let cadena_original = "Hola mundo";
let cadena_invertida = "";

for (let i = cadena_original.length - 1; i >= 0; i--) {
    cadena_invertida += cadena_original[i];
}

console.log("Cadena original: ", cadena_original);
console.log("Cadena invertida:", cadena_invertida);
