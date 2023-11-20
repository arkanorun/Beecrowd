while (lines[0]) {
    let [n, q] = lines.shift().split(" ")
    n = Number(n)
    q = Number(q)
    let nota = []

    for (let i = 0; i < n; i++) {
        nota.push(Number(lines.shift()))
    }

    nota = nota.sort((a, b) => {
        return b - a
    })

    for (let i = 0; i < q; i++) {
        let b = Number(lines.shift() - 1)
        console.log(nota[b])
    }

}