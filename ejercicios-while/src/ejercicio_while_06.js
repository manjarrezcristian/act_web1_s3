//Ejercicio While 6: Búsqueda en Array

//Dado un array de nombres, usa un ciclo while para buscar un nombre específico.
//  El programa debe mostrar en qué posición se encontró el nombre 
// o indicar si no existe.
// Ejercicio While 6: Búsqueda en Array

let nombres = ["Ana", "Luis", "Carlos", "María", "Elena", "Pedro"];
let nombreBuscado = "María"; // Puedes cambiar este valor para probar otros casos

let index = 0;
let encontrado = false;

while (index < nombres.length) {
    if (nombres[index] === nombreBuscado) {
        encontrado = true;
        break; // Sale del ciclo si encuentra el nombre
    }
    index++;
}

if (encontrado) {
    console.log(`El nombre "${nombreBuscado}" fue encontrado en la posición ${index}.`);
} else {
    console.log(`El nombre "${nombreBuscado}" no se encuentra en el array.`);
}
