//Ejercicio While 3: Validador de Contraseña

//Implementa un sistema que use un ciclo while para solicitar una 
//contraseña al usuario hasta que ingrese "admin123". 
//Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.

// Ejercicio While 3: Validador de Contraseña

let intento = "";
let intentosFallidos = 0;
const claveCorrecta = "admin123";

while (intento !== claveCorrecta) {
  intento = prompt("Ingresa la contraseña:");

  if (intento !== claveCorrecta) {
    alert("Contraseña incorrecta.");
    intentosFallidos++;
  }
}

alert("¡Acceso concedido!");
alert("Intentos fallidos: " + intentosFallidos);

