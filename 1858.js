let valor = Number(lines.shift())
let a = lines.shift().split(" ")
let b = 21
let count = 0
for (let i = 0; i < valor; i++) {
    if (a[i] < b) {
        b = a[i]
        count = i + 1
    }
}

console.log(count)