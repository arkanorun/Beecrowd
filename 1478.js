let valor = Number(lines.shift())

while (valor) {

    let matriz = []

    for (let linha = 0; linha < valor; linha++) {
        let vetor = []
        for (let coluna = 0; coluna < valor; coluna++) {
            vetor[coluna] = 1

        }
        matriz.push(vetor)
    }

    let camadas = Math.ceil((valor / 2))

    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz.length; coluna++) {
            if (coluna > linha) {

                matriz[linha][coluna] = matriz[linha][coluna - 1] + 1

            } else if (linha > coluna) {
                matriz[linha][coluna] = matriz[linha - 1][coluna] + 1
            }
        }
    }

    for (let i = 0; i < valor; i++) {
        let matrizSemBarra = ""
        for (let j = 0; j < valor; j++) {
            matrizSemBarra += (matriz[i][j]).toString().padStart(3)
            if (j < (valor - 1)) {
                matrizSemBarra += " "
            }
        }
        console.log(matrizSemBarra)
    }
    console.log("")
    valor = Number(lines.shift())
}