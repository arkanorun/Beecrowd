let a = parseFloat(lines[0].split(" "))
let b = parseFloat(lines[1].split(" "))
let dist = b * a
let gasto = dist / 12
console.log(gasto.toFixed(3))