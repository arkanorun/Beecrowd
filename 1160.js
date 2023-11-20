let T = Number(lines.shift())

while (T) {
    line1 = lines.shift().split(" ")
    let a = Number(line1[0])
    let b = Number(line1[1])
    let ca = parseFloat(line1[2])
    let cb = parseFloat(line1[3])

    for (i = 1; a <= b; i++) {
        a += Math.floor(a * ca / 100)
        b += Math.floor(b * cb / 100)

        if (i > 100) {
            console.log("Mais de 1 seculo.")
            break;
        } else if (a > b) {
            console.log(`${i} anos.`)
        }
    }
    T--
}