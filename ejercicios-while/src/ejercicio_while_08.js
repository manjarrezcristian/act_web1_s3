//Ejercicio While 8: Secuencia de Fibonacci

//Utiliza un ciclo while para generar los primeros 15 números 
// de la secuencia de Fibonacci. Muestra cada número de la secuencia.
// Ejercicio While 8: Secuencia de Fibonacci

let n1 = 0;
let n2 = 1;
let contador = 0;

console.log("Los primeros 15 números de la secuencia de Fibonacci son:");

while (contador < 15) {
    console.log(n1);

    let siguiente = n1 + n2;
    n1 = n2;
    n2 = siguiente;

    contador++;
}
