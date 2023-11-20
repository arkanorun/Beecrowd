let a = Number(lines.shift())

for (let i = 0; i < a; i++) {
    let [h, m, o] = lines.shift().split(" ")

    h = (h.toString()).padStart(2, 0)
    m = (m.toString()).padStart(2, 0)
    o = Number(o)

    if (o === 0) {
        console.log(`${h}:${m} - A porta fechou!`)
    } else {
        console.log(`${h}:${m} - A porta abriu!`)
    }
}