let a = Number(lines[0].split(" "))
let b = Number(lines[1].split(" "))
let sum1 = 0

if (a >= b) {
    if ((b % 2) !== 0) {
        for (let i = b + 2; i < a; i = i + 2) {
            sum1 += i
        }
    } else {
        b -= 1
        for (let i = b + 2; i < a; i = i + 2) {
            sum1 += i
        }
    }
} else {
    if ((a % 2) !== 0) {
        for (let i = a + 2; i < b; i = i + 2) {
            sum1 += i
        }
    } else {
        a -= 1
        for (let i = a + 2; i <= b; i = i + 2) {
            sum1 += i
        }
    }
}
console.log(sum1)