let [a, b] = lines.shift().split(" ")

a = Number(a)
b = Number(b)

let count = a

for (let i = 0; i < b; i++) {
    let c = String(lines.shift())

    if (c === "fechou") {
        count = count + 1
    }
    if (c === "clicou") {
        count = count - 1
    }
}

console.log(count)