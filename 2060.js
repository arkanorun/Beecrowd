let N = Number(lines.shift())
let d = 0
let t = 0
let q = 0
let c = 0

let b = lines.shift().split(" ")

for (let i = 0; i < N; i++) {
    let a = Number(b[i])

    if (a % 2 === 0) {
        d++
    }
    if (a % 3 === 0) {
        t++
    }
    if (a % 4 === 0) {
        q++
    }
    if (a % 5 === 0) {
        c++
    }
}
console.log(`${d} Multiplo(s) de 2`)
console.log(`${t} Multiplo(s) de 3`)
console.log(`${q} Multiplo(s) de 4`)
console.log(`${c} Multiplo(s) de 5`)