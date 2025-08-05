//Ejercicio While 2: Suma de Números Pares Utiliza un ciclo while
//  para calcular la suma de todos los números pares entre 1 y 50.
//  Muestra el resultado final y cuántos números pares se sumaron.

let numero = 1;
let suma = 0;
let cantidad_pares = 0;

while (numero <= 50) {
    if (numero % 2 === 0) {
        suma += numero;
        cantidad_pares++;
    }
    numero++;
}

console.log("la suma de los pares es", suma);
console.log("cantidad de pares sumados", cantidad_ares);