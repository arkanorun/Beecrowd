lines = lines.shift().split(" ")
let a = Number(lines.shift())
let n = Number(lines.shift())

let cont = 0

while (n <= 0) {
    n = Number(lines.shift())
}
for (i = 0; i < n; i++) {
    cont += i
}
a = n * a + cont
console.log(a)