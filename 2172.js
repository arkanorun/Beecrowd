while (2) {
    let [a, b] = lines.shift().split(" ")
    a = Number(a)
    b = Number(b)

    if (a === 0 && b === 0) {
        break;
    }
    console.log(a * b)
}