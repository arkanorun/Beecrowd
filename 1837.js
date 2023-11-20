let [a, b] = lines.shift().split(" ")

a = Number(a)
b = Number(b)

let q
let r = a % b


while (r < 0) {

    r += Math.abs(b)
}

q = (a - r) / b

if (q === 0) {
    q = Math.abs(q)
}

console.log(q, Math.abs(r))