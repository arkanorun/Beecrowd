let a = []
let cont = 0
for (let i = 0; i <= 4; i++) {
    a.push(Number(lines.shift()))
}

for (let i of a) {
    if ((i % 2) === 0) {
        cont = cont + 1
    }
}
console.log(cont + " valores pares")