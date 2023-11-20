while (lines[0]) {
    let valor = 0
    let n = Number(lines.shift())


    for (let i = 0; i < n; i++) {
        let a = Number(lines.shift())
        if (a % 2 === 0) {
            valor = 2 * a - 2
        } else {
            valor = 2 * a - 1
        }
        console.log(valor)
    }

}