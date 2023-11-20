let [a, b] = lines.shift().split(" ")
a = Number(a)
b = Number(b)

let p = ((b - a) / a) * 100
console.log(`${p.toFixed(2)}%`)