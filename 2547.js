while (lines[0]) {
    let [N, min, max] = lines.shift().split(" ")
    N = Number(N)
    min = Number(min)
    max = Number(max)

    let count = 0

    for (let i = 0; i < N; i++) {
        let a = Number(lines.shift())
        if (a >= min && a <= max) {
            count++
        }
    }
    console.log(count)
}