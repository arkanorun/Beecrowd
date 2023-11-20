let [a, b] = lines.shift().split(" ")
let canos = lines.shift().split(" ")
a = Number(a)
b = Number(b)

for (let i = 0; i < b; i++) {
    c = Math.abs(canos[i] - canos[i + 1])

    if (c > a) {
        console.log("GAME OVER")
        break;
    }

    if (i === (b - 2)) {
        console.log("YOU WIN")
        break;
    }
}