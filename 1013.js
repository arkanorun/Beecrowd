lines = lines.shift().split(" ")

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])

let m1 = (a + b + Math.abs(a - b)) / 2
let m2 = (m1 + c + Math.abs(m1 - c)) / 2

console.log(`${m2} eh o maior`)