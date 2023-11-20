lines = lines.shift().split(" ")

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

if (a + b > c && a + c > b && b + c > a) {
    console.log("Perimetro =", (a + b + c).toFixed(1))
} else {
    console.log("Area =", ((a + b) * c / 2).toFixed(1))
}