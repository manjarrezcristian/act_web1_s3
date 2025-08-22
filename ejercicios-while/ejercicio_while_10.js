//Ejercicio While 10: Procesador de Calificaciones

//Desarrolla un programa que use un ciclo while para procesar 
// calificaciones de estudiantes. Debe continuar pidiendo calificaciones
//  hasta que se ingrese -1, luego calcular y mostrar el promedio,
// la calificación más alta y más baja.
// Ejercicio While 10: Procesador de Calificaciones

const readline = require('readline-sync');

let calificacion;
let suma = 0;
let cantidad = 0;
let max = -Infinity;
let min = Infinity;

console.log("Ingresa las calificaciones de los estudiantes (entre 0 y 100). Ingresa -1 para terminar.");

while (true) {
    calificacion = parseFloat(readline.question("Calificación: "));

    if (calificacion === -1) {
        break;
    }

    if (calificacion < 0 || calificacion > 100) {
        console.log("⚠️ Ingresa una calificación válida entre 0 y 100.");
        continue;
    }

    suma += calificacion;
    cantidad++;

    if (calificacion > max) {
        max = calificacion;
    }

    if (calificacion < min) {
        min = calificacion;
    }
}

if (cantidad === 0) {
    console.log("No se ingresaron calificaciones.");
} else {
    let promedio = suma / cantidad;
    console.log("\n📊 Resultados:");
    console.log("Promedio:", promedio.toFixed(2));
    console.log("Calificación más alta:", max);
    console.log("Calificación más baja:", min);
}
