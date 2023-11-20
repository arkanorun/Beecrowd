let a = parseFloat(lines[0])
let i

if (a >= 0 && a <= 2000) {
    console.log("Isento")
} else if (a >= 2000.01 && a <= 3000) {
    i = (a - 2000) * 0.08
    console.log(`R$ ${i.toFixed(2)}`)
} else if (a >= 3000.01 && a <= 4500) {
    i = ((a - 3000) * 0.18) + ((1000) * 0.08)
    console.log(`R$ ${i.toFixed(2)}`)
} else if (a > 4500) {
    i = ((a - 4500) * 0.28) + (1500 * 0.18) + ((1000) * 0.08)
    console.log(`R$ ${i.toFixed(2)}`)
}