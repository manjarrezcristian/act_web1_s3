//Ejercicio While 9: Juego de Adivinanza Mejorado

//Crea un juego que use un ciclo while donde el usuario debe adivinar un número
//  entre 1 y 50. Proporciona pistas ("muy alto", "muy bajo", "cerca")
//  y limita a 7 intentos máximo.
// Ejercicio While 9: Juego de Adivinanza Mejorado

const readline = require('readline-sync');

const numeroSecreto = Math.floor(Math.random() * 50) + 1; // Número entre 1 y 50
let intentos = 0;
let maxIntentos = 7;
let adivinanza;

console.log("Adivina el número secreto entre 1 y 50. ¡Tienes 7 intentos!");

while (intentos < maxIntentos) {
    adivinanza = parseInt(readline.question(`Intento ${intentos + 1}: `));
    
    if (adivinanza === numeroSecreto) {
        console.log("🎉 ¡Felicidades! Adivinaste el número secreto.");
        break;
    } else if (Math.abs(adivinanza - numeroSecreto) <= 3) {
        console.log("🔥 ¡Estás muy cerca!");
    } else if (adivinanza < numeroSecreto) {
        console.log("📉 Demasiado bajo.");
    } else {
        console.log("📈 Demasiado alto.");
    }

    intentos++;
}

if (intentos === maxIntentos && adivinanza !== numeroSecreto) {
    console.log(`😞 Se acabaron los intentos. El número era: ${numeroSecreto}`);
}
