//Utiliza ciclos for anidados para encontrar y mostrar todos los números 
// primos entre 1 y 100. Debe indicar cuántos números primos se encontraron.
let contadorPrimos = 0;

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
        contadorPrimos++;
    }
}

console.log("Total de números primos entre 1 y 100:", contadorPrimos);
