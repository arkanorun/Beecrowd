let a = Number(lines[0].split(" "))
let soma = 6

if (a > 1) {
    for (let i = 2; i <= a; i++) {

        soma = parseFloat(6 + 1 / soma)

    }
    console.log((1 / soma + 3).toFixed(10))
} else if (a === 1) {
    soma = parseFloat(1 / 6)
    console.log((soma + 3).toFixed(10))
} else {
    soma = 0
    console.log((soma + 3).toFixed(10))
}