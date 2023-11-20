let cont1 = []
let cont2 = []
let inv = []

for (i = 0; i < 20; i++) {
    cont1.push(Number(lines.shift()))
}

for (i = 19; i >= 0; i--) {
    cont2.push(cont1[i])
}

for (i = 0; i < 20; i++) {
    console.log(`N[${i}] = ${cont2[i]}`)
}