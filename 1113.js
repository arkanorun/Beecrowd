let i = 1

while (i) {
    let [a, b] = lines.shift().split(" ")
    a = Number(a)
    b = Number(b)

    if (a > b) {
        console.log("Decrescente")

    } else if (a < b) {
        console.log("Crescente")

    } else if (a === b) {
        break;
    }
}