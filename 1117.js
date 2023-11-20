let b = 1
let c = 0
let d = 0
while (b) {
    let a = parseFloat(lines.shift())

    if (a < 0 || a > 10) {
        console.log("nota invalida")
    } else if (a >= 0 && a <= 10) {
        c += a
        d += 1
    }

    if (d >= 2) {
        console.log("media =", c / 2)
        break;
    }
}