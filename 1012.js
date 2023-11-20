lines = lines.shift().split(" ")
let A = parseFloat(lines[0])
let B = parseFloat(lines[1])
let C = parseFloat(lines[2])

let T = A * C / 2
let CI = Math.pow(C, 2) * 3.14159
let Tr = (A + B) * C / 2
let Q = Math.pow(B, 2)
let R = A * B

console.log('TRIANGULO: ' + T.toFixed(3))
console.log('CIRCULO: ' + CI.toFixed(3))
console.log('TRAPEZIO: ' + Tr.toFixed(3))
console.log('QUADRADO: ' + Q.toFixed(3))
console.log('RETANGULO: ' + R.toFixed(3))