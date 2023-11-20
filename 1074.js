let b = Number(lines.shift())
let a = []
for (let i = 0; i <= (b - 1); i++) {
    a.push(parseFloat(lines.shift()))
}

for (let i of a) {
    if (i % 2 === 0) {
        if (i > 0) {
            console.log("EVEN POSITIVE")
        } else if (i < 0) {
            console.log("EVEN NEGATIVE")
        }
    } else if (Number(i % 2) !== 0) {
        if (i > 0) {
            console.log("ODD POSITIVE")
        } else if (i < 0) {
            console.log("ODD NEGATIVE")
        }
    }
    if (i === 0) {
        console.log("NULL")
    }
}