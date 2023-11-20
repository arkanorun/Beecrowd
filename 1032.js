let a = Number(lines[0].split(" "))
let b = Number(lines[1].split(" "))
let soma = 0

if (a <= b) {
    while (b > a) {
        if (a % 13 !== 0) {
            soma += a
        }
        a++
    }
} else {
    while (b < a) {
        if (b % 13 !== 0) {
            soma += b
        }
        b++
    }
}
console.log(soma)