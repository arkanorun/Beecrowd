let a = Number(lines.shift())

for (let i = 0; i < a; i++) {
    let p = (lines.shift()).toString()

    let t = parseFloat(p.length * 0.01)

    console.log(t.toFixed(2))
}