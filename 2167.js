let a = Number(lines.shift().split(" "))
let b = lines.shift().split(" ")
let count = 0
for (let i = 0; i < a; i++) {

    if (Number(b[i - 1]) > Number(b[i])) {
        console.log(i + 1)
        break;
    }
    count++
}
if (count === a) {
    console.log("0")
}