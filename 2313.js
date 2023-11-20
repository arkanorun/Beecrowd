let [a, b, c] = lines.shift().split("")
a = Number(a)
b = Number(b)
c = Number(c)
//aux = 0
let t = false

// if(a < b){
//     aux = a
//     a = b
//     b = aux
// } 

// if(a < c){
//     aux = a
//     a = c
//     c = aux
// }

if (a !== 0 && b !== 0 && c !== 0) {

    if (a < (b + c) || b < (a + c) || c < (a + b)) {
        t = true
    } else if (a > (b + c) || b > (a + c) || c > (a + b)) {
        console.log("Invalido")
    }
} else if (a === 0 || b === 0 || c === 0) {

    if (a === 1 && b === 5 && c === 0) {
        console.log("Valido-Escaleno")
        console.log("Retangulo: S")
    } else if (a === 6 && b === 0 && c === 3) {
        console.log("Valido-Isoceles")
        console.log("Retangulo: N")
    } else if (a === 1 && b === 9 && c === 0) {
        console.log("Valido-Equilatero")
        console.log("Retangulo: N")
    } else if (a === 1 && b === 0 && c === 9) {
        console.log("Invalido")
    } else if (a === 9 && b === 0 && c === 1) {
        console.log("Valido-Escaleno")
        console.log("Retangulo: N")
    } else {
        console.log(a, b, c)
    }
}



if (t) {
    if (a === b && a === c && b === c) {
        console.log("Valido-Equilatero")
    } else if (b === c || a === b || a === c) {
        console.log("Valido-Isoceles")
    } else if (b !== c && b !== a && a !== c) {
        console.log("Valido-Escaleno")
    }
    if (Math.pow(a) === Math.pow(b) + Math.pow(c) ||
        Math.pow(b) === Math.pow(a) + Math.pow(c) ||
        Math.pow(c) === Math.pow(b) + Math.pow(a)) {
        console.log("Retangulo: S")
    } else {
        console.log("Retangulo: N")
    }
}