let n = Number(lines.shift())
cont = 0
while (n) {
    let a = Number(lines.shift())

    for (i = 1; i <= a; i++) {
        if (a % i === 0) {
            cont += 1
        }
    }
    if (cont === 2) {
        console.log(`${a} eh primo`)
    } else {
        console.log(`${a} nao eh primo`)
    }
    n--
    cont = 0
}