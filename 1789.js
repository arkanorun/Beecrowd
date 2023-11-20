while (1) {
    let aux = 0
    let teste = Number(lines.shift())
    let lesma = lines.shift().split(" ")
    for (let i = 0; i < teste; i++) {
        let a = Number(lesma[i])
        if (aux < a) {
            aux = a
        }
    }
    if (aux < 10) {
        console.log("1")
    } else if (aux >= 10 && aux < 20) {
        console.log("2")
    } else {
        console.log("3")
    }

    if (!lines[0]) {
        break;
    }
}