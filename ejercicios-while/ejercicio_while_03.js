//Ejercicio While 3: Validador de Contraseña

//Implementa un sistema que use un ciclo while para solicitar una 
//contraseña al usuario hasta que ingrese "admin123". 
//Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.

// Ejercicio While 3: Validador de Contraseña

let intento = "";
let intentos_fallidos = 0;
const clave_correcta = "admin123";

while (intento !== clave_correcta) {
  intento = prompt("ingresa la contraseña:");

  if (intento !== clave_correcta) {
    alert("contraseña errada.");
    intentos_fallidos++;
  }
}

alert("Bienvenido");
alert("intentos fallidos: " + intentos_fallidos);

