//Ejercicio While 4: Generador de Números Aleatorios

//Crea un programa que use un ciclo while para generar números aleatorios
//  entre 1 y 100 hasta que salga un número mayor a 95. 
// Muestra cada número generado y al final indica cuántos números se generaron.

// Ejercicio While 4: Generador de Números Aleatorios

let numero = 0;
let contador = 0;

while (numero <= 95) {
    numero = Math.floor(Math.random() * 100) + 1; // Genera número entre 1 y 100
    console.log("Número generado:", numero);
    contador++;
}

console.log("¡Se generó un número mayor a 95!");
console.log("Cantidad total de números generados:", contador);
