lines = lines.shift().split(" ")
let a = Number(lines[0])
let c = Number(lines[1])
let b = Number(lines[2])
let d = Number(lines[3])

let hora
let minuto

if (a > b) {
    hora = 24 - a + b
    if (c > d) {
        minuto = 60 - c + d
        console.log(`O JOGO DUROU ${hora - 1} HORA(S) E ${minuto} MINUTO(S)`)
    } else if (c <= d) {
        minuto = d - c
        console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`)
    }
}

if (a < b) {
    hora = b - a
    if (c > d) {
        minuto = 60 - c + d
        console.log(`O JOGO DUROU ${hora - 1} HORA(S) E ${minuto} MINUTO(S)`)
    } else if (c <= d) {
        minuto = d - c
        console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`)
    }
}

if (a === b && c < d) {
    hora = a - b
    minuto = d - c
    console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`)
} else if (a === b && c === d) {
    hora = 24
    minuto = d - c
    console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`)

} else if (a === b && c > d) {
    minuto = 60 - c + d
    console.log(`O JOGO DUROU ${23} HORA(S) E ${minuto} MINUTO(S)`)
} 
