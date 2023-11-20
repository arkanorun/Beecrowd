let a = Number(lines[0])

let hora = Math.floor(a / 3600)
a = a % 3600
let minuto = Math.floor(a / 60)
a = Math.floor(a % 60)

console.log(`${hora}:${minuto}:${a}`)