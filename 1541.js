let line1 = lines.shift().split(" ")

while (line1) {

    let a = Number(line1[0])
    let b = Number(line1[1])
    let c = Number(line1[2])

    let lado = Math.floor(Math.sqrt(a * b * 100 / c))
    console.log(lado)

    if (Number(lines[0]) === 0) {
        break;
    }

    line1 = lines.shift().split(" ")
}