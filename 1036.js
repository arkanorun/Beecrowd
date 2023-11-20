lines = lines.shift().split(" ")

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

let delta = Math.pow(b, 2) - (4 * a * c)
let x1 = (((-1) * b) + Math.sqrt(delta, 2)) / (2 * a)

let x2 = (((-1) * b) - Math.sqrt(delta, 2)) / (2 * a)

if ((a > 0) && (delta >= 0)) {
    console.log(`R1 = ${x1.toFixed(5)}`)
    console.log(`R2 = ${x2.toFixed(5)}`)
} else {
    console.log("Impossivel calcular")
}