let A = parseFloat(lines[0].split(" "))
let B = parseFloat(lines[1].split(" "))
let C = parseFloat(lines[2].split(" "))
let conta = B + (C * 0.15)

console.log("TOTAL = R$", conta.toFixed(2))
