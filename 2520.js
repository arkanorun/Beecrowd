while (lines[0]) {
    let [a, b] = lines.shift().split(" ")
    a = Number(a)
    b = Number(b)
    let matriz = []
    let tr = []
    let p = []

    for (let i = 0; i < a; i++) {
        let vetor = 0
        vetor = lines.shift().split(" ")
        for (let j = 0; j < vetor.length; j++) {

            if (vetor[j] == 1) {
                tr = [i, j]
            } else if (vetor[j] == 2) {
                p = [i, j]
            }
        }
        matriz.push(vetor)
    }
    console.log(Math.abs(tr[0] - p[0]) + Math.abs(tr[1] - p[1]))
}