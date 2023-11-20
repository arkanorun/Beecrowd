while (lines[0]) {

    let a = Number(lines.shift())
    let b = lines.shift().split(" ")
    let im = 0
    let n = 0

    for (let i = 0; i < a; i++) {

        if (Number(b[i]) === 1) {
            im++
        }
    }
    if (im >= parseFloat((2 * a) / 3)) {
        console.log('impeachment')
    } else {
        console.log('acusacao arquivada')
    }

}