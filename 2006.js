let a = Number(lines.shift())
let b = lines.shift().split(" ")

count = 0
for (let i of b) {
    if (i == a) {
        count += 1
    }
}

console.log(count)