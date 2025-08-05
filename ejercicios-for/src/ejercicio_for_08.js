//Desarrolla un programa que use un ciclo for para contar 
// cuántas vocales (a, e, i, o, u) hay en una frase dada.
//  Debe mostrar el conteo de cada vocal por separado.

let frase = "hola mundo";
let a = 0, e = 0, i = 0, o = 0, u = 0;

for (let j = 0; j < frase.length; j++) {
  let letra = frase[j];

  if (letra === 'a') a++;
  else if (letra === 'e') e++;
  else if (letra === 'i') i++;
  else if (letra === 'o') o++;
  else if (letra === 'u') u++;
}

console.log("a: " + a);
console.log("e: " + e);
console.log("i: " + i);
console.log("o: " + o);
console.log("u: " + u);
