let b = Number(lines.shift().split(" "))
let a
let tr = 0
let tc = 0
let ts = 0
let pr = 0
let ps = 0
let pc = 0
let total

for (let i = 0; i < b; i++) {
    let [a1, a2] = (lines.shift().split(" "))
    if (a2.toString() === "C") {
        tc = tc + Number(a1)
    } else if (a2.toString() === "R") {
        tr = tr + Number(a1)
    } else if (a2.toString() === "S") {
        ts = ts + Number(a1)
    }
}

total = tr + ts + tc
pr = (tr / total) * 100
ps = (ts / total) * 100
pc = (tc / total) * 100

console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${tc}`)
console.log(`Total de ratos: ${tr}`)
console.log(`Total de sapos: ${ts}`)
console.log(`Percentual de coelhos: ${pc.toFixed(2)} %`)
console.log(`Percentual de ratos: ${pr.toFixed(2)} %`)
console.log(`Percentual de sapos: ${ps.toFixed(2)} %`)
