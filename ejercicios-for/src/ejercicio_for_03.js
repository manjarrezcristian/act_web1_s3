//Dado un array de 20 números aleatorios, usa un ciclo for para encontrar:
//  el número mayor, el menor, la suma total, el promedio, y cuántos números son pares
//  e impares.

// Creamos un arreglo con 20 números aleatorios entre 1 y 100
let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Números generados:", numeros);

// Inicializamos variables
let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;

// Recorremos el arreglo
for (let i = 0; i < numeros.length; i++) {
  let num = numeros[i];
  suma += num;

  if (num > mayor) mayor = num;
  if (num < menor) menor = num;

  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

// Calculamos promedio
let promedio = suma / numeros.length;

// Mostramos resultados
console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio);
console.log("Cantidad de números pares:", pares);
console.log("Cantidad de números impares:", impares);
