let a = Number(lines[0])

let ano = Math.floor(a / 365)
a = a % 365
let mes = Math.floor(a / 30)
a = Math.floor(a % 30)

console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${a} dia(s)`)