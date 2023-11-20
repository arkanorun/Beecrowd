let a = 1
let al = 0
let ga = 0
let di = 0
while (a) {
    let b = Number(lines.shift())

    if (b === 1) {
        al++
    } else if (b === 2) {
        ga++
    } else if (b === 3) {
        di++
    } else if (b === 4) {
        a--
        console.log(`MUITO OBRIGADO
Alcool: ${al}
Gasolina: ${ga}
Diesel: ${di}`)
    }
}