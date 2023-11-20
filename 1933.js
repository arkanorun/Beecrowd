let [a, b] = lines.shift().split(" ")

a = Number(a)
b = Number(b)

if (a >= b) {
    console.log(a)
} else {
    console.log(b)
}