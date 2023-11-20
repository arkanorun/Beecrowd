let entrada1 = lines.shift().split(" ")

while (lines.length != 0) {

    let count = 0

    let N = Number(entrada1[0])
    let I = Number(entrada1[1])


    for (let t = 0; t < N; t++) {
        let entrada2 = lines.shift().split(" ")

        let i = Number(entrada2[0])
        let j = Number(entrada2[1])

        if (i == I && j == 0) {
            count += 1
        }
    }
    console.log(count)

    if (lines.length < 2) {
        break;
    }
    entrada1 = lines.shift().split(" ")
}