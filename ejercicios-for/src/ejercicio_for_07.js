//Usa ciclos for anidados para crear una matriz 5x5 donde
//  cada elemento sea la suma de sus índices 
// (fila + columna). Muestra la matriz formateada.

const filas = 5;
const columnas = 5;
let matriz = [];

for (let i = 0; i < filas; i++) {
    matriz[i] = [];  // empieza la fila

    for (let j = 0; j < columnas; j++) {
        matriz[i][j] = i + j;
    }
}

// muestra la matriz depurada
console.log("Matriz 5x5 (suma de indice):");
for (let i = 0; i < filas; i++) {
    let fila_formateada = "";
    for (let j = 0; j < columnas; j++) {
        fila_formateada += matriz[i][j].toString().padStart(3, ' ') + " ";
    }
    console.log(fila_formateada);
}
