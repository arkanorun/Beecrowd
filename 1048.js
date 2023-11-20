let a = parseFloat(lines[0])
let b
let c
if (a > 0 && a <= 400.00) {
    b = a * 0.15
    a = a * 1.15
    c = 15
} else if (a > 400.00 && a <= 800.00) {
    b = a * 0.12
    a = a * 1.12
    c = 12
} else if (a > 800.00 && a <= 1200.00) {
    b = a * 0.10
    a = a * 1.10
    c = 10
} else if (a > 1200.00 && a <= 2000.00) {
    b = a * 0.07
    a = a * 1.07
    c = 7
} else if (a > 2000.00) {
    b = a * 0.04
    a = a * 1.04
    c = 4
}
console.log(`Novo salario: ${a.toFixed(2)}`)
console.log(`Reajuste ganho: ${b.toFixed(2)}`)
console.log(`Em percentual: ${c} %`)