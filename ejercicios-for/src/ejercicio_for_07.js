//Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento 
// sea la suma de sus índices (fila + columna). Muestra la matriz formateada.

const filas = 5;
const columnas = 5;
let matriz = [];

for (let i = 0; i < filas; i++) {
    matriz[i] = [];  // Inicializa la fila

    for (let j = 0; j < columnas; j++) {
        matriz[i][j] = i + j;
    }
}

// Mostrar la matriz formateada
console.log("Matriz 5x5 (suma de índices):");
for (let i = 0; i < filas; i++) {
    let filaFormateada = "";
    for (let j = 0; j < columnas; j++) {
        filaFormateada += matriz[i][j].toString().padStart(3, ' ') + " ";
    }
    console.log(filaFormateada);
}
