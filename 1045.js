lines = lines.shift().split(" ")
let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

if (a < b && b > c && a > c) {
    a = b
    b = parseFloat(lines[0])
} else if ((a < b && b > c && a < c)) {
    a = b
    b = c
    c = parseFloat(lines[0])
} else if (a < c && c > b && a > b) {
    b = a
    a = c
    c = parseFloat(lines[1])
} else if ((a < c && c > b && a < b)) {
    a = c
    c = parseFloat(lines[0])
} else if (a === b && a < c) {
    a = c
    c = parseFloat(lines[0])
} else if (a === c && a < b) {
    a = b
    b = parseFloat(lines[0])
}


if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO")
} else if (Math.pow(a, 2) === (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log("TRIANGULO RETANGULO")
} else if (Math.pow(a, 2) > (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log("TRIANGULO OBTUSANGULO")
} else if (Math.pow(a, 2) < (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log("TRIANGULO ACUTANGULO")
}

if (a === b && a === c && b === c) {
    console.log("TRIANGULO EQUILATERO")
} else if (a === b || a === c || b === c) {
    console.log("TRIANGULO ISOSCELES")
} 