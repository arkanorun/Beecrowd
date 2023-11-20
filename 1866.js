let N = Number(lines.shift())

for (let i = 0; i < N; i++) {
    let a = Number(lines[i].split(" "))

    if (a % 2 === 0) {
        console.log(0)
    } else {
        console.log(1)
    }
}