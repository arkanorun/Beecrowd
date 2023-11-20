let b = Number(lines[0])
let a = b
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

console.log(b.toFixed(0))
console.log(`${nota100} nota(s) de R$ 100,00`)
console.log(`${nota50} nota(s) de R$ 50,00`)
console.log(`${nota20} nota(s) de R$ 20,00`)
console.log(`${nota10} nota(s) de R$ 10,00`)
console.log(`${nota5} nota(s) de R$ 5,00`)
console.log(`${nota2} nota(s) de R$ 2,00`)
console.log(`${a} nota(s) de R$ 1,00`)