let b = 0

while (lines[0]) {

    let acc = 0
    let count = ""
    let a = Number(lines.shift())
    b++

    for (let i = 0; i <= a; i++) {
        if (i < 2) {
            count += i + " "
            acc++
        } else {
            for (let j = 0; j < i; j++) {
                count += i + " "
                acc++
            }
        }
    }

    if (a < 1) {
        console.log(`Caso ${b}: ${acc} numero`)
    } else {
        console.log(`Caso ${b}: ${acc} numeros`)
    }
    console.log(count.trim())
    console.log("")
}