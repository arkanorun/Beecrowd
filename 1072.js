let a = []
let b = Number(lines.shift())
let dentro = 0
let fora = 0

for (let i = 0; i <= b - 1; i++) {
    a.push(Number(lines.shift()))
}


for (let i of a) {
    if (i >= 10 && i <= 20) {
        dentro += 1
    } else {
        fora += 1
    }
}
console.log(`${dentro} in`)
console.log(`${fora} out`)