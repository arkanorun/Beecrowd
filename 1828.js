let a = Number(lines[0].split(" "))

for (let i = 1; i <= a; i++) {
    let [b, c] = lines[i].split(" ")
    b = b.toString()
    c = c.toString()

    if (b === "tesoura") {
        if (c === "papel" || c === "lagarto") {
            console.log(`Caso #${i}: Bazinga!`)
        } else if (c === "Spock" || c === "pedra") {
            console.log(`Caso #${i}: Raj trapaceou!`)
        } else {
            console.log(`Caso #${i}: De novo!`)
        }
    } else if (b === "papel") {
        if (c === "pedra" || c === "Spock") {
            console.log(`Caso #${i}: Bazinga!`)
        } else if (c === "tesoura" || c === "lagarto") {
            console.log(`Caso #${i}: Raj trapaceou!`)
        } else {
            console.log(`Caso #${i}: De novo!`)
        }
    } else if (b === "pedra") {
        if (c === "tesoura" || c === "lagarto") {
            console.log(`Caso #${i}: Bazinga!`)
        } else if (c === "papel" || c === "Spock") {
            console.log(`Caso #${i}: Raj trapaceou!`)
        } else {
            console.log(`Caso #${i}: De novo!`)
        }
    } else if (b === "Spock") {
        if (c === "tesoura" || c === "pedra") {
            console.log(`Caso #${i}: Bazinga!`)
        } else if (c === "lagarto" || c === "papel") {
            console.log(`Caso #${i}: Raj trapaceou!`)
        } else {
            console.log(`Caso #${i}: De novo!`)
        }
    } else if (b === "lagarto") {
        if (c === "Spock" || c === "papel") {
            console.log(`Caso #${i}: Bazinga!`)
        } else if (c === "tesoura" || c === "pedra") {
            console.log(`Caso #${i}: Raj trapaceou!`)
        } else {
            console.log(`Caso #${i}: De novo!`)
        }
    }
}