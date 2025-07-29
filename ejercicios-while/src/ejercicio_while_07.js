//Ejercicio While 7: Contador de Dígitos

//Implementa un programa que use un ciclo while para contar cuántos dígitos
//  tiene un número entero positivo. Por ejemplo, 12345 tiene 5 dígitos.
// Ejercicio While 7: Contador de Dígitos

function contarDigitos(numero) {
    if (numero <= 0 || !Number.isInteger(numero)) {
        console.log("Por favor ingresa un número entero positivo.");
        return;
    }

    let contador = 0;

    while (numero > 0) {
        numero = Math.floor(numero / 10); // Elimina el último dígito
        contador++;
    }

    console.log(`El número tiene ${contador} dígito(s).`);
}

// Prueba con diferentes valores
contarDigitos(12345);  // Resultado esperado: 5
