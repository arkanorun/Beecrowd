while (lines[0]) {
    let [l, c] = lines.shift().split(" ")
    l = Number(l)
    c = Number(c)

    let matriz = []
    let a

    for (let i = 0; i < l; i++) {
        let vetor = ""
        vetor = ("0 " + lines.shift() + " 0").split(" ")
        matriz.push(vetor)
    }
    let array = []

    for (let i = 0; i < c + 2; i++) {
        array.push('0')
    }
    matriz.push(array)
    matriz.unshift(array)
    for (let i = 1; i <= l; i++) {
        a = ""
        let count
        for (let j = 1; j <= c; j++) {

            if (Number(matriz[i][j]) === 1) {
                a += 9
            } else {
                count = 0
                if (Number(matriz[i][j - 1]) === 1) {
                    count++
                }
                if (Number(matriz[i][j + 1]) === 1) {
                    count++
                }
                if (Number(matriz[i - 1][j]) === 1) {
                    count++
                }
                if (Number(matriz[i + 1][j]) === 1) {
                    count++
                }
                a += count
            }

        }
        console.log(a)
    }

}