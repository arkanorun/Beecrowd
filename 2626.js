while (lines[0]) {
    let [a, b, c] = lines.shift().split(" ").map((valor) => String(valor))

    if (a === "pedra") {

        if (b === "pedra") {

            if (c === "pedra" || c === "tesoura") {
                console.log('Putz vei, o Leo ta demorando muito pra jogar...')
            } else {
                console.log("Urano perdeu algo muito precioso...")
            }
        } else if (b === "papel") {

            if (c === "pedra") {
                console.log("Iron Maiden's gonna get you, no matter how far!")
            } else {
                console.log("Putz vei, o Leo ta demorando muito pra jogar...")
            }
        } else if (b === "tesoura") {

            if (c === "papel" || c === "pedra") {
                console.log('Putz vei, o Leo ta demorando muito pra jogar...')
            } else {
                console.log("Os atributos dos monstros vao ser inteligencia, sabedoria...")
            }
        }

    } else if (a === "papel") {

        if (b === "pedra") {

            if (c === "papel" || c === "tesoura") {
                console.log('Putz vei, o Leo ta demorando muito pra jogar...')
            } else {
                console.log("Os atributos dos monstros vao ser inteligencia, sabedoria...")
            }
        } else if (b === "papel") {

            if (c === "pedra" || c === "papel") {
                console.log('Putz vei, o Leo ta demorando muito pra jogar...')
            } else {
                console.log("Urano perdeu algo muito precioso...")
            }
        } else if (b === "tesoura") {

            if (c === "tesoura" || c === "pedra") {
                console.log('Putz vei, o Leo ta demorando muito pra jogar...')
            } else {
                console.log("Iron Maiden's gonna get you, no matter how far!")
            }
        }

    } else {
        if (b === "pedra") {

            if (c === "papel" || c === "pedra") {
                console.log('Putz vei, o Leo ta demorando muito pra jogar...')
            } else {
                console.log("Iron Maiden's gonna get you, no matter how far!")
            }
        } else if (b === "papel") {

            if (c === "pedra" || c === "tesoura") {
                console.log('Putz vei, o Leo ta demorando muito pra jogar...')
            } else {
                console.log("Os atributos dos monstros vao ser inteligencia, sabedoria...")
            }
        } else if (b === "tesoura") {

            if (c === "tesoura" || c === "papel") {
                console.log('Putz vei, o Leo ta demorando muito pra jogar...')
            } else {
                console.log("Urano perdeu algo muito precioso...")

            }
        }
    }
}