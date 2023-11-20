let a = Number(lines.shift())

for (let i = 0; i < a; i++) {

    let b = String(lines.shift())
    let c = String(lines.shift())

    if (b === "papel") {
        if (c !== "papel") {
            console.log("Jogador 2 venceu")
        } else {
            console.log("Ambos venceram")
        }
    }

    if (b === "pedra") {
        if (c === "papel") {
            console.log("Jogador 1 venceu")
        } else if (c === "pedra") {
            console.log("Sem ganhador")
        } else {
            console.log("Jogador 2 venceu")
        }
    }

    if (b === "ataque") {
        if (c !== "ataque") {
            console.log("Jogador 1 venceu")
        } else {
            console.log("Aniquilacao mutua")
        }

    }
}