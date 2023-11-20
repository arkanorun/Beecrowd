let a = parseFloat(lines[0])

let nota100 = Math.floor(a / 100)
a = a % 100
let nota50 = Math.floor(a / 50)
a = a % 50
let nota20 = Math.floor(a / 20)
a = a % 20
let nota10 = Math.floor(a / 10)
a = a % 10
let nota5 = Math.floor(a / 5)
a = a % 5
let nota2 = Math.floor(a / 2)
a = a % 2
let moeda100 = Math.floor(a)
a = (a % 1) * 100
let moeda50 = Math.floor(a / 50)
a = a % 50
let moeda25 = Math.floor(a / 25)
a = a % 25
let moeda10 = Math.floor(a / 10)
a = a % 10
let moeda5 = Math.floor(a / 5)
a = a % 5
let moeda1 = Math.floor(a)


console.log("NOTAS:")
console.log(`${nota100} nota(s) de R$ 100.00`)
console.log(`${nota50} nota(s) de R$ 50.00`)
console.log(`${nota20} nota(s) de R$ 20.00`)
console.log(`${nota10} nota(s) de R$ 10.00`)
console.log(`${nota5} nota(s) de R$ 5.00`)
console.log(`${nota2} nota(s) de R$ 2.00`)
console.log("MOEDAS:")
console.log(`${moeda100} moeda(s) de R$ 1.00`)
console.log(`${moeda50} moeda(s) de R$ 0.50`)
console.log(`${moeda25} moeda(s) de R$ 0.25`)
console.log(`${moeda10} moeda(s) de R$ 0.10`)
console.log(`${moeda5} moeda(s) de R$ 0.05`)
console.log(`${moeda1} moeda(s) de R$ 0.01`)