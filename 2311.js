let a = Number(lines.shift())

for (let i = 0; i < a; i++) {
    let n = lines.shift()
    let p = parseFloat(lines.shift())
    let b = lines.shift().split(" ")
    let menor = 10
    let maior = 0
    let soma = 0
    for (let j = 0; j < b.length; j++) {

        b[j] = Number(b[j])

        if (maior < b[j]) {
            maior = b[j]
        }
        if (menor > b[j]) {
            menor = b[j]
        }

        soma = parseFloat(soma + b[j])

    }
    let soma1 = parseFloat(maior + menor)
    soma = parseFloat(soma - soma1)
    soma = parseFloat(soma * p)

    console.log(`${n} ${soma.toFixed(2)}`)
}