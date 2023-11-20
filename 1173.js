let a = Number(lines[0].split(" "))
let cont = []

for (let i = 0; i < 10; i++) {
    cont.push(a)
    a = a * 2
    console.log(`N[${i}] = ${cont[i]}`)
}