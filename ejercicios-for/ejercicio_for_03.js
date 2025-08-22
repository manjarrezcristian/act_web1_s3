//Dado un array de 20 números aleatorios, usa un ciclo for
//  para encontrar el número mayor, el menor, la suma total,
//  el promedio, y cuántos números son pares e impares.

// aqui creamos un arreglo con 20 números aleatorios entre 1 y 100
let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("numeros disponibles", numeros);

//  estas son las variables
let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;

// miramos el arreglo
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

// sacamos el promedio
let promedio = suma / numeros.length;

// aqui el resultado
console.log("numero mayor:", mayor);
console.log("numero menor:", menor);
console.log("suma total:", suma);
console.log("promedio:", promedio);
console.log("cantidad pares:", pares);
console.log("cantidad impares:", impares);
