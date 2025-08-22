//Utiliza un ciclo for para generar la siguiente secuencia: 
// 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Debe mostrar
//  cada término y la suma total de la secuencia.


let numero = 2;
let suma = 0;

for (let i = 0; i < 10; i++) {
  console.log(numero);   // numero actual
  suma += numero;        // adiciona el numero a la suma
  numero *= 2;           // multiplica por 2
}

console.log("toal de la suma: " + suma);
