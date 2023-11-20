let a = Number(lines.shift().split(" "))

for (let i = 0; i < a; i++) {
    let [b, c] = lines.shift().split(" ")
    b = b.toString()
    c = Number(c)

    if (b === "Thor" && c >= 50) {
        console.log("Y")
    } else {
        console.log("N")
    }
}