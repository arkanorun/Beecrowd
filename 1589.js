let testes = Number(lines.shift())

for (let i = 0; i < testes; i++) {
    let [a, b] = lines.shift().split(' ')
    a = Number(a)
    b = Number(b)

    console.log(a + b)
}