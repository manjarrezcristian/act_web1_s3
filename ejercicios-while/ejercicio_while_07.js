//Ejercicio While 7: Contador de Dígitos

//Implementa un programa que use un ciclo while para contar cuántos dígitos
//  tiene un número entero positivo. Por ejemplo, 12345 tiene 5 dígitos.
// Ejercicio While 7: Contador de Dígitos

function contar_digitos(numero) {
    if (numero <= 0 || !Number.isInteger(numero)) {
        console.log("ingrese un numero entero positivo.");
        return;
    }

    let contador = 0;

    while (numero > 0) {
        numero = Math.floor(numero / 10); // aqui borramos el ultimo digito
        contador++;
    }

    console.log(`el numero tiene ${contador} digito(s).`);
}


contar_digitos(12345);  
