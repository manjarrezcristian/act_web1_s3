//Utiliza un ciclo for para generar la siguiente secuencia: 
// 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Debe mostrar cada término y 
// la suma total de la secuencia.


let numero = 2;
let suma = 0;

for (let i = 0; i < 10; i++) {
  console.log(numero);   // Muestra el número actual
  suma += numero;        // Suma el número a la suma total
  numero *= 2;           // Multiplica el número por 2
}

console.log("Suma total: " + suma);
