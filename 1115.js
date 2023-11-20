let a = 1

while (a) {
    let [a, b] = lines.shift().split(" ")
    x = Number(a)
    y = Number(b)

    if (x > 0) {
        if (y > 0) {
            console.log("primeiro")
        } else if (y < 0) {
            console.log("quarto")
        }
    } else if (x < 0) {
        if (y > 0) {
            console.log("segundo")
        } else if (y < 0) {
            console.log("terceiro")
        }
    } else if (x === 0 || y === 0) {
        break;
    }
}