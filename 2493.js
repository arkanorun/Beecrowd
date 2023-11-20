while (lines[0]) {
    let n = Number(lines.shift())
    let e = []
    let p = []
    let nome = []

    for (let i = 0; i < n; i++) {
        e.push(lines.shift().replace('=', " ").split(" "))
    }

    for (let i = 0; i < n; i++) {
        p.push(lines.shift().split(" "))

    }

    for (let i = 0; i < n; i++) {

        let li = 0

        if (String(p[i][2]) !== 'I') {
            let valor = 0
            if (String(p[i][2]) === '+') {
                li = Number(p[i][1]) - 1
                valor = Number(e[li][0]) + Number(e[li][1])

            } else if (String(p[i][2]) === '-') {
                li = Number(p[i][1]) - 1
                valor = Number(e[li][0]) - Number(e[li][1])

            } else if (String(p[i][2]) === '*') {
                li = Number(p[i][1]) - 1
                valor = Number(e[li][0]) * Number(e[li][1])
            }
            if (valor !== Number(e[li][2])) {
                nome.push(String(p[i][0]))
            }

        } else if (String(p[i][2]) === 'I') {
            li = Number(p[i][1]) - 1

            let valor1 = Number(e[li][0]) + Number(e[li][1])
            let valor2 = Number(e[li][0]) - Number(e[li][1])
            let valor3 = Number(e[li][0]) * Number(e[li][1])

            if (valor1 === Number(e[li][2]) || valor2 === Number(e[li][2]) ||
                valor3 === Number(e[li][2])) {
                nome.push(String(p[i][0]))
            }

        }
    }

    if (nome.length > 0 && nome.length < n) {

        nome.sort()
        nome = nome.join(" ")
        console.log(nome)
    } else if (nome.length === n) {
        console.log("None Shall Pass!")
    } else {
        console.log('You Shall All Pass!')
    }
}