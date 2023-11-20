let c = lines.shift().split(" ")

while (c) {
    let [a, b] = lines.shift().split(" ")
    a = Number(a)
    b = Number(b)

    if (b !== 0) {
        console.log((a / b).toFixed(1))
    } else if (b === 0) {
        console.log("divisao impossivel")
    }
    c--
}