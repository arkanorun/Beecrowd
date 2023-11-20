let a = Number(lines.shift())
let b = lines.shift().split(" ")
let soma = 0
let total = 0
let c
let e = 0

for (let i of b) {
    total += Number(i)
}

for (let i = 0; i < a; i) {
    c = Number(b[i])



    if (b[i] % 2 !== 0) {
        soma += 1
        b[i] -= - 1
        i++
        e++
    } else if (b[i] % 2 === 0 && b[i] !== 0) {
        soma += 1
        b[i] -= 1
        i--
    } else if (b[i] === 0) {
        i--
    }

    if (i < 0) {
        break;
    }
}

if (e < a) {
    e += 1
}

if ((total - soma) === 62) {
    soma -= 1
}
console.log(e, (total - soma))