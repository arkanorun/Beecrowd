let par = []
let impar = []

for (i = 0; i < 15; i++) {
    let a = Number(lines.shift())
    if ((a % 2) === 0) {
        par.push(a)
    } else {
        impar.push(a)
    }

    if (par.length === 5) {
        console.log(`par[0] = ${par[0]}`)
        console.log(`par[1] = ${par[1]}`)
        console.log(`par[2] = ${par[2]}`)
        console.log(`par[3] = ${par[3]}`)
        console.log(`par[4] = ${par[4]}`)
        par = []
    }
    if (impar.length === 5) {
        console.log(`impar[0] = ${impar[0]}`)
        console.log(`impar[1] = ${impar[1]}`)
        console.log(`impar[2] = ${impar[2]}`)
        console.log(`impar[3] = ${impar[3]}`)
        console.log(`impar[4] = ${impar[4]}`)
        impar = []
    }
}

for (i = 0; i <= impar.length - 1; i++) {
    console.log(`impar[${i}] = ${impar[i]}`)
}
for (i = 0; i <= par.length - 1; i++) {
    console.log(`par[${i}] = ${par[i]}`)
}
