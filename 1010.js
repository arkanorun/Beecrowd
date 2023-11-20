let total1 = lines.shift().split(" ")
let total2 = lines.shift().split(" ")

let p1 = parseFloat(total1[0])
let u1 = parseFloat(total1[1])
let preco1 = parseFloat(total1[2])

let p2 = parseFloat(total2[0])
let u2 = parseFloat(total2[1])
let preco2 = parseFloat(total2[2])

let valor = u1 * preco1 + u2 * preco2

console.log("VALOR A PAGAR: R$", valor.toFixed(2))