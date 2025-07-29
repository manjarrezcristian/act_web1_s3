//Ejercicio While 2: Suma de Números Pares

//Utiliza un ciclo while para calcular la suma de todos los números pares 
// entre 1 y 50. Muestra el resultado final y cuántos números pares se sumaron.

let numero = 1;
let suma = 0;
let cantidadPares = 0;

while (numero <= 50) {
    if (numero % 2 === 0) {
        suma += numero;
        cantidadPares++;
    }
    numero++;
}

console.log("La suma de los números pares entre 1 y 50 es:", suma);
console.log("Cantidad de números pares sumados:", cantidadPares);