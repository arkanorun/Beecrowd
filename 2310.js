let a = Number(lines.shift())
let ps1 = 0
let ps2 = 0
let pb1 = 0
let pb2 = 0
let pa1 = 0
let pa2 = 0


for (let i = 0; i < a; i++) {
    let n = lines.shift().split(" ")
    let [s1, b1, a1] = lines.shift().split(" ")
    let [s2, b2, a2] = lines.shift().split(" ")

    ps1 += Number(s1)
    ps2 += Number(s2)
    pb1 += Number(b1)
    pb2 += Number(b2)
    pa1 += Number(a1)
    pa2 += Number(a2)

}

let vs = parseFloat((ps2 / ps1) * 100)
let vb = parseFloat((pb2 / pb1) * 100)
let va = parseFloat((pa2 / pa1) * 100)

console.log(`Pontos de Saque: ${vs.toFixed(2)} %.`)
console.log(`Pontos de Bloqueio: ${vb.toFixed(2)} %.`)
console.log(`Pontos de Ataque: ${va.toFixed(2)} %.`)