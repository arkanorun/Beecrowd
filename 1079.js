let b = Number(lines.shift().split(" "))

let media = 0


for (i = 0; i < b; i++) {
    let [a, b, c] = lines.shift().split(" ")
    media = (Number(a) * 2 + Number(b) * 3 + Number(c) * 5) / (2 + 3 + 5)
    console.log(media.toFixed(1))
}
