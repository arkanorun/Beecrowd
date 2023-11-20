let array = []

for (let i = 0; i < 10; i++) {
    let a = Number(lines.shift())
    if (a > 0) {
        console.log(`X[${i}] = ${a}`)
    } else {
        console.log(`X[${i}] = 1`)
    }
}