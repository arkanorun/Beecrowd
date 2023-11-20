let C = parseFloat(lines.shift())
let T = (lines.shift()).toString()
let L = 0
let valor
let soma = 0
let cont = 0
let media

for (let i = 0; i < 143; i++) {
    valor = parseFloat(lines[i].split(" "))

    if (i === (C + (L * 12))) {
        L++
        if (T === "S") {
            soma += valor
        } else if (T === "M") {
            soma += valor
            cont += 1
        }
    }
}
if (T === "S") {
    console.log(soma.toFixed(1))
} else if (T === "M") {
    media = soma / cont
    console.log(media.toFixed(1))
}