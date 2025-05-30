var numeros = [3, 7, 2, 9, 6, 4, 1, 8, 5]
numeros.sort()
let pares = []
let impares = []

for (let i = 0; i <numeros.length; i++) {
    if (numeros[i] % 2 === 0){
        pares.push(numeros[i])    
    } else {
        impares.push(numeros[i])
    }
}

console.log (`Números pares: ${pares}`)
console.log (`Números ímpares: ${impares}`)
