lines = lines.shift().split(" ")
let a = Number(lines[0])
let b = Number(lines[1])
let tempo
if (a > b) {
    tempo = 24 - a + b
    console.log(`O JOGO DUROU ${tempo} HORA(S)`)
}
if (a < b) {
    let tempo = Math.abs(a - b)
    console.log(`O JOGO DUROU ${tempo} HORA(S)`)
}
if (a === b) {
    console.log(`O JOGO DUROU ${24} HORA(S)`)
}