let a = Number(lines.shift())
for (let i = 0; i < a; i++) {
    let b = Number(lines.shift())
    let [a1, d1, n1] = lines.shift().split(" ")
    let [a2, d2, n2] = lines.shift().split(" ")

    let vg1 = 0
    let vg2 = 0

    a1 = Number(a1)
    d1 = Number(d1)
    n1 = Number(n1)
    a2 = Number(a2)
    d2 = Number(d2)
    n2 = Number(n2)

    if (n1 % 2 !== 0) {
        vg1 = ((a1 + d1) / 2)
    } else {
        vg1 = ((a1 + d1) / 2) + b
    }

    if (n2 % 2 !== 0) {
        vg2 = ((a2 + d2) / 2)
    } else {
        vg2 = ((a2 + d2) / 2) + b
    }
    if (vg1 > vg2) {
        console.log("Dabriel")
    } else if (vg1 < vg2) {
        console.log("Guarte")
    } else {
        console.log("Empate")
    }
}