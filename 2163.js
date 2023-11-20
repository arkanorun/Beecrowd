let [l, c] = lines.shift().split(" ")
l = Number(l)
c = Number(c)
let matriz = []
let count = 0
let oba = 0
for (let i = 0; i < l; i++) {
    let vetor = []
    let a = lines.shift().split(" ")
    for (let j = 0; j < c; j++) {
        vetor.push(Number(a[j]))
    }

    matriz.push(vetor)
}

for (let linhas = 1; linhas < l - 1; linhas++) {
    for (let colunas = 1; colunas < c - 1; colunas++) {

        if (matriz[linhas][colunas] === 42) {
            if (matriz[linhas + 1][colunas] === 7
                && matriz[linhas - 1][colunas] === 7
                && matriz[linhas][colunas + 1] === 7
                && matriz[linhas][colunas - 1] === 7
                && matriz[linhas + 1][colunas + 1] === 7
                && matriz[linhas - 1][colunas - 1] === 7
                && matriz[linhas - 1][colunas + 1] === 7
                && matriz[linhas + 1][colunas - 1] === 7) {
                oba++
                console.log(`${linhas + 1} ${colunas + 1}`)
                break;
            }
        }
        count++
    }
    if (oba > 0) {
        break;
    }
}
if (count === (l - 2) * (c - 2)) {
    console.log("0 0")
}