let a = 1
let cont = 0
let media = 0
let x

while (a) {
    let nota = lines.shift()
    nota = parseFloat(nota)

    if (nota < 0 || nota > 10) {
        console.log("nota invalida")

    } else if (nota >= 0 && nota <= 10) {
        media += nota
        cont += 1
    }
    if (cont === 2) {
        console.log("media =", (media / 2).toFixed(2))
        console.log("novo calculo (1-sim 2-nao)")
        cont = 0
        media = 0
        x = lines.shift()
        x = Number(x)
        while (x !== 1 && x !== 2) {
            console.log("novo calculo (1-sim 2-nao)")
            x = lines.shift()
            x = Number(x)
        }
    }

    while (x === 1) {
        let nota = lines.shift()
        nota = parseFloat(nota)

        if (nota < 0 || nota > 10) {
            console.log("nota invalida")

        } else if (nota >= 0 && nota <= 10) {
            media += nota
            cont += 1
        }
        if (cont === 2) {

            console.log("media =", (media / 2).toFixed(2))
            console.log("novo calculo (1-sim 2-nao)")
            cont = 0
            media = 0
            x = lines.shift()
            x = Number(x)
            while (x !== 1 && x !== 2) {
                console.log("novo calculo (1-sim 2-nao)")
                x = lines.shift()
                x = Number(x)
            }
        }
    }
    if (x === 2) {
        a--
    }
}