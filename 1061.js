line1 = lines.shift().split(" ")
line2 = lines.shift().split(":")
line3 = lines.shift().split(" ")
line4 = lines.shift().split(":")

let dia1 = new Date(2023, 08, line1[1], line2[0], line2[1], line2[2])
let dia2 = new Date(2023, 08, line3[1], line4[0], line4[1], line4[2])

let tempo = +dia2 - +dia1
let dia = parseInt(tempo / (3600000 * 24))
let hora = parseInt((tempo % (3600000 * 24)) / 3600000)
let min = parseInt((((tempo % (3600000 * 24)) % 3600000)) / 60000)
let seg = parseInt(((((tempo % (3600000 * 24)) % 3600000)) % 60000) / 1000)

console.log(`${dia} dia(s)`)
console.log(`${hora} hora(s)`)
console.log(`${min} minuto(s)`)
console.log(`${seg} segundo(s)`)