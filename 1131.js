let a = 1
let g = 0
let i = 0
let empate = 0
let grenal = 1

while (a) {
    let [a1, a2] = lines.shift().split(" ")
    let x = lines.shift().split(" ")

    a1 = Number(a1)
    a2 = Number(a2)
    x = Number(x)

    if (a1 > a2) {
        i += 1
    } else if (a1 < a2) {
        g += 1
    } else {
        empate += 1
    }

    if (x === 1) {
        grenal += 1
        console.log("Novo grenal (1-sim 2-nao)")
    }

    if (x === 2) {
        console.log("Novo grenal (1-sim 2-nao)")
        a--
        console.log(`${grenal} grenais`)
        if (i > 0) {
            console.log(`Inter:${i}`)
        }
        if (g > 0) {
            console.log(`Gremio:${g}`)
        }
        console.log(`Empates:${empate}`)

        if (g > i) {
            console.log("Gremio venceu mais")
        } else if (g < i) {
            console.log("Inter venceu mais")
        } else {
            console.log("Nao houve vencedor")
        }
    }
}