let a = Number(lines.shift())

for (let i = 1; i <= a; i++) {
    let p = 0
    let b = (lines.shift()).toString()
    let [R, G, B] = lines.shift().split(" ").map((valor) => Number(valor))

    if (b === "eye") {
        p = Math.floor(0.3 * R + 0.59 * G + 0.11 * B)
    }

    if (b === 'mean') {
        p = Math.floor((R + G + B) / 3)
    }

    let array = [R, G, B]

    array.sort((a, b) => {
        return b - a
    })
    if (b === 'min') {
        p = Math.floor(array[2])
    }

    if (b === "max") {
        p = Math.floor(array[0])
    }

    console.log(`Caso #${i}: ${p}`)
}