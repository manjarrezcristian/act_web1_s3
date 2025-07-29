//Ejercicio While 3: Validador de Contraseña

//Implementa un sistema que use un ciclo while para solicitar una 
//contraseña al usuario hasta que ingrese "admin123". 
//Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.

// Ejercicio While 3: Validador de Contraseña

const readline = require('readline-sync'); // Usamos readline-sync para entrada en consola

const claveCorrecta = "admin123";
let intento = "";
let intentosFallidos = 0;

while (intento !== claveCorrecta) {
    intento = readline.question("Ingresa la contraseña: ");
    if (intento !== claveCorrecta) {
        console.log("Contraseña incorrecta. Intenta de nuevo.");
        intentosFallidos++;
    }
}

console.log("¡Acceso concedido!");
console.log("Intentos fallidos antes del acceso correcto:", intentosFallidos);
