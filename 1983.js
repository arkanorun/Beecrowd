let a = Number(lines.shift())
let b = []
let c = []
let d
let e = 0
for (let i = 0; i < a; i++) {
    let valor = (lines.shift().split(" "))
    b.push(valor[0])
    c.push(valor[1])

    if (e < c[i]) {
        e = parseFloat(c[i])
        d = b[i]
    }
}

if (e < 8) {
    console.log("Minimum note not reached")
} else {
    console.log(d)
}