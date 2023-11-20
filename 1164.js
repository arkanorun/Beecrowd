let n = Number(lines.shift())
let soma = 0
while (n) {
    let a = Number(lines.shift())
    if (a > 0) {
        for (let i = 1; i < (a - 1); i++) {
            if (a % i === 0) {
                soma += i
            }
        }
        if (soma === a) {
            console.log(`${a} eh perfeito`)
        } else {
            console.log(`${a} nao eh perfeito`)
        }
    }
    n--
    soma = 0
}