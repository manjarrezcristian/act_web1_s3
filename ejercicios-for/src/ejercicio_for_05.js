//Crea un programa que use un ciclo for para invertir una cadena de texto
//  carácter por carácter. Muestra tanto la cadena original como la invertida.
let cadenaOriginal = "Hola mundo";
let cadenaInvertida = "";

for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaOriginal[i];
}

console.log("Cadena original: ", cadenaOriginal);
console.log("Cadena invertida:", cadenaInvertida);
