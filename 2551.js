while (lines[0]) {

    let n = Number(lines.shift())
    let v = 0
    for (let i = 0; i < n; i++) {
        let [t, d] = lines.shift().split(" ")
        t = Number(t)
        d = Number(d)

        if (v < parseFloat(d / t)) {
            v = parseFloat(d / t)
            console.log(i + 1)
        }
    }
}