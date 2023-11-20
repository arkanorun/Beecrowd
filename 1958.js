let a = parseFloat(lines[0].split(" "))
let count = 0
let sinal = String(lines[0]).split("")

if (a >= 1 && a < 10) {

    console.log('+' + a.toFixed(4) + 'E+00')

} else if (a <= -1 && a > -10) {

    console.log(a.toFixed(4) + 'E+00')

} else if (a > -1 && a < 0) {
    while (a > -1) {
        a = parseFloat(a * 10)
        count += 1
    }
    count = count.toString().padStart(2, 0)
    console.log(`${a.toFixed(4)}E-${count}`)
    count = 0
} else if (a > 0 && a < 1) {
    while (a < 1) {
        a = parseFloat(a * 10)
        count += 1
    }
    count = count.toString().padStart(2, 0)
    console.log(`+${a.toFixed(4)}E-${count}`)
    count = 0
} else if (a >= 10) {
    while (a >= 10) {
        a = parseFloat(a / 10)
        count += 1
    }
    count = count.toString().padStart(2, 0)
    console.log(`+${a.toFixed(4)}E+${count}`)
    count = 0
} else if (a < -10) {
    while (a <= - 10) {
        a = parseFloat(a / 10)
        count += 1
    }
    count = count.toString().padStart(2, 0)
    console.log(`${a.toFixed(4)}E+${count}`)
    count = 0
} else if (a.toFixed(4) === "0.0000" && sinal[0] === "-") {
    console.log('-0.0000E+00')
} else {
    console.log('+0.0000E+00')
}