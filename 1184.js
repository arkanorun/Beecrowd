let op = (lines.shift()).toString()
let soma = 0
let cont = 0
let matriz = []
for (let i = 0; i <= 11; i++) {
    let linha = []
    for (let j = 0; j <= 11; j++) {
        linha[j] = parseFloat(lines.shift())
    }
    matriz[i] = linha
}

for (let i = 0; i <= 11; i++) {
    for (let j = 0; j <= 11; j++) {
        if (i > j) {
            soma += matriz[i][j]
            cont += 1
        }
    }
}

if (op === "M") {
    console.log((soma / cont).toFixed(1))
} else if (op === "S") {
    console.log((soma).toFixed(1))
}