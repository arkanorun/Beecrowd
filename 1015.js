let lines1 = lines.shift().split(" ")
let lines2 = lines.shift().split(" ")

let x1 = parseFloat(lines1[0])
let y1 = parseFloat(lines1[1])

let x2 = parseFloat(lines2[0])
let y2 = parseFloat(lines2[1])

let valor = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2), 2)
console.log(valor.toFixed(4))