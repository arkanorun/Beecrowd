let a = Number(lines[0].split(" "))

let valor = ""
let resposta = ""
let r

function hexadecimal() {

    r = a % 16

    if (a >= 16) {
        if (r < 10) {
            valor += r
        } else if (r < 16) {
            if (r === 10) {
                valor += "A"
            } else if (r === 11) {
                valor += "B"
            } else if (r === 12) {
                valor += "C"
            } else if (r === 13) {
                valor += "D"
            } else if (r === 14) {
                valor += "E"
            } else {
                valor += "F"
            }
        }
        a = parseInt(a / 16)
    }

    if (a < 10) {
        valor += a
    } else if (a < 16) {
        if (a === 10) {
            valor += "A"
        } else if (a === 11) {
            valor += "B"
        } else if (a === 12) {
            valor += "C"
        } else if (a === 13) {
            valor += "D"
        } else if (a === 14) {
            valor += "E"
        } else {
            valor += "F"
        }
    }
    return
}


hexadecimal()

while (a > 15) {
    hexadecimal()
}

for (let i = 0; i < valor.length; i++) {
    resposta += valor[valor.length - 1 - i]
}

console.log(resposta)