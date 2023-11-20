let a = []
let cont = 0
let valor = 0
a.push(parseFloat(lines.shift()))
a.push(parseFloat(lines.shift()))
a.push(parseFloat(lines.shift()))
a.push(parseFloat(lines.shift()))
a.push(parseFloat(lines.shift()))
a.push(parseFloat(lines.shift()))

for (let i of a) {
    if (i > 0) {
        cont++
        valor = valor + i
    }
}
console.log(`${cont} valores positivos`)
console.log((valor / cont).toFixed(1))