while (Number(lines[0]) !== 0) {
    let a = Number(lines.shift())
    let soma = 0
    for (let i = 0; i < a; i++) {
        let [b, c] = lines.shift().split(" ")
        b = Number(b)
        c = String(c)

        if (c === "suco") {
            soma += (120 * b)
        } else if (c === "morango") {
            soma += (85 * b)
        } else if (c === "mamao") {
            soma += (85 * b)
        } else if (c === "goiaba") {
            soma += (70 * b)
        } else if (c === "manga") {
            soma += (56 * b)
        } else if (c === "laranja") {
            soma += (50 * b)
        } else if (c === "brocolis") {
            soma += (34 * b)
        }
    }

    if (soma > 130) {
        soma = soma - 130
        console.log(`Menos ${soma} mg`)

    } else if (soma < 110) {
        soma = 110 - soma
        console.log(`Mais ${soma} mg`)
    } else if (soma >= 110 && soma <= 130) {
        console.log(`${soma} mg`)
    }
}