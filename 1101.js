let j = 1
let c = 0
let soma = 0
while (j) {
    let [a, b] = lines.shift().split(" ")
    a = Number(a)
    b = Number(b)


    if (a <= 0 || b <= 0) {
        break;
    }

    if (a > b) {
        for (let i = b; i <= a; i++) {
            c = c + i + " "
            soma += i
            if (i === a) {
                console.log(`${c}Sum=${soma}`)
                c = 0
                soma = 0
            }
        }
    } else {
        for (let i = a; i <= b; i++) {
            c = c + i + " "
            soma += i
            if (i === b) {
                console.log(`${c}Sum=${soma}`)
                c = 0
                soma = 0
            }
        }
    }

}