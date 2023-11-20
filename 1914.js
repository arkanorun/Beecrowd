let N = Number(lines.shift())

for (let i = 0; i < N; i++) {
    let [b, c, d, e] = lines.shift().split(" ")
    let [n1, n2] = lines.shift().split(" ")
    n1 = Number(n1)
    n2 = Number(n2)

    if (c === "PAR") {
        if ((n1 + n2) % 2 === 0) {
            console.log(b)
        } else {
            console.log(d)
        }
    } else if (c === "IMPAR") {
        if ((n1 + n2) % 2 === 0) {
            console.log(d)
        } else {
            console.log(b)
        }
    }
}