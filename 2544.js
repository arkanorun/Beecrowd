while (lines[0]) {
    let a = Number(lines.shift())
    let count = 0
    while (a > 1) {
        a = a / 2
        count++
    }
    console.log(count)
}