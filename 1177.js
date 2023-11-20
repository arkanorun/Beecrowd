let t = Number(lines[0].split(" "))
let a = 0

for (i = 0; i < 1000; i++) {
    if (a < t) {
        console.log(`N[${i}] = ${a}`)
    } else {
        a = 0
        console.log(`N[${i}] = ${a}`)
    }
    a++
}