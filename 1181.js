let linha = Number(lines.shift())

let operacao = (lines.shift()).toString()
let cont = 0
let media = 0
let soma = 0

for (let i = 1; i < 145; i++) {
    let a = parseFloat(lines.shift())
    if (i > ((linha) * 12) && i <= (linha + 1) * 12) {
        if (operacao === "S") {
            soma += a
        } else if (operacao === "M") {
            media += a
            cont++
        }

    }
}
if (operacao === "S") {
    console.log(soma.toFixed(1))
} else if (operacao === "M") {
    console.log((media / cont).toFixed(1))
}
