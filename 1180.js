let n = lines.shift().split(" ")
n = Number(n)
let lines1 = lines.shift().split(" ")
let maior = Number(lines1[0])
let pos
for (let i = 0; i < n; i++) {
    let a = Number(lines1[i])
    if (maior > a) {
        maior = a
        pos = i
    }
}
console.log(`Menor valor: ${maior}
Posicao: ${pos}`)