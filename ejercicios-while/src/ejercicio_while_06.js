//Ejercicio While 6: Búsqueda en Array

//Dado un array de nombres, usa un ciclo while para buscar un nombre específico.
//  El programa debe mostrar en qué posición se encontró el nombre 
// o indicar si no existe.
// Ejercicio While 6: Búsqueda en Array

let nombres = ["ana", "luis", "Carlos", "maria", "elena", "pedro"];
let nombre_buscado = "maria"; // Puedes cambiar este valor para probar otros casos

let index = 0;
let encontrado = false;

while (index < nombres.length) {
    if (nombres[index] === nombre_buscado) {
        encontrado = true;
        break; // termina el bucle si lo encuentra 
    }
    index++;
}

if (encontrado) {
    console.log(`El nombre "${nombre_buscado}" fue encontrado en la posición ${index}.`);
} else {
    console.log(`El nombre "${nombre_buscado}" no se encuentra en el array.`);
}
