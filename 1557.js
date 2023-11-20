let valor = Number(lines.shift())

while (valor) {

    let matriz = []

    for (let linha = 0; linha < valor; linha++) {
        let vetor = []
        for (let coluna = 0; coluna < valor; coluna++) {
            c = 0
            vetor[coluna] = 1
        }
        matriz.push(vetor)
    }

    let camadas = Math.ceil((valor / 2))

    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz.length; coluna++) {
            if (linha === 0) {
                if (coluna > 0) {
                    matriz[linha][coluna] = matriz[linha][coluna - 1] * 2
                }
            } else {
                matriz[linha][coluna] = matriz[linha - 1][coluna] * 2
            }
        }
    }

    for (let i = 0; i < valor; i++) {
        let matrizSemBarra = ""
        let T = matriz[matriz.length - 1][matriz.length - 1].toString()
        for (let j = 0; j < valor; j++) {
            matrizSemBarra += (matriz[i][j]).toString().padStart(T.length)
            if (j < (valor - 1)) {
                matrizSemBarra += " "
            }
        }
        console.log(matrizSemBarra)
    }
    console.log("")
    valor = Number(lines.shift())
}