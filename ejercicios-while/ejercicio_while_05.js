//Ejercicio While 5: Calculadora de Factorial

//Desarrolla una función que use un ciclo while para calcular
//  el factorial de un número dado. Debe mostrar paso a paso 
// cómo se va calculando el factorial.

// Ejercicio While 5: Calculadora de Factorial

function calcularFactorial(numero) {
    let factorial = 1;
    let contador = 1;

    console.log(`calculando el factorial de ${numero}:`);

    while (contador <= numero) {
        factorial *= contador;
        console.log(`${contador}! = ${factorial}`);
        contador++;
    }

    console.log(`El factorial de ${numero} es: ${factorial}`);
}


calcularFactorial(5);
