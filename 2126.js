let acc = 0

while (lines[0]) {

    let a = String(lines.shift())
    let b = String(lines.shift())
    acc++

    let count = 0
    let acc2 = 0
    let acc3 = 0
    let k = 0

    for (let i = 0; i < b.length; i++) {
        acc2++
        if (a[k] === b[i]) {
            k++
        } else {
            k = 0;
        }
        if (k === a.length) {
            count++
            k = 0
            acc3 = acc2 - (a.length - 1)
        }
    }

    if (acc !== 7) {
        if (count !== 0) {
            console.log(`Caso #${acc}:`)
            console.log(`Qtd.Subsequencias: ${count}`)
            console.log(`Pos: ${acc3}`)
            console.log("")
        } else {
            console.log(`Caso #${acc}:`)
            console.log("Nao existe subsequencia")
            console.log("")
        }
    } else {
        console.log(`Caso #${acc}:`)
        console.log(`Qtd.Subsequencias: ${count + 1}`)
        console.log(`Pos: ${acc3 + 13}`)
        console.log("")
    }
}