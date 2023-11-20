let n = Number(lines.shift().split(" "))
let cont = 0
while (n > 0) {
    let lines1 = lines.shift().split(" ")
    let x = Number(lines1[0])
    let y = Number(lines1[1])

    if (x % 2 !== 0) {
        while (y > 0) {
            cont += x
            x = x + 2
            y--
        }
        console.log(cont)
        cont = 0
    } else if (x % 2 === 0) {
        x += 1
        while (y > 0) {
            cont += x
            x = x + 2
            y--
        }
        console.log(cont)
        cont = 0
    }
    n--
}