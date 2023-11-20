let n = Number(lines.shift())

let soma = 2

for (let i = 1; i < n; i++) {

    soma = parseFloat(2 + (1 / soma))

}

if (n === 0) {
    soma = 1
    console.log(soma.toFixed(10))
} else if (n === 1) {
    soma = 1 / 2
    console.log((1 + soma).toFixed(10))
} else {
    console.log((1 + 1 / soma).toFixed(10))
}