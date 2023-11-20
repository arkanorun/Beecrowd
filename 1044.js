lines = lines.shift().split(" ")
let a = Number(lines[0])
let b = Number(lines[1])

if (a % b === 0 || b % a === 0) {
    console.log("Sao Multiplos")
}
if (a % b !== 0 && b % a !== 0) {
    console.log("Nao sao Multiplos")
}