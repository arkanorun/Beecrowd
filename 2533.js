while (lines[0]) {

    let m = Number(lines.shift())
    let num = 0
    let den = 0
    let soma = 0

    let matriz = []
    for (let i = 0; i < m; i++) {
        let a = 0
        a = lines.shift().split(" ")
        num += (a[0] * a[1])
        den += (Number(a[1]))
    }

    soma = parseFloat(num / (den * 100))

    console.log(soma.toFixed(4))
}