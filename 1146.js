let a = 1
let b = ""
while (a) {
    let x = Number(lines.shift())

    if (x !== 0) {
        for (let i = 1; i <= x; i++) {
            b += `${i} `
        }
        console.log(b.trim())
        b = ""
    } else {
        a--
    }
}