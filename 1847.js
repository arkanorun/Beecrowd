let [a, b, c] = lines.shift().split(" ")
a = Number(a)
b = Number(b)
c = Number(c)

if (a > b && c >= b) {
    console.log(":)")
}

if (b > a && b >= c) {
    console.log(":(")
}

if (b > a && c > b) {
    if ((b - a) > (c - b)) {
        console.log(":(")
    } else if ((b - a) <= (c - b)) {
        console.log(":)")
    }
}

if (a > b && b > c) {
    if ((b - a) < (c - b)) {
        console.log(":)")
    } else if ((b - a) >= (c - b)) {
        console.log(":(")
    }
}

if (a === b) {
    if (c > b) {
        console.log(":)")
    } else if (b >= c) {
        console.log(":(")
    }
}