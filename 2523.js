while (lines[0]) {
    let a = (lines.shift()).toString()
    let n = Number(lines.shift())
    let b = lines.shift().split(' ')
    let texto = ""
    for (let i = 0; i < n; i++) {
        b[i] = Number(b[i])

        texto += a[[b[i] - 1]]
    }

    console.log(texto)
}