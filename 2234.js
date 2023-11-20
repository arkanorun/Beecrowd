let [a, b] = lines.shift().split(" ")
a = Number(a)
b = Number(b)

let media = parseFloat(a / b)

console.log(`${media.toFixed(2)}`)