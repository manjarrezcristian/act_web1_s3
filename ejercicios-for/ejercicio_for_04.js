//Utiliza ciclos for anidados para encontrar y mostrar
//  todos los números primos entre 1 y 100. 
// Debe indicar cuántos números primos se encontraron.
let contador_primos = 0;

for (let num = 2; num <= 100; num++) {
    let esPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(num);
        contador_primos++;
    }
}

console.log("Total primos entre 1 y 100:", contador_primos);
