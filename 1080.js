let a = []
let b
let c = 0
for (let i = 0; i < 100; i++) {
    a.push(Number(lines.shift()))
}
b = a[0]
for (let i = 0; i < 100; i++) {
    if (a[i] > b) {
        b = a[i]
        c = i + 1
    }
}
console.log(b)
console.log(c)