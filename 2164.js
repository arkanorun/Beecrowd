let n = Number(lines[0].split(" "))

let f = parseFloat((Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5))

console.log(f.toFixed(1))