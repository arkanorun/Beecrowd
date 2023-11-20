let a = Number(lines[0].split(" "))
let b = Number(lines[1].split(" "))

if (a > b) {
    b++
    while (a > b) {
        if (b % 5 === 2 || b % 5 === 3) {
            console.log(b)
        }
        b++
    }
} else {
    a++
    while (a < b) {
        if (a % 5 === 2 || a % 5 === 3) {
            console.log(a)
        }
        a++

    }
}