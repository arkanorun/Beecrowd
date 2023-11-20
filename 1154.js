let a = Number(lines.shift())
cont = 0
let b = 0

while (a >= 0) {
    b += a
    cont++
    a = Number(lines.shift())
}

console.log((b / cont).toFixed(2))