let a = Number(lines.shift())

let matriz = []
let matriz1 = []
let seguro = ""

for (let linhas = 0; linhas <= a; linhas++) {
    let vetor = []
    let b = lines.shift().split(" ")
    for (let colunas = 0; colunas <= a; colunas++) {
        vetor.push(Number(b[colunas]))
    }
    matriz1.push(vetor)
}

for (let linha = 0; linha < a; linha++) {
    for (let coluna = 0; coluna < a; coluna++) {
        matriz = []
        matriz = [matriz1[linha][coluna], matriz1[linha][coluna + 1],
        matriz1[linha + 1][coluna], matriz1[linha + 1][coluna + 1]]

        if ((matriz[0] === 1 && matriz[1] === 1) ||
            (matriz[0] === 1 && matriz[2] === 1) ||
            (matriz[0] === 1 && matriz[3] === 1) ||
            (matriz[1] === 1 && matriz[2] === 1) ||
            (matriz[1] === 1 && matriz[3] === 1) ||
            (matriz[2] === 1 && matriz[3] === 1)) {

            seguro += "S"
        } else {
            seguro += "U"
        }
    }
    console.log(seguro)
    seguro = ""
}