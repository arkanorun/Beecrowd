while (lines[0]) {
    let [n, d] = lines.shift().split(" ")
    n = Number(n)
    d = Number(d)
    let matriz1 = []
    let matriz2 = []
    let count = 0

    for (let i = 0; i < d; i++) {
        let a = 0
        let b = 0
        a = (lines.shift().toString().replace('/', " ")).replace('/', " ").split(" ")
        b = [Number(a.shift()), Number(a.shift()), Number(a.shift())]
        matriz1.push(b)
        matriz2.push(a)

    }

    for (let i = 0; i < d; i++) {
        count = 0
        for (let j = 0; j < n; j++) {

            if (Number(matriz2[i][j]) === 1) {
                count++
            }
        }
        if (count === n) {
            console.log(matriz1[i].join('/'))
            break;
        }

        if (count === n) {
            break;
        }
    }
    if (count !== n) {
        console.log("Pizza antes de FdI")
    }
}