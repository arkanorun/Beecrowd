let a = Number(lines.shift())

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i of b) {
    console.log(`${i} x ${a} = ${a * i}`)
}