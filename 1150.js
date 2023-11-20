let x = Number(lines.shift())
let z = Number(lines.shift())
let cont = 1
let a = x
while (x > z) {
    z = Number(lines.shift())
}
for (let i = 1; a <= z; i++) {
    a += x + i
    cont++
}
console.log(cont + 3)