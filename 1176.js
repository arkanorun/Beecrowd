let T = Number(lines.shift())

while (T) {
    let soma = 0
    let cont = [0, 1]
    let a = Number(lines.shift())

    for (let i = 1; i < a; i++) {
        soma = cont[i] + cont[i - 1]
        cont.push(soma)
    }

    if (a === 0) {
        console.log(`Fib(0) = 0`)
    } else if (a === 1) {
        console.log(`Fib(1) = 1`)
    } else {
        console.log(`Fib(${a}) = ${cont[a]}`)
    }
    T--
}