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

    for (let camada = 1; camada <= camadas; camada++) {
        for (let linha = camada; linha < matriz.length - camada; linha++) {
            for (let coluna = camada; coluna < matriz.length - camada; coluna++) {
                matriz[linha][coluna] += 1
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