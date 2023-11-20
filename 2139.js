function messesEmDias(mes) {
    let dias = 0

    for (let i = mes; mes > 0; mes--) {
        if (mes === 2) {
            dias += 29
        } else if (mes === 12) {
            dias += 23
        } else if ((mes % 2 === 0 && mes >= 8) || mes === 7) {
            dias += 31
        } else if (mes % 2 === 0 && mes < 7) {
            dias += 30
        } else if (mes % 2 !== 0 && mes < 6) {
            dias += 31
        } else if (mes % 2 !== 0 && mes > 8) {
            dias += 30
        }
    }
    return (366 - dias)
}

function diasRestantes(dia, mes) {

    let dias

    if (mes === 2) {
        dias = 29 - dia
    } else if ((mes % 2 === 0 && mes >= 8) || mes === 7) {
        dias = 31 - dia
    } else if (mes % 2 === 0 && mes < 7) {
        dias = 30 - dia
    } else if (mes % 2 !== 0 && mes < 6) {
        dias = 31 - dia
    } else if (mes % 2 !== 0 && mes > 8) {
        dias = 30 - dia
    }
    return dias
}



while (lines[0]) {

    let [m, d] = lines.shift().split(" ")

    m = Number(m)
    d = Number(d)

    if (d === 24 && m === 12) {
        console.log("E vespera de natal!")
    } else if (d === 25 && m === 12) {
        console.log("E natal!")
    } else if (d > 25 && m === 12) {
        console.log("Ja passou!")
    } else {
        let valor = messesEmDias(m) + diasRestantes(d, m) - 6
        console.log(`Faltam ${valor} dias para o natal!`)
    }

}