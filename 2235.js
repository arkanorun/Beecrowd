let [a, b, c] = lines.shift().split(" ")

a = Number(a)
b = Number(b)
c = Number(c)

let aux

if (a === b || a === c || b === c || a + b === c || a + c === b ||
    b + c === a) {

    console.log("S")

} else {
    console.log("N")
}