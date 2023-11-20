let a = Number(lines.shift())
let soma = 0
for (let i = 0; i < a; i++) {
    let [b, c] = lines.shift().split(" ")
    b = Number(b)
    c = Number(c)

    if (b === 1001) {
        soma += (c * 1.5)
    } else if (b === 1002) {
        soma += (c * 2.5)
    } else if (b === 1003) {
        soma += (c * 3.5)
    } else if (b === 1004) {
        soma += (c * 4.5)
    } else if (b === 1005) {
        soma += (c * 5.5)
    }
}

console.log(soma.toFixed(2))