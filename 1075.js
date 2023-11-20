let a = Number(lines[0].split(" "))
let b = []
for (i = 2; i < 10000; i++) {
    b.push(i)
}

for (let i of b) {
    if (i % a === 2) {
        console.log(i)
    }
}