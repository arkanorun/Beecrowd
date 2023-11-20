lines = lines.shift().split(" ")

let p1 = Number(lines[0])
let b = Number(lines[1])

if (p1 === 1) {
    p1 = parseFloat(4.00)
} else if (p1 === 2) {
    p1 = parseFloat(4.50)
} else if (p1 === 3) {
    p1 = parseFloat(5.00)
} else if (p1 === 4) {
    p1 = parseFloat(2.00)
} else if (p1 === 5) {
    p1 = parseFloat(1.50)
}

console.log(`Total: R$ ${(p1 * b).toFixed(2)}`)